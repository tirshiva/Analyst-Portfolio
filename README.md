# Portfolio Template Guide

This repository is a customizable React portfolio built with Vite, Tailwind CSS, and Framer Motion. It is designed to be reused as a template for AI, Data Engineering, and Software Engineering portfolios.

## Quick Overview

- `src/data/profile.js` — main configuration for personal branding, headline, experience, education, contact, and social links.
- `src/data/projects.js` — portfolio project cards and project details.
- `src/components/` — UI sections such as `Hero`, `About`, `Projects`, `Contact`, and `Footer`.
- `vercel.json` — deployment settings for Vercel.

## How to Use This Portfolio as a Template

### 1. Clone or fork this repository

```bash
git clone <repo-url>
cd Analyst-Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Customize your profile

Open `src/data/profile.js` and update the following fields:

- `name`
- `title`
- `heroDescription`
- `ctaText`
- `about.summary`
- `about.careerFocus`
- `about.experiences`
- `about.education`
- `contact.location`
- `contact.availability`
- `contact.intro`
- `contact.vcfFile`
- `contact.vcfDownloadName`
- `socialLinks`
- `projects.githubText`
- `projects.callToAction`

This file is the central place for personal copy and details.

### 4. Update project cards

Open `src/data/projects.js` and edit the `projects` array. For each project you can change:

- `title`
- `description`
- `techStack`
- `githubLink`
- `demoLink`
- `image`

Add or remove projects to fit your portfolio.

### 5. Adjust content and visuals

If you want to make layout or design changes:

- Edit section copy in `src/components/` as needed
- Adjust theme colors in `src/styles/theme.css`
- Modify page behavior in `src/App.jsx`

### 6. Replace the vCard (optional)

The portfolio includes a sample vCard file at `public/contact.vcf`. Replace it with your own file and update `profile.contact.vcfFile` and `profile.contact.vcfDownloadName` if the name changes.

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal and verify your updates.

## Build for Production

To create a production build:

```bash
npm run build
```

The compiled site output is placed in `dist/`.

## Deploy to Vercel

This project is already ready for Vercel deployment.

### Option 1: Deploy from GitHub

1. Push your repository to GitHub.
2. Log in to Vercel and click `New Project`.
3. Select your repository.
4. Set the root directory to the repository root.
5. Vercel will usually detect the framework automatically.
   - Build command: `npm run build`
   - Output directory: `dist`
6. Deploy.

### Option 2: Deploy using Vercel CLI

If you prefer the command line:

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and choose the project root.

## Notes for Template Use

- `src/data/profile.js` is the main user-editable configuration file.
- `src/data/projects.js` controls the project showcase.
- The portfolio is intentionally built for reuse with minimal code changes.
- If you are sharing this template with someone else, tell them to start by editing `src/data/profile.js` and `src/data/projects.js`.

## Troubleshooting

- If the site fails to load locally, ensure all imports are correct and that `npm install` completed successfully.
- If Vercel fails on deploy, confirm the build command is `npm run build` and the output directory is `dist`.

---

Happy customizing! 🚀
