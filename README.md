# MERN Stack URL Shortener

A full-stack web application built with the **MERN** (MongoDB, Express, React, Node.js) stack that allows users to shorten long URLs into clean, shareable links.  
The application also includes an **admin panel** to track link statistics.

---

## ✨ Live Demo ✨  
🔗 **[View Live Application](https://url-shortener-delta-weld.vercel.app/)**  

---

## 🚀 Features

- **🔗 Shorten URLs:** Enter any valid long URL to generate a unique, short link
- **🔄 Redirection:** Visiting a short link redirects the user to the original long URL
- **📊 Click Tracking:** The application counts how many times each short link has been visited
- **📋 Copy to Clipboard:** A one-click button to easily copy the generated short URL
- **🎛️ Admin Panel:** A dashboard that displays all created links, their original destination, and their click counts
- **📱 Responsive Design:** A clean, modern, and fully responsive interface that works on all devices

---

## 🛠️ Tech Stack

### **Frontend**
- React.js (with Vite)
- Axios for API requests
- React Icons for UI icons
- CSS3 for styling

### **Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests

### **Deployment**
- Vercel for both frontend and backend hosting

---

## 📁 Project Structure

```
mern-url-shortener/
│
├── backend/
│   ├── models/
│   │   └── Url.js
│   ├── routes/
│   │   └── urls.js
│   ├── middleware/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── .env.local
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## 🚀 Local Setup and Installation

To run this project on your local machine, follow these steps.

### **Prerequisites**

- Node.js (v14 or later)
- npm
- MongoDB (either a local installation or a free cluster from MongoDB Atlas)

### **1. Clone the Repository**

```bash
git clone https://github.com/Arshlankhann/URL-shortener
cd mern-url-shortener
```

### **2. Backend Setup**

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the /backend directory
touch .env
```

Your `backend/.env` file should look like this:

```env
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
PORT=5000
NODE_ENV=development
```

```bash
# Start the backend server
npm start
```

The backend will be running at `http://localhost:5000`.

### **3. Frontend Setup**

```bash
# Navigate to the frontend directory from the root
cd frontend

# Install dependencies
npm install

# Create a .env.local file in the /frontend directory
touch .env.local
```

Your `frontend/.env.local` file should look like this:

```env
VITE_API_BASE_URL=http://localhost:5000
```

```bash
# Start the frontend development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL provided by Vite).

---

## 📡 API Endpoints

### **Base URL:** `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/urls/shorten` | Create a shortened URL |
| GET | `/urls` | Get all URLs (Admin) |
| GET | `/:shortId` | Redirect to original URL |
| GET | `/urls/stats/:shortId` | Get URL statistics |

### **Example API Usage**

#### Shorten a URL
```javascript
POST /api/urls/shorten
Content-Type: application/json

{
  "longUrl": "https://www.example.com/very/long/url/here"
}
```

#### Response
```javascript
{
  "shortUrl": "http://localhost:5000/abc123",
  "longUrl": "https://www.example.com/very/long/url/here",
  "shortId": "abc123",
  "clicks": 0,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

## 🔧 Environment Variables

### **Backend (.env)**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/urlshortener
BASE_URL=http://localhost:5000
PORT=5000
NODE_ENV=development
```

### **Frontend (.env.local)**
```env
VITE_API_BASE_URL=http://localhost:5000
```

---

## 🌐 Deployment

This application is deployed on **Vercel**.

### **Backend Deployment**
1. Push your backend code to a GitHub repository
2. Connect the repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy as a Node.js service

### **Frontend Deployment**
1. Push your frontend code to a GitHub repository
2. Connect the repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy as a React (Vite) application

### **Important Deployment Notes**
- Update the backend's CORS policy to allow requests from the frontend's production domain
- Set the `BASE_URL` in backend environment variables to your deployed backend URL
- Set the `VITE_API_BASE_URL` in frontend environment variables to your deployed backend URL

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Arshlan Khan**  - arshlank894@gmail.com

**Project Link:** https://github.com/Arshlankhann/URL-shortener

---

## 🙏 Acknowledgments

- [MongoDB](https://www.mongodb.com/) for the database
- [Express.js](https://expressjs.com/) for the backend framework
- [React](https://reactjs.org/) for the frontend library
- [Node.js](https://nodejs.org/) for the runtime environment
- [Vercel](https://vercel.com/) for hosting and deployment
