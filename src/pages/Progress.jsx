import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND } from 'lexical';

// 1. Toolbar component to trigger formatting commands
function Toolbar() {
  const [editor] = useLexicalComposerContext();

  return (
    <div style={styles.toolbar}>
      <button
        style={styles.button}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
      >
        <b>B</b>
      </button>
      <button
        style={styles.button}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
      >
        <i>I</i>
      </button>
      <button
        style={styles.button}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
      >
        <u>U</u>
      </button>
    </div>
  );
}

// 2. Main Editor Component
export default function SimpleEditor() {
  const initialConfig = {
    namespace: 'SimpleEditor',
    theme: {
      text: {
        bold: 'editor-text-bold',
        italic: 'editor-text-italic',
        underline: 'editor-text-underline',
      },
    },
    onError: (error) => console.error(error),
  };

  return (
    <div style={styles.container}>
      {/* Inline styles for Lexical theme classes */}
      <style>{`
        .editor-text-bold { font-weight: bold; }
        .editor-text-italic { font-style: italic; }
        .editor-text-underline { text-decoration: underline; }
      `}</style>

      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar />
        <div style={styles.editorWrapper}>
          <RichTextPlugin
            contentEditable={<ContentEditable style={styles.contentEditable} />}
            placeholder={<div style={styles.placeholder}>Type here...</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
        </div>
      </LexicalComposer>
    </div>
  );
}

// 3. Basic CSS styling
const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    fontFamily: 'sans-serif',
  },
  toolbar: {
    display: 'flex',
    gap: '6px',
    padding: '8px',
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ccc',
  },
  button: {
    padding: '6px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #bbb',
    background: '#fff',
  },
  editorWrapper: {
    position: 'relative',
    minHeight: '150px',
  },
  contentEditable: {
    minHeight: '150px',
    padding: '12px',
    outline: 'none',
  },
  placeholder: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    color: '#888',
    pointerEvents: 'none',
  },
};
