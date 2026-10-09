import { useMemo, useState } from 'react'
import learningTree from './data/learningTree'

function findNodeById(node, targetId) {
  if (node.id === targetId) return node

  for (const child of node.children || []) {
    const found = findNodeById(child, targetId)
    if (found) return found
  }

  return null
}

function TreeNode({ node, depth, activeId, onSelect }) {
  const isActive = node.id === activeId

  return (
    <div className="tree-branch" style={{ marginLeft: depth * 18 }}>
      <button
        type="button"
        className={`tree-node ${isActive ? 'active' : ''}`}
        onClick={() => onSelect(node.id)}
      >
        <span className="node-bullet">{node.children?.length ? '◉' : '◌'}</span>
        <span>{node.title}</span>
      </button>

      {node.children?.length ? (
        <div className="children-group">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              activeId={activeId}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function App() {
  const [activeId, setActiveId] = useState('root')

  const activeNode = useMemo(() => findNodeById(learningTree, activeId), [activeId])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">AI 助手学习系统</p>
          <h1>知识树学习面板</h1>
        </div>
        <button type="button" className="primary-button">
          新增对话节点
        </button>
      </header>

      <main className="content-grid">
        <aside className="tree-panel">
          <div className="panel-header">
            <h2>学习地图</h2>
            <span>{learningTree.title}</span>
          </div>
          <TreeNode node={learningTree} depth={0} activeId={activeId} onSelect={setActiveId} />
        </aside>

        <section className="detail-panel">
          <div className="node-meta">
            <span className="tag">当前节点</span>
            <h2>{activeNode?.title}</h2>
          </div>

          <div className="card question-card">
            <p className="label">提问</p>
            <p>{activeNode?.question}</p>
          </div>

          <div className="card answer-card">
            <p className="label">回答 / 结论</p>
            <p>{activeNode?.answer}</p>
          </div>

          <div className="insights-grid">
            <div className="card">
              <p className="label">关键知识点</p>
              <ul>
                {(activeNode?.keyPoints || []).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <p className="label">下一步建议</p>
              <ul>
                {(activeNode?.nextSteps || []).map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
