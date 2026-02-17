import { Sandpack } from '@codesandbox/sandpack-react'

function CodePlayground({ files, template = 'react', title }) {
  return (
    <div className="playground-container">
      {title && <div className="playground-label">{title}</div>}
      <Sandpack
        template={template}
        files={files}
        theme="light"
        options={{
          showNavigator: false,
          showTabs: Object.keys(files).length > 1,
          showLineNumbers: true,
          showInlineErrors: true,
          editorHeight: 350,
          editorWidthPercentage: 55,
        }}
      />
    </div>
  )
}

export default CodePlayground
