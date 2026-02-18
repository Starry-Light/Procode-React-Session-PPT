import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

function CodeBlock({ code, language = 'bash', showLineNumbers = false }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '8px',
          padding: '1.5rem',
          fontSize: '0.95rem',
          margin: 0,
        }}
        showLineNumbers={showLineNumbers}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
