import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { PERSONAL_INFO, PROJECTS, SKILLS, TERMINAL_COMMANDS_HELP } from '../../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Play, Sparkles } from 'lucide-react';
import { ThemeColor } from '../../types';

interface OutputItem {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  text: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const { 
    isTerminalOpen, 
    setIsTerminalOpen, 
    playClick, 
    playHover, 
    playScatter, 
    playSuccess,
    setTheme 
  } = useTheme();

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  
  const [outputs, setOutputs] = useState<OutputItem[]>([
    {
      id: 'init-1',
      type: 'output',
      text: (
        <div className="space-y-1">
          <div className="text-cyan-400 font-bold">Aman Kumar Terminal Subsystem v2.5 [Kernel: Linux 6.8 / Termux]</div>
          <div className="text-slate-400">Type <span className="text-yellow-300 font-semibold">&apos;help&apos;</span> or <span className="text-cyan-300 font-semibold">&apos;neofetch&apos;</span> to discover system commands.</div>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isTerminalOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isTerminalOpen, isMinimized, outputs]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    playClick();
    setHistory(prev => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const newOutputs: OutputItem[] = [
      ...outputs,
      {
        id: Math.random().toString(),
        type: 'input',
        text: <span>aman@matrix:~# {trimmed}</span>
      }
    ];

    const tokens = trimmed.split(' ');
    const command = tokens[0].toLowerCase();
    const arg = tokens[1]?.toLowerCase();

    switch (command) {
      case 'help':
        newOutputs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1.5 my-2">
              <div className="text-cyan-300 font-bold">AVAILABLE COMMANDS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
                {TERMINAL_COMMANDS_HELP.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-yellow-400 font-mono w-28 shrink-0">{c.cmd}</span>
                    <span className="text-slate-400">{c.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        });
        break;

      case 'neofetch':
        newOutputs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="font-mono text-xs my-2 flex flex-col sm:flex-row gap-4 items-start text-cyan-300">
              <pre className="text-cyan-400 select-none text-[11px] leading-tight font-bold">
{`   ██████╗  ██╗  ██╗
  ██╔═══██╗ ██║ ██╔╝
  ██║   ██║ █████═╝ 
  ██║   ██║ ██╔═██╗ 
  ╚██████╔╝ ██║ ╚██╗
   ╚═════╝  ╚═╝  ╚═╝
   [2006-AMAN]`}
              </pre>
              <div className="space-y-1 text-slate-300 text-xs">
                <div><span className="text-cyan-400 font-bold">USER:</span> Aman Kumar (@2006-Aman)</div>
                <div><span className="text-cyan-400 font-bold">ROLE:</span> Full-Stack Web Architect & 3D Explorer</div>
                <div><span className="text-cyan-400 font-bold">DEGREE:</span> B.Tech in Computer Science & Engineering</div>
                <div><span className="text-cyan-400 font-bold">OS:</span> Kali Linux 2024 / Android Termux / Ubuntu</div>
                <div><span className="text-cyan-400 font-bold">SHELL:</span> zsh 5.9 (x86_64-pc-linux-gnu)</div>
                <div><span className="text-cyan-400 font-bold">PROJECTS:</span> boardVault, foodloop.ai, SolFinder</div>
                <div><span className="text-cyan-400 font-bold">STATUS:</span> 🟢 Available for internships & collaborations</div>
                <div><span className="text-cyan-400 font-bold">UPTIME:</span> Continuous Engineering Flow</div>
              </div>
            </div>
          )
        });
        break;

      case 'about':
        newOutputs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="my-2 text-slate-300 text-xs space-y-1">
              <div className="font-bold text-white text-sm">{PERSONAL_INFO.name}</div>
              <p>{PERSONAL_INFO.bio}</p>
              <div className="text-cyan-300 font-mono">Location: {PERSONAL_INFO.location} | Education: {PERSONAL_INFO.subRole}</div>
            </div>
          )
        });
        break;

      case 'skills':
        newOutputs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="my-2 space-y-1">
              <div className="text-cyan-300 font-bold">CORE COMPETENCIES:</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {SKILLS.map((s, i) => (
                  <div key={i} className="p-1.5 rounded bg-slate-900 border border-white/10 flex justify-between">
                    <span className="text-white">{s.name}</span>
                    <span className="text-cyan-400 font-bold">{s.proficiency}%</span>
                  </div>
                ))}
              </div>
            </div>
          )
        });
        break;

      case 'projects':
        newOutputs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="my-2 space-y-2">
              <div className="text-cyan-300 font-bold">FEATURED SOFTWARE REPOSITORIES:</div>
              {PROJECTS.map((p, i) => (
                <div key={i} className="p-2 rounded bg-slate-900/80 border border-white/10 text-xs space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-bold">{p.title}</span>
                    <span className="text-slate-500 font-mono">{p.categoryLabel}</span>
                  </div>
                  <div className="text-slate-400">{p.tagline}</div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    GitHub: <a href={p.githubUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">{p.githubUrl}</a>
                  </div>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'repo':
        if (!arg) {
          newOutputs.push({
            id: Math.random().toString(),
            type: 'error',
            text: <span>Usage: repo &lt;name&gt; (e.g. repo boardvault, repo foodloop, repo solfinder)</span>
          });
        } else {
          const match = PROJECTS.find(p => p.id.toLowerCase().includes(arg) || p.title.toLowerCase().includes(arg));
          if (match) {
            window.open(match.githubUrl, '_blank');
            newOutputs.push({
              id: Math.random().toString(),
              type: 'success',
              text: <span>Opening repository for {match.title}: {match.githubUrl}</span>
            });
          } else {
            newOutputs.push({
              id: Math.random().toString(),
              type: 'error',
              text: <span>Project not found. Type &apos;projects&apos; to view all names.</span>
            });
          }
        }
        break;

      case 'scatter':
        playScatter();
        newOutputs.push({
          id: Math.random().toString(),
          type: 'success',
          text: <span>Quantum 3D particle dispersion protocol triggered! Shards scattered.</span>
        });
        break;

      case 'contact':
        newOutputs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="my-2 text-xs space-y-1 text-slate-300">
              <div><span className="text-cyan-400">EMAIL:</span> {PERSONAL_INFO.email}</div>
              <div><span className="text-cyan-400">GITHUB:</span> {PERSONAL_INFO.githubUrl}</div>
              <div><span className="text-cyan-400">ALT GITHUB:</span> {PERSONAL_INFO.githubAltUrl}</div>
              <div><span className="text-cyan-400">STATUS:</span> Open for Software Engineering internships & collaborations.</div>
            </div>
          )
        });
        break;

      case 'theme':
        if (['cyan', 'purple', 'emerald', 'amber'].includes(arg)) {
          setTheme(arg as ThemeColor);
          newOutputs.push({
            id: Math.random().toString(),
            type: 'success',
            text: <span>Theme switched to [{arg.toUpperCase()}].</span>
          });
        } else {
          newOutputs.push({
            id: Math.random().toString(),
            type: 'error',
            text: <span>Invalid theme. Choose: cyan, purple, emerald, or amber.</span>
          });
        }
        break;

      case 'matrix':
        setTheme('emerald');
        newOutputs.push({
          id: Math.random().toString(),
          type: 'success',
          text: <span>[MATRIX PROTOCOL ENGAGED] Follow the white rabbit...</span>
        });
        break;

      case 'clear':
        setOutputs([]);
        setInputVal('');
        return;

      case 'sudo':
        newOutputs.push({
          id: Math.random().toString(),
          type: 'error',
          text: <span>Permission denied: User Aman is already root on this terminal.</span>
        });
        break;

      default:
        newOutputs.push({
          id: Math.random().toString(),
          type: 'error',
          text: <span>Command not recognized: &apos;{trimmed}&apos;. Type &apos;help&apos; for list.</span>
        });
    }

    setOutputs(newOutputs);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isTerminalOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-xl px-4 sm:px-0">
      <div className="glass-panel-glow rounded-2xl border border-cyan-500/40 bg-slate-950/95 shadow-2xl overflow-hidden font-mono text-xs flex flex-col transition-all duration-300">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-white text-xs">aman@kali-terminal: ~</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 rounded text-slate-400 hover:text-white"
              title={isMinimized ? "Maximize" : "Minimize"}
            >
              {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                playClick();
                setIsTerminalOpen(false);
              }}
              className="p-1 rounded text-slate-400 hover:text-red-400"
              title="Close Terminal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        {!isMinimized && (
          <>
            <div className="p-4 max-h-72 overflow-y-auto space-y-2 text-slate-300 scroll-smooth">
              {outputs.map((item) => (
                <div
                  key={item.id}
                  className={`leading-relaxed ${
                    item.type === 'error'
                      ? 'text-red-400'
                      : item.type === 'success'
                      ? 'text-emerald-400'
                      : item.type === 'input'
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300'
                  }`}
                >
                  {item.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Prompt Input Form */}
            <div className="px-4 py-2.5 bg-slate-900/60 border-t border-white/10 flex items-center gap-2">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'neofetch', 'scatter'..."
                className="flex-1 bg-transparent border-none outline-none text-white text-xs font-mono placeholder:text-slate-600"
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="p-1 rounded hover:bg-white/10 text-cyan-400"
                title="Execute"
              >
                <Play className="w-3 h-3" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
