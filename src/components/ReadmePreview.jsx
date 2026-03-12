import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import copy from 'copy-to-clipboard';
import { FaCopy, FaDownload, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const ReadmePreview = ({ generatedReadme, setGeneratedReadme }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(generatedReadme);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedReadme], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="readme-preview">
      <div className="preview-header">
        <h2>Preview</h2>
        <div className="preview-actions">
          <button onClick={handleCopy} className="btn-action">
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? ' Copied!' : ' Copy'}
          </button>
          <button onClick={handleDownload} className="btn-action">
            <FaDownload /> Download
          </button>
        </div>
      </div>
      
      {generatedReadme ? (
        <div className="markdown-preview">
          <ReactMarkdown
            children={generatedReadme}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          />
        </div>
      ) : (
        <div className="preview-placeholder">
          <p>Fill in the form and click Generate to see your README preview</p>
        </div>
      )}
    </div>
  );
};

export default ReadmePreview;