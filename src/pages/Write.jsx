import React, { useEffect, useState, useRef } from 'react';
import { FolderBookmark, Sparkle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { $getRoot } from 'lexical';

import Toolbar from '../component/writing/Toolbar';

const Write = () => {
  const [seconds, setSeconds] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [isWriting, setIsWriting] = useState(false);
  const pauseTimer = useRef(null);

  // Read word count & active writing directly from Lexical
  const handleEditorChange = (editorState) => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      const trimmed = text.trim();

      const words = trimmed ? trimmed.split(/\s+/).length : 0;
      setWordCount(words);

      if (!isWriting && trimmed.length > 4) {
        setIsWriting(true);
      }

      clearTimeout(pauseTimer.current);
      pauseTimer.current = setTimeout(() => {
        setIsWriting(false);
      }, 60000);
    });
  };

  useEffect(() => {
    if (!isWriting) return;
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isWriting]);

  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;

  const initialConfig = {
    namespace: 'SimpleEditor',
    theme: {
      text: {
        bold: 'font-bold',
        italic: 'italic',
        underline: 'underline',
      },
    },
    onError: (error) => console.error(error),
  };

  return (
    <main className="bg-background flex flex-col relative my-18 lg:mt-0 md:pt-20 p-5 h-screen gap-4">
      <section className="flex items-center justify-between">
        <div className="inline-flex gap-1 items-center p-2 px-4 bg-tertiary/20 rounded-2xl text-sm md:text-lg">
          <FolderBookmark className="w-5 h-5 text-primary" />
          <span>Chapter 1</span>
        </div>
        <NavLink to="#">
          <button
            type="button"
            className="inline-flex gap-2 bg-linear-to-r from-[#580707] to-primary text-white px-4 p-2 rounded-2xl cursor-pointer"
          >
            <span>Finish & Analyze </span>
            <Sparkle />
          </button>
        </NavLink>
      </section>
      <LexicalComposer initialConfig={initialConfig}>
      <article className="border border-gray-300 rounded-3xl p-4 flex flex-col gap-3 mb-5 lg:mb-15 h-3/5 lg:h-3/4">
        
          
          <div className="relative min-h-75 mt-2">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="outline-none min-h-75 p-3"/>
              }
              placeholder={
                <div className="absolute top-3 left-3 text-gray-400 pointer-events-none">
                  Start writing here...
                </div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <OnChangePlugin onChange={handleEditorChange} />
          </div>
          
       
      </article>
      <Toolbar
            minute={minute}
            second={second}
            wordCount={wordCount}
            isWriting={isWriting}
          />
      </LexicalComposer>
    </main>
  );
};

export default Write;
