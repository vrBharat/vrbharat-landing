# Deployment Guide for vrBharat

Since this is a Next.js application, the best way to deploy it is using **Vercel** (the creators of Next.js). It's free for hobby projects and extremely easy to set up.

## Prerequisites
- A GitHub account.
- A Vercel account (log in with GitHub).
- Access to your domain provider (where you bought `vrbharat.tech`).

## Step 1: Push Code to GitHub
1.  Log in to your [GitHub](https://github.com) account.
2.  Create a **New Repository** (e.g., named `vrbharat-landing`).
3.  Run the following commands in your terminal ( VS Code terminal) to push your local code:

```bash
# Initialize git if not already done (it likely is)
git init

# Add all files
git add .

# Commit changes
git commit -m "Ready for deployment"

# Link to your new GitHub repo (Replace YOUR_USERNAME with your actual username)
git remote add origin https://github.com/YOUR_USERNAME/vrbharat-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Vercel
1.  Go to the [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  You should see your `vrbharat-landing` repository in the list. Click **"Import"**.
4.  (Optional) Configuring Project:
    - Framework Preset: **Next.js** (Should be auto-detected).
    - Build Command: `next build` (Default).
5.  Click **"Deploy"**.
6.  Wait for a minute. Vercel will build your site and give you a live URL (e.g., `vrbharat-landing.vercel.app`).

## Step 3: Connect Your Domain (vrbharat.tech)
1.  On your Vercel Project Dashboard, go to **Settings** -> **Domains**.
2.  Enter `vrbharat.tech` in the input box and clicking **Add**.
3.  Vercel will provide you with **DNS Records** (usually an `A Record` or `CNAME`).
    - **Type**: A
    - **Name**: @
    - **Value**: 76.76.21.21 (Example, check exactly what Vercel says)
4.  Log in to your **Domain Provider** (GoDaddy, Namecheap, etc.).
5.  Go to "DNS Management" for `vrbharat.tech`.
6.  Add the records provided by Vercel.
7.  Wait for propagation (can take minutes to hours).

Once verified, visiting `https://vrbharat.tech` will show your landing page!
