:root {
    --bg-color: #0f172a;
    --panel-bg: #1e293b;
    --text-main: #f8fafc;
    --text-dim: #94a3b8;
    --accent: #38bdf8;
    --op-color: #0ea5e9;
    --util-color: #475569;
    --equal-bg: linear-gradient(135deg, #38bdf8, #818cf8);
    --shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.light-theme {
    --bg-color: #f1f5f9;
    --panel-bg: #ffffff;
    --text-main: #1e293b;
    --text-dim: #64748b;
    --accent: #0ea5e9;
    --op-color: #0284c7;
    --util-color: #cbd5e1;
    --equal-bg: linear-gradient(135deg, #0ea5e9, #2563eb);
    --shadow: 0 10px 25px rgba(0,0,0,0.1);
}

body {
    margin: 0;
    font-family: 'JetBrains Mono', monospace;
    background-color: var(--bg-color);
    color: var(--text-main);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: background 0.3s ease;
}

.app-container {
    display: flex;
    gap: 20px;
    height: 600px;
}

/* 履歴パネル */
.history-panel {
    width: 250px;
    background: var(--panel-bg);
    border-radius: 20px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.history-header {
    padding: 20px;
    border-bottom: 1px solid var(--text-dim);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
}

#history-list {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-y: auto;
}

.history-item {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    font-size: 0.8rem;
    text-align: right;
}

.history-item div:first-child { color: var(--text-dim); }
.history-item div:last-child { font-weight: bold; color: var(--accent); }

/* 電卓本体 */
.calculator {
    width: 360px;
    background: var(--panel-bg);
    border-radius: 24px;
    padding: 20px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
}

.display-section {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px;
    word-break: break-all;
}

.formula-preview {
    color: var(--text-dim);
    font-size: 1.2rem;
    min-height: 1.5rem;
}

.current-input {
    font-size: 3rem;
    font-weight: 700;
}

.keypad {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 20px;
}

.btn {
    height: 65px;
    border-radius: 16px;
    border: none;
    background: rgba(255,255,255,0.05);
    color: var(--text-main);
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
}

.btn:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
.btn:active { transform: translateY(0); }

.btn-op { color: var(--op-color); }
.btn-util { color: var(--text-dim); }
.btn-equal {
    grid-column: span 1;
    background: var(--equal-bg);
    color: white;
}

.btn-zero { grid-column: span 1; }

/* テーマスイッチの装飾 */
.theme-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.7rem;
}
