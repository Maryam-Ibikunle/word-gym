import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";


function Toolbar({minute, second, wordCount, isWriting}) {
    const [editor] = useLexicalComposerContext();
  
    return (
      <div className='w-full flex flex-row justify-between h-16 bg-linear-to-r from-secondary to-primary p-4 px-6 rounded-3xl lg:w-1/2 lg:self-end lg:fixed lg:mb-4 lg:bottom-0'>
  
        {/* Formatting buttons */}
        <div className='flex flex-row justify-between gap-4 text-primary text-2xl'>
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
            }
          >
            <b>B</b>
          </button>
  
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
            }
          >
            <i>I</i>
          </button>
  
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
            }
          >
            <u>U</u>
          </button>
        </div>
  
        {/* Timer + word count */}
        <div className='flex flex-row justify-between gap-4 text-white'>
  
          <div className='flex flex-col justify-center items-center'>
          <div 
            className='flex flex-col justify-center items-center'
            >
              {minute}:{second.toString().padStart(2,"0")}
              <span className='text-sm md:text-xl'>{isWriting?"Writing...":"Paused"}</span>
            </div>
          </div>
  
          <div 
            className='flex flex-col justify-center items-center'
            >
              {wordCount}
              <span className='text-sm md:text-xl'> Words</span>
            </div>
  
        </div>
  
      </div>
    );
  }
  export default Toolbar