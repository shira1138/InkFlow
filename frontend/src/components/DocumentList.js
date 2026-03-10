import React from 'react';
import '../styles/DocumentList.css';

function DocumentList({ documents, onOpenDocument, onNewDocument, onRefresh }) {
  const handleDelete = async (docId) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}/documents/${docId}`,
          { method: 'DELETE' }
        );
        if (response.ok) {
          onRefresh();
        }
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    }
  };

  return (
    <div className="document-list-container">
      <div className="document-list-header">
        <h2>My Documents</h2>
        <button className="btn-new-doc" onClick={onNewDocument}>
          + Create New Document
        </button>
      </div>

      {documents.length === 0 ? (
        <div className="empty-state">
          <p>No documents yet. Create your first one!</p>
          <button className="btn-create" onClick={onNewDocument}>
            Create Document
          </button>
        </div>
      ) : (
        <div className="documents-grid">
          {documents.map((doc) => (
            <div key={doc.id} className="document-card">
              <div className="document-card-content">
                <h3>{doc.title}</h3>
                <p className="document-preview">
                  {doc.content ? doc.content.substring(0, 100) + '...' : 'No content'}
                </p>
                <p className="document-date">
                  {new Date(doc.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="document-card-actions">
                <button
                  className="btn-open"
                  onClick={() => onOpenDocument(doc)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(doc.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DocumentList;
