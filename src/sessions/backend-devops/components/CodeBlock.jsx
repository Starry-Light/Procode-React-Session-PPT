import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs, vscDarkPlus, gruvboxDark, gruvboxLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

function CodeBlock({ code, language = 'bash', showLineNumbers = false }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <SyntaxHighlighter
        language={language}
        style={gruvboxDark}
        customStyle={{
          borderRadius: '8px',
          padding: '1.5rem',
          fontSize: '1.05rem',
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
