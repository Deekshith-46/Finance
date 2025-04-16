Personal Finance Visualizer
A simple web application for tracking personal finances, built with Next.js, React, shadcn, Recharts, and MongoDB.
Features

Add, edit, and delete transactions (amount, date, description)
View all transactions in a responsive table
Visualize monthly expenses with a bar chart
Form validation and error handling
Beautiful, responsive UI with shadcn components

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v18 or later): Download from nodejs.org.
Git: Download from git-scm.com.
MongoDB Atlas account: Sign up at www.mongodb.com/cloud/atlas.

Step-by-Step Setup Instructions
Follow these steps exactly to set up and run the application. Each step is designed to be beginner-friendly.
1. Install Node.js

Download and install Node.js (v18 or later) from nodejs.org.
Open a terminal (e.g., Command Prompt, Terminal, or VS Code terminal) and verify installation:node --version
npm --version


Expected output: node version >= 18.0.0, npm version >= 8.0.0.

2. Install Git

Download and install Git from git-scm.com.
Verify installation:git --version


Expected output: git version >= 2.0.0.

3. Set Up MongoDB Atlas

Sign up for a free MongoDB Atlas account at www.mongodb.com/cloud/atlas.
Create a new cluster (choose the free tier).
In the cluster dashboard, click “Connect” > “Connect your application”.
Copy the connection string, which looks like:mongodb+srv://<username>:<password>@cluster0.mongodb.net/finance?retryWrites=true&w=majority


Replace <username> and <password> with your MongoDB Atlas credentials.

4. Create the Next.js Project

Open a terminal and create a new directory for the project:mkdir personal-finance-visualizer
cd personal-finance-visualizer


Initialize a new Next.js project:npx create-next-app@latest .


When prompted:
Choose JavaScript (not TypeScript).
Disable ESLint (or enable if preferred).
Do not use src/ directory.
Use default app/ directory (or confirm pages/ for this setup).
Accept other defaults.


This sets up the basic Next.js project structure.

5. Install Dependencies

Install all required packages by running:npm install @radix-ui/react-dialog@1.0.5 @radix-ui/react-label@2.0.2 mongodb@6.3.0 next@14.2.3 react@18 react-dom@18 recharts@2.12.7 tailwindcss@3.4.1 lucide-react@0.379.0 autoprefixer@10.4.19 postcss@8.4.38 @tailwindcss/forms@0.5.7


This installs all dependencies listed in package.json for Next.js, React, shadcn, Recharts, MongoDB, and Tailwind CSS.

6. Set Up Tailwind CSS

Initialize Tailwind CSS:npx tailwindcss init -p


This creates tailwind.config.js and postcss.config.js.
Ensure tailwind.config.js matches the provided artifact content.

7. Initialize shadcn

Install the shadcn CLI globally:npm install -g shadcn@latest


Initialize shadcn:npx shadcn@latest init


When prompted:
Choose JavaScript (not TypeScript).
Select Tailwind CSS as the styling framework.
Accept default components.json configuration.


Add required shadcn components:npx shadcn@latest add button input label dialog


Note: The provided components/ui/* files are customized versions. Replace the generated components/ui/* files with the ones from the artifacts.

8. Create Project Files

Create the following folder structure:personal-finance-visualizer
├── components/
│   ├── TransactionForm.js
│   ├── TransactionList.js
│   ├── MonthlyChart.js
│   └── ui/
│       ├── button.js
│       ├── input.js
│       ├── label.js
│       └── dialog.js
├── lib/
│   ├── mongodb.js
│   └── utils.js
├── pages/
│   ├── index.js
│   ├── _app.js
│   └── api/
│       └── transactions.js
├── public/
│   └── (empty or add favicon.ico)
├── styles/
│   └── globals.css
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── .env.local


Copy the contents of each artifact into the corresponding files.
Create .env.local with your MongoDB connection string:echo "MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/finance?retryWrites=true&w=majority" > .env.local


Replace <username> and <password> with your MongoDB Atlas credentials.

9. Verify Project Structure

Ensure all files are in place and contain the correct content from the artifacts.
Check that .env.local has the correct MongoDB URI.

10. Run the Development Server

Start the Next.js development server:npm run dev


Open http://localhost:3000 in your browser.
You should see the Personal Finance Visualizer with a form to add transactions, a transaction list, and a monthly expenses chart.

11. Test the Application

Add a transaction using the form (enter amount, date, description).
Verify the transaction appears in the list and the chart updates.
Edit and delete transactions to ensure functionality.
Check responsiveness by resizing the browser or using a mobile device.

12. Set Up Git and Push to GitHub

Initialize a Git repository:git init


Create a .gitignore file:echo "node_modules\n.env.local\n.next" > .gitignore


Commit the code:git add .
git commit -m "Initial commit"


Create a GitHub repository (e.g., personal-finance-visualizer) on GitHub.
Link and push to GitHub:git remote add origin <your-repository-url>
git branch -M main
git push -u origin main


Replace <your-repository-url> with your GitHub repository URL (e.g., https://github.com/username/personal-finance-visualizer.git).

13. Deploy to Vercel

Sign up for a free account at Vercel.
Install the Vercel CLI:npm install -g vercel


Deploy the application:vercel


When prompted:
Confirm the project directory.
Use default settings for Next.js.


Add the MONGODB_URI environment variable in the Vercel dashboard:
Go to your project in Vercel > Settings > Environment Variables.
Add MONGODB_URI with your MongoDB connection string.


After deployment, Vercel provides a URL (e.g., https://personal-finance-visualizer.vercel.app).

14. Update README

Update this README.md with your GitHub repository URL and Vercel deployment URL in the sections below.

Folder Structure
personal-finance-visualizer
├── components/           # React components
├── lib/                 # Utility functions (MongoDB connection)
├── pages/               # Next.js pages and API routes
├── public/              # Static assets
├── styles/              # Global CSS
├── README.md            # Project documentation
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
├── .env.local           # Environment variables

Technologies Used

Next.js: React framework for server-side rendering and API routes
React: Frontend library for building UI
shadcn: Reusable UI components
Recharts: Charting library for data visualization
MongoDB: Database for storing transactions
Tailwind CSS: Utility-first CSS framework

Notes

No authentication is implemented as per requirements.
The application is responsive and works on mobile devices.
Error states are handled for form validation and API requests.
The UI is designed to be clean and intuitive, with a focus on usability.

Live Demo
[Replace with your deployed app URL, e.g., https://personal-finance-visualizer.vercel.app]
GitHub Repository
[Replace with your GitHub repository URL, e.g., https://github.com/username/personal-finance-visualizer]
