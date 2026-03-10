import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/Editor.css';

const modules = {
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  },
};

const formats = [
  'header', 'bold', 'italic', 'underline', 'strike',
  'list', 'script', 'indent', 'size', 'color', 'background',
  'font', 'align', 'link', 'image', 'video', 'blockquote', 'code-block'
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

      {/* Ribbon Toolbar (Word-like) */}
      <div className="ribbon-toolbar">
        <div className="ribbon-group">
          <label className="toolbar-label">Home Tab</label>
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
    </div>
  );
}

export default Editor;
