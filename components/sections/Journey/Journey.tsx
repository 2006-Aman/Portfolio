"use client";

/*
 * THE JOURNEY — depth-travel storytelling (Gallery Tunnel as the benchmark).
 *
 * What we took from the reference's engine:
 *   · forward motion through Z — here real CSS `translateZ` planes inside a
 *     `perspective` container instead of a Three.js camera
 *   · smooth camera interpolation — ScrollTrigger's scrub smoothing plays the
 *     role of CAMERA_CHASE: the scene eases toward the scroll target
 *   · fog / depth fade — opacity + a touch of blur as a function of distance;
 *     on a white canvas, fading to white IS the fog
 *   · appear from the distance, pass the camera — chapters travel from far Z,
 *     hold a focus plateau to be read, then fly past and dissolve
 *   · recycling — a fixed set of nodes is repositioned every update; nothing
 *     is created or destroyed while scrolling
 *   · rAF-driven, GPU-only writes (transform + opacity), ResizeObserver-free
 *     (ScrollTrigger handles invalidation on resize)
 *
 * What we deliberately did NOT take: WebGL and the image walls. Seven text
 * planes don't need a render pipeline — DOM keeps the typography crisp,
 * selectable and screen-readable, and the design-system tokens apply directly.
 */

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import styles from "./Journey.module.css";

type Chapter = {
  label: string;
  title: React.ReactNode;
  body: string;
};

const CHAPTERS: Chapter[] = [
  {
    label: "Introduction",
    title: (
      <>
        I&rsquo;m Aman — I engineer systems that{" "}
        <em className={styles.serif}>scale.</em>
      </>
    ),
    body: "Full Stack Developer & Computer Science Engineer building 3D interactive web experiences, robust backends, and high-performance digital products.",
  },
  {
    label: "Engineering Roots",
    title: (
      <>
        Built from the{" "}
        <em className={styles.serif}>ground up.</em>
      </>
    ),
    body: "From low-level C programming and Linux system mechanics to modern TypeScript frameworks and cloud infrastructure.",
  },
  {
    label: "Core Philosophy",
    title: (
      <>
        Clean code earns speed. Architecture earns{" "}
        <em className={`${styles.serif} ${styles.red}`}>trust.</em>
      </>
    ),
    body: "Performance first, reliability always · measure twice, optimize once · systems over screens · build software built to last.",
  },
  {
    label: "Multi-Agent & RAG",
    title: (
      <>
        Grounded intelligence —{" "}
        <em className={styles.serif}>KnowledgeX.</em>
      </>
    ),
    body: "Architected 6-agent collaborative workflows and grounded pgvector RAG pipelines, bridging unstructured documents with zero-hallucination AI reasoning.",
  },
  {
    label: "3D & Interactive Web",
    title: (
      <>
        Spatial computing meets <em className={`${styles.serif} ${styles.red}`}>performance.</em>
      </>
    ),
    body: "Pushing web interfaces beyond flat rectangles with Three.js, GPU shaders, GSAP, and smooth cinematic storytelling.",
  },
  {
    label: "Methodology",
    title: (
      <>
        Architecture → prototype →{" "}
        <em className={styles.serif}>benchmark</em> → deploy.
      </>
    ),
    body: "Model the domain, test failure modes, profile real workloads, and ship resilient digital products that scale seamlessly.",
  },
  {
    label: "Vision",
    title: (
      <>
        Building for what&rsquo;s{" "}
        <em className={`${styles.serif} ${styles.red}`}>next.</em>
      </>
    ),
    body: "Engineering next-generation web applications, intelligent developer tooling, and immersive computational experiences.",
  },
];

/* depth geometry */
const Z_STEP = 620; /* px of depth between chapters */
const Z_PAST = 480; /* how far past the camera a chapter flies */
const FOCUS_HOLD = 0.34; /* |d| below this = fully in focus (reading time) */
const AHEAD_VISIBLE = 1.65; /* chapters further ahead than this are gone */

