# 🚀 FogShield on Railway - Complete Deployment Guide

## Prerequisites
- GitHub account (for hosting code)
- Railway account (free tier available at railway.app)

---

## 📋 Step-by-Step Deployment Guide

### **STEP 1: Prepare Your GitHub Repository**

#### Option A: Create a New Repository (Recommended)

1. **Create GitHub Repo**
   - Go to https://github.com/new
   - Name: `fogshield-hackathon`
   - Description: `FogShield - AI Mining Safety Solution for SIH 2026`
   - Choose Public (so judges can see it)
   - Click "Create repository"

2. **Clone the repo locally**
   ```bash
   git clone https://github.com/YOUR_USERNAME/fogshield-hackathon.git
   cd fogshield-hackathon
   ```

3. **Add all files to your repo**
   - Copy these files into the folder:
     - `fogshield-animated.html`
     - `server.js`
     - `package.json`
     - `railway.json`
     - `.gitignore`
     - `README.md` (create one, see template below)

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "🚀 Initial FogShield deployment"
   git push origin main
   ```

#### Option B: Use Existing Repository
- Just add the above files to your existing repo and push

---

### **STEP 2: Deploy on Railway**

#### Method 1: Using Railway CLI (Fastest)

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```
   (This opens a browser window to authenticate)

3. **Initialize Railway Project**
   ```bash
   railway init
   ```
   - Choose "Create a new project"
   - Enter project name: `fogshield-hackathon`

4. **Deploy**
   ```bash
   railway up
   ```
   - This will automatically detect `package.json` and deploy!
   - Railway will build and run your app
   - You'll get a live URL like: `https://fogshield-xxxxx.railway.app`

5. **View Live App**
   ```bash
   railway open
   ```

---

#### Method 2: Using Railway Web Dashboard (No CLI)

1. **Go to railway.app**
   - Sign up or login with GitHub

2. **Create New Project**
   - Click "Create New"
   - Click "Deploy from GitHub"

3. **Connect GitHub**
   - Authorize Railway to access your GitHub
   - Select your `fogshield-hackathon` repository

4. **Configure Project**
   - Railway auto-detects your `package.json`
   - No additional config needed!
   - Click "Deploy"

5. **Wait for Deployment**
   - Railway automatically:
     - Installs dependencies
     - Starts the server
     - Generates live URL

6. **Access Your Site**
   - Click the generated URL in Railway dashboard
   - Your FogShield is now LIVE! 🎉

---

### **STEP 3: Configure Custom Domain (Optional)**

To use your own domain instead of railway.app:

1. **In Railway Dashboard**
   - Go to your project
   - Click "Settings"
   - Click "Domains"
   - Click "Add Domain"

2. **Add Your Domain**
   - Enter your custom domain (e.g., `fogshield.yourname.com`)
   - Copy the DNS records Railway shows

3. **Update DNS**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records Railway provided
   - Wait 24-48 hours for DNS to propagate

---

### **STEP 4: Monitor & Manage**

**View Logs**
```bash
railway logs
```

**View Status**
```bash
railway status
```

**Redeploy After Changes**
```bash
git add .
git commit -m "Updated FogShield content"
git push origin main
railway up
```

---

## 🎯 What You'll Get

✅ **Live URL**: `https://fogshield-xxxxx.railway.app`
✅ **HTTPS enabled** automatically
✅ **Auto-deploys** when you push to GitHub
✅ **Free tier**: 500 execution hours/month (plenty!)
✅ **Zero downtime** deployments
✅ **Instant scaling** if needed

---

## 📊 File Structure

```
fogshield-hackathon/
├── fogshield-animated.html   (Your website)
├── server.js                 (Express server)
├── package.json              (Dependencies)
├── railway.json              (Railway config)
├── .gitignore               (Git ignore rules)
├── README.md                (Project description)
└── RAILWAY_DEPLOYMENT_GUIDE.md (This file)
```

---

## 🛠️ Troubleshooting

### **Problem: "Port already in use"**
- Railway handles port assignment automatically
- Your app will use the PORT environment variable

### **Problem: "Module not found"**
- Make sure `package.json` is in root directory
- Run: `npm install` locally first
- Push changes to GitHub
- Redeploy on Railway

### **Problem: "Website not loading"**
- Check Railway logs: `railway logs`
- Verify `server.js` is starting correctly
- Check that `fogshield-animated.html` is in the same folder

### **Problem: "502 Bad Gateway"**
- Wait 2-3 minutes for Railway to fully start
- Check application logs
- Verify PORT 3000 is being used in server.js

---

## 📱 Share Your Live Link

Once deployed, share this link with judges:
```
https://fogshield-[YOUR-PROJECT-ID].railway.app
```

**Perfect for:**
- Hackathon submissions
- Portfolio showcase
- Team presentations
- Judge reviews
- Sharing on LinkedIn/Twitter

---

## 🔄 Auto-Deploy Setup (CI/CD)

Railway automatically deploys when you push to main:

1. **Make changes locally**
   ```bash
   git add .
   git commit -m "Updated content"
   git push origin main
   ```

2. **Railway automatically:**
   - Detects changes
   - Rebuilds app
   - Deploys new version
   - No manual action needed!

---

## 💰 Pricing

- **Free Tier**: $5 credit/month
- **Perfect for**: Hackathon projects
- **No credit card needed** for initial deploy
- **Auto-scales** if traffic increases

---

## 🎉 You're Done!

Your FogShield hackathon website is now:
- ✅ Live on the internet
- ✅ Accessible from anywhere
- ✅ Automatically updated when you push code
- ✅ Professional & production-ready

**Share your URL with judges and impress them! 🚀**

---

## 📞 Need Help?

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- My GitHub: Your repo URL

---

**Happy Hacking! 🛡️⚡**
