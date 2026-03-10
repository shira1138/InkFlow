import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ToolbarExtras from './ToolbarExtras';
import '../styles/Editor.css';

const modules = {
  toolbar: {
    container: [
      // Headers and Basic Formatting
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
      // Text Styles
      ['bold', 'italic', 'underline', 'strike'],
      
      // Lists and Indentation
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'list': 'check' }],
      
      // Superscript and Subscript
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      
      // Font Family - Comprehensive Selection
      [{ 'font': [
        false, // default
        'serif', 'monospace', 'sans-serif',
        'Georgia', 'Times New Roman', 'Courier New',
        'Arial', 'Helvetica', 'Verdana', 'Comic Sans MS',
        'Trebuchet MS', 'Impact', 'Palatino', 'Garamond',
        'Bookman', 'Consolas', 'Calibri', 'Cambria',
        'Century Gothic', 'Century Schoolbook', 'Perpetua',
        'Lucida Console', 'Lucida Handwriting'
      ]}],
      
      // Font Size - All sizes
      [{ 'size': [
        '8px', '10px', '12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px',
        '32px', '36px', '40px', '48px', '56px', '64px', '72px', '96px'
      ]}],
      
      // Colors and Background
      [{ 'color': [] }, { 'background': [] }],
      
      // Text Alignment
      [{ 'align': [] }],
      
      // Blockquote and Code
      ['blockquote', 'code-block'],
      
      // Divider
      ['divider'],
      
      // Media
      ['link', 'image', 'video'],
      
      // Clear Formatting
      ['clean']
    ],
  },
};

const formats = [
  'header', 'bold', 'italic', 'underline', 'strike',
  'list', 'script', 'indent', 'size', 'color', 'background',
  'font', 'align', 'link', 'image', 'video', 'blockquote', 'code-block',
  'divider'
];

function Editor({ document, onSave }) {
  const [title, setTitle] = useState('Untitled Document');
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    if (document) {
      setTitle(document.title);
      setContent(document.content || '');
      updateStats(document.content || '');
    }
  }, [document]);

  const updateStats = (html) => {
    const text = html.replace(/<[^>]*>/g, '');
    const lines = text.split('\n').length;
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    setLineCount(lines);
    setWordCount(words);
  };

  const handleContentChange = (value) => {
    setContent(value);
    updateStats(value);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const url = document
        ? `${process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}/documents/${document.id}`
        : `${process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}/documents`;

      const method = document ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (response.ok) {
        setSaveMessage('Document saved successfully! ✓');
        setTimeout(() => {
          setSaveMessage('');
          onSave();
        }, 1500);
      } else {
        setSaveMessage('Error saving document');
      }
    } catch (error) {
      console.error('Error saving document:', error);
      setSaveMessage('Error saving document');
    } finally {
      setIsSaving(false);
    }
  };

  const handleExportPDF = () => {
    alert('PDF export coming soon!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="editor-container">
      {/* Top Toolbar with File Operations */}
      <div className="editor-top-bar">
        <div className="editor-left-tools">
          <button className="btn-tool" title="Save (Ctrl+S)" onClick={handleSave}>💾</button>
          <button className="btn-tool" title="Print (Ctrl+P)" onClick={handlePrint}>🖨️</button>
          <button className="btn-tool" title="Undo">↶</button>
          <button className="btn-tool" title="Redo">↷</button>
        </div>
        <div className="editor-center-info">
          <input
            type="text"
            className="document-title-word"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Document Title"
          />
        </div>
        <div className="editor-right-tools">
          <button className="btn-export" onClick={handleExportPDF}>
            📄 PDF
          </button>
          <button className="btn-save" onClick={handleSave} disabled={isSaving}>
            {isSaving ? '⏳' : '💾'} {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="editor-status-bar">
        <span className="status-item">📄 {title || 'Untitled'}</span>
        <span className="status-item">| Editing</span>
        <span className="status-item">| Words: {wordCount}</span>
        <span className="status-item">| Lines: {lineCount}</span>
      </div>

      {saveMessage && <div className="save-message">{saveMessage}</div>}

      {/* Main Content with Sidebar */}
      <div className="editor-main">
        {/* Ribbon Toolbar (Word-like) */}
        <div className="ribbon-toolbar">
          <div className="ribbon-group">
            <label className="toolbar-label">Home Tab - Full Formatting Options</label>
            <div className="group-content">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={handleContentChange}
                modules={modules}
                formats={formats}
                className="quill-editor-word"
                placeholder="Start typing your document..."
              />
            </div>
          </div>
        </div>

        {/* Sidebar with Extras */}
        <div className="editor-sidebar">
          <ToolbarExtras onInsert={(text) => {
            setContent(content + text);
            updateStats(content + text);
          }} />
        </div>
      </div>
    </div>
  );
}

export default Editor;
