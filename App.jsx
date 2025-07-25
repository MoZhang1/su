import React, { useState } from 'react';

export default function SuRPSGame() {
  const [step, setStep] = useState(0);
  const [text, setText] = useState('');
  const [mode, setMode] = useState('1');
  const [result, setResult] = useState(null);

  const playGame = () => {
    setStep(2);
    setResult("苏老师胜利！");
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      {step === 0 && (
        <div>
          <h2>苏老师今天要做什么决定？</h2>
          <input
            placeholder="如果你赢了你就去……"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: '80%', marginBottom: 10 }}
          />
          <div>
            <label><input type="radio" value="1" checked={mode === '1'} onChange={() => setMode('1')} /> 一局一胜</label>
            <label style={{ marginLeft: 10 }}><input type="radio" value="3" checked={mode === '3'} onChange={() => setMode('3')} /> 三局两胜</label>
          </div>
          <button onClick={() => setStep(1)} style={{ marginTop: 10 }}>开始游戏</button>
        </div>
      )}
      {step === 1 && (
        <div>
          <h3>对战开始！（对手：张子墨）</h3>
          <button onClick={playGame}>出拳！（苏老师赢）</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>{result}</h2>
          <p>那就去：{text}</p>
        </div>
      )}
    </div>
  );
}