export default function Journey() {
  const root = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const planesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = root.current;
    const track = trackRef.current;
    if (!el || !track) return;

    const n = CHAPTERS.length;
    const totalTravel = (n - 1) * Z_STEP;

    /*
     * We animate a single proxy value — `travel` in px — scrubbed by
     * ScrollTrigger across the pinned pin. Every tick we position each plane
     * in Z: z = i * Z_STEP - travel.
     *
     * Distance to focus: d = (z - 0) / Z_STEP.
     * When d ≈ 0 the chapter is at the reading plane (scale 1, full opacity).
     * When d > 0 it is ahead in the distance (scaled down, fogged).
     * When d < 0 it is flying past behind the camera.
     */
    const proxy = { travel: 0 };
    const planes = planesRef.current.filter(Boolean) as HTMLDivElement[];

    const render = () => {
      const travel = proxy.travel;

      planes.forEach((plane, i) => {
        const z = i * Z_STEP - travel;
        const d = z / Z_STEP; /* signed distance in chapter units */

        if (d > AHEAD_VISIBLE || z < -Z_PAST) {
          /* outside the visible volume — hide entirely */
          plane.style.visibility = "hidden";
          plane.style.opacity = "0";
          return;
        }

        plane.style.visibility = "visible";

        /* transform: real CSS translateZ */
        plane.style.transform = `translate3d(0, 0, ${z.toFixed(1)}px)`;

        /* opacity + depth fog:
           - in front (d > 0): ramp up as it approaches focus
           - focus plateau (|d| <= FOCUS_HOLD): 1.0
           - flying past (d < 0): quick fade so it dissolves as it reaches camera */
        let opacity = 0;
        let blur = 0;

        if (d >= 0) {
          if (d <= FOCUS_HOLD) {
            opacity = 1;
            blur = 0;
          } else {
            const t = (d - FOCUS_HOLD) / (AHEAD_VISIBLE - FOCUS_HOLD);
            opacity = Math.max(0, 1 - Math.pow(t, 1.25));
            blur = t * 7;
          }
        } else {
          /* z between 0 and -Z_PAST */
          const t = -z / Z_PAST;
          opacity = Math.max(0, 1 - t * 1.4);
          blur = t * 2;
        }

        plane.style.opacity = opacity.toFixed(3);
        plane.style.filter = blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : "none";
      });
    };

    /* initial layout before scroll triggers */
    render();

    /*
     * Pin the section for 4 viewport-heights so the visitor has real runway
     * to read seven chapters at leisure. Scrub is 1.1s — enough to feel like
     * a camera with physical mass gliding through a corridor.
     */
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: `+=${n * 60}%`,
      pin: true,
      scrub: 1.1,
      anticipatePin: 1,
      onUpdate: (self) => {
        proxy.travel = self.progress * totalTravel;
        render();
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section className={styles.journey} id="journey" ref={root}>
      <div className={styles.viewport}>
        {/* ambient vignette + grain to bind the white depth */}
        <div className={styles.vignette} aria-hidden="true" />

        {/* the perspective chamber */}
        <div className={styles.chamber}>
          <div className={styles.track} ref={trackRef}>
            {CHAPTERS.map((ch, i) => (
              <div
                className={styles.plane}
                key={ch.label}
                ref={(node) => {
                  planesRef.current[i] = node;
                }}
              >
                <div className={styles.card}>
                  <div className={styles.kicker}>
                    <span className={styles.dot} aria-hidden="true" />
                    <span>{ch.label}</span>
                  </div>
                  <h3 className={styles.title}>{ch.title}</h3>
                  <p className={styles.body}>{ch.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* quiet chrome: section index + scroll reminder */}
        <header className={styles.chrome}>
          <p className={styles.sectionTag}>
            <span>02</span> The Journey
          </p>
          <span className={styles.scrollTip} aria-hidden="true">
            Scroll to travel ↓
          </span>
        </header>
      </div>
    </section>
  );
}
