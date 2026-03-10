import React, { useState, useEffect } from 'react';
import './App.css';
import Editor from './components/Editor';
import Navbar from './components/Navbar';
import DocumentList from './components/DocumentList';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}/documents`);
      const data = await response.json();
      setDocuments(data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const handleNewDocument = () => {
    setCurrentPage('editor');
    setCurrentDoc(null);
  };

  const handleOpenDocument = (doc) => {
    setCurrentDoc(doc);
    setCurrentPage('editor');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setCurrentDoc(null);
    fetchDocuments();
  };

  return (
    <div className="App">
      <Navbar 
        onNewDocument={handleNewDocument}
        onBackToHome={handleBackToHome}
        showBack={currentPage === 'editor'}
      />
      
      {currentPage === 'home' && (
        <DocumentList 
          documents={documents}
          onOpenDocument={handleOpenDocument}
          onNewDocument={handleNewDocument}
          onRefresh={fetchDocuments}
        />
      )}
      
      {currentPage === 'editor' && (
        <Editor 
          document={currentDoc}
          onSave={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;
