# InkFlow - Document Editor

A modern, full-stack document editor built with React, Node.js, and PostgreSQL. Similar to Microsoft Word, InkFlow allows you to create, edit, and manage documents with rich formatting capabilities.

## 🎯 Features

- ✏️ **Rich Text Editing** - Bold, italic, underline, heading styles, and more
- 📄 **Document Management** - Create, open, edit, and delete documents
- 💾 **Auto-save** - Save documents with one click
- 🎨 **Formatting Toolbar** - Easy-to-use formatting options
- 📊 **Document Preview** - View all your documents at a glance
- 🔒 **Data Persistence** - All documents saved in PostgreSQL database
- 📱 **Responsive Design** - Works on desktop and tablets

## 🛠️ Tech Stack

- **Frontend**: React 18, React Quill, Axios
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Other**: Docker, Sequelize ORM

## 📦 Project Structure

```
InkFlow/
├── frontend/                 # React application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── styles/          # Component styles
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json
├── backend/                  # Node.js/Express API
│   ├── database/            # Database configuration
│   ├── models/              # Sequelize models
│   ├── routes/              # API routes
│   ├── server.js            # Express server
│   └── package.json
├── database/                # PostgreSQL setup
└── docker-compose.yml       # PostgreSQL container
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Docker and Docker Compose
- PostgreSQL (or use Docker)

### 1. Clone the Repository

```bash
git clone https://github.com/shira1138/InkFlow.git
cd InkFlow
```

### 2. Set Up PostgreSQL Database

Using Docker Compose (recommended):

```bash
docker-compose up -d
```

This starts a PostgreSQL container with the credentials:
- **User**: inkflow
- **Password**: inkflow
- **Database**: inkflow_db
- **Port**: 5432

Or set up PostgreSQL manually and create a database:

```sql
CREATE DATABASE inkflow_db;
CREATE USER inkflow WITH PASSWORD 'inkflow';
GRANT ALL PRIVILEGES ON DATABASE inkflow_db TO inkflow;
```

### 3. Set Up Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend will run on `http://localhost:5000`

### 4. Set Up Frontend

In a new terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm start
```

The frontend will run on `http://localhost:3000`

### 5. Access the Application

Open your browser and go to `http://localhost:3000`

## 📚 API Endpoints

### Documents

- **GET** `/api/documents` - Get all documents
- **GET** `/api/documents/:id` - Get a specific document
- **POST** `/api/documents` - Create a new document
- **PUT** `/api/documents/:id` - Update a document
- **DELETE** `/api/documents/:id` - Delete a document

## 🎨 Features Breakdown

### Frontend Components

1. **Navbar** - Navigation with new document button
2. **Editor** - Rich text editor with formatting toolbar
3. **DocumentList** - Grid view of all documents
4. **App** - Main application container

### Backend Routes

1. **documents.js** - CRUD operations for documents

### Database Models

1. **Document** - Schema for document storage

## 🔧 Configuration

### Frontend Environment Variables

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Backend Environment Variables

```env
DATABASE_URL=postgresql://inkflow:inkflow@localhost:5432/inkflow_db
NODE_ENV=development
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

## 📖 Usage

1. **Create a Document** - Click "New Document" button
2. **Edit** - Use the rich text toolbar to format text
3. **Save** - Click the "Save" button to save your document
4. **Open** - Click "Edit" on any document card to open it
5. **Delete** - Click "Delete" to remove a document

## 🚧 Future Enhancements

- [ ] PDF/DOCX export functionality
- [ ] Real-time collaboration (WebSockets)
- [ ] Comments and suggestions
- [ ] Track changes
- [ ] User authentication
- [ ] Cloud storage integration
- [ ] Document sharing
- [ ] Version history
- [ ] Tables support
- [ ] Image uploads

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## 📧 Support

For issues or questions, please create an issue in the GitHub repository.

---

**Happy Writing! 📝✨**