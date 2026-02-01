# Dentist Template - React Application

A modern, responsive dental practice website built with React, TypeScript, and Express. Features a beautiful UI with shadcn/ui components, smooth animations, and a clean frontend-focused architecture.

## 🚀 Features

- **Modern UI/UX**: Built with React, shadcn/ui components, and Tailwind CSS
- **Responsive Design**: Mobile-first approach that works on all devices
- **Smooth Animations**: Framer Motion for page transitions and scroll reveals
- **Type Safety**: Full TypeScript support across the entire stack
- **Form Validation**: React Hook Form with Zod validation
- **Static Site**: No database required - perfect for demo and presentation purposes

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd dentist-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5000` (or the port specified in your environment).

## 📦 Available Scripts

| Script          | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Starts the development server with hot reload |
| `npm run build` | Builds the application for production         |
| `npm start`     | Runs the production build                     |
| `npm run check` | Type-checks the TypeScript code               |

## 🏗️ Project Structure

```
dentist-template/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components (Home, About, Services, Contact)
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions and configurations
│   └── public/            # Static assets
├── server/                # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── static.ts          # Static file serving
└── shared/                # Shared code between frontend and backend
    └── schema.ts          # Zod validation schemas
```

## 🌐 Deploying to Vercel

### Prerequisites

1. Create a [Vercel account](https://vercel.com/signup) if you don't have one
2. Install Vercel CLI (optional): `npm i -g vercel`

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the project settings

3. **Configure Build Settings**:
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your application

#### Option 2: Deploy via Vercel CLI

1. **Login to Vercel**:

   ```bash
   vercel login
   ```

2. **Deploy**:

   ```bash
   vercel
   ```

3. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Post-Deployment Configuration

**Custom Domain** (Optional):

- Go to your project settings in Vercel
- Navigate to "Domains"
- Add your custom domain and follow the DNS configuration instructions

### Important Notes for Vercel Deployment

- **Build Time**: The first deployment may take a few minutes
- **Serverless Functions**: Vercel will automatically convert your Express routes to serverless functions
- **Cold Starts**: Be aware that serverless functions may experience cold starts on the free tier
- **No Database Required**: This is a static demo site with mock form submissions

## 🔧 Troubleshooting

### Development Issues

**Port already in use**:

```bash
# Find and kill the process using the port
lsof -ti:5000 | xargs kill -9
```

**Build errors**:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

**Build fails on Vercel**:

- Check the build logs in Vercel dashboard
- Verify your `package.json` scripts are correct
- Ensure Node.js version compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🛟 Support

For issues and questions:

- Create an issue in the GitHub repository
- Check existing issues for solutions
- Review the documentation above

---

**Built with ❤️ using React, TypeScript, and Express**
