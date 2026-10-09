* { box-sizing: border-box; }

:root {
  --bg: #0b1020;
  --panel: #121b2b;
  --panel-strong: #1b263d;
  --card: #101a2d;
  --primary: #7dd3fc;
  --primary-strong: #38bdf8;
  --text: #e5eefb;
  --muted: #a5b6d5;
  --border: rgba(125, 211, 252, 0.25);
  --shadow: 0 20px 45px rgba(15, 23, 42, 0.35);
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: radial-gradient(circle at top, #13213f, var(--bg) 40%);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button {
  font: inherit;
}

.app-shell {
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px 20px 40px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--primary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 12px;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.primary-button {
  border: 1px solid var(--border);
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #05131f;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  box-shadow: var(--shadow);
  cursor: pointer;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(320px, 420px) minmax(0, 1fr);
  gap: 24px;
}

.tree-panel,
.detail-panel {
  background: rgba(18, 27, 43, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.tree-panel {
  padding: 16px 12px 20px;
  overflow: auto;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px 18px;
  color: var(--muted);
}

.panel-header h2 {
  margin: 0;
  color: var(--text);
  font-size: 1.05rem;
}

.tree-branch {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.children-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
}

.tree-node {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: rgba(16, 26, 45, 0.9);
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 10px 12px;
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: 0.2s ease;
}

.tree-node:hover,
.tree-node.active {
  border-color: var(--border);
  background: rgba(32, 48, 75, 0.9);
}

.node-bullet {
  color: var(--primary);
  font-size: 0.9rem;
}

.detail-panel {
  padding: 24px;
}

.node-meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  display: inline-flex;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.14);
  border: 1px solid var(--border);
  color: var(--primary);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.node-meta h2 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
}

.card {
  background: rgba(11, 16, 32, 0.7);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 20px;
  margin-bottom: 18px;
}

.label {
  margin: 0 0 10px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.card p,
.card li {
  color: var(--text);
  line-height: 1.7;
}

.card ul {
  margin: 0;
  padding-left: 18px;
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
