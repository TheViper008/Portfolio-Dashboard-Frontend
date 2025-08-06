📊 Portfolio Dashboard – Frontend
This is the React.js frontend for the Portfolio Analytics Dashboard — a single-page dashboard that displays insights about stock portfolio performance. It connects to a Django REST API backend, fetching live data and visualizing it using interactive charts and tables.

🧩 Project Overview
The dashboard includes:

💼 Overview cards showing total value, investment, and gains/losses

📋 A sortable, filterable, searchable holdings table

📊 Allocation pie charts (sector & market cap)

📈 Performance line chart comparing portfolio vs. Nifty50 and Gold

🏆 Best and worst performing stocks summary

✅ Responsive, modern design built with Tailwind CSS

⚙️ Tech Stack Used
React.js (CRA)

Axios – API communication

Chart.js + react-chartjs-2 – Visualizations

Tailwind CSS – Styling & layout

Vercel – Deployment

Django REST Framework (backend) – Data source

🖥️ How to Run Locally

1. Clone the repository:
   bash
   Copy
   Edit
   git clone https://github.com/YOUR_USERNAME/portfolio-frontend.git
   cd portfolio-dashboard
2. Install dependencies:
   bash
   Copy
   Edit
   npm install
3. Create .env file:
   At the root of the project, add:

env
Copy
Edit
REACT_APP_API_URL=https://portfolio-backend-6il2.onrender.com/api/portfolio 4. Run the app:
bash
Copy
Edit
npm start
This will start your frontend on http://localhost:3000 and connect it to your deployed backend.

🚀 Hosted URLs
🔗 Frontend (Vercel):
https://portfolio-frontend-three-zeta.vercel.app

🔗 Backend (Render):
https://portfolio-backend-6il2.onrender.com

✅ Status
Fully deployed

Mobile-responsive

Fetching live data from backend

Search, sort, filter all working
