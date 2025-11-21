# Alix Rénovation — Bilingual Next.js site

Modern, bilingual marketing site for a Québec construction company built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Airtable lead capture.

## Getting started

```bash
npm install
npm run dev
```

The site is available at http://localhost:3000.

## Environment variables

Create a `.env` file with your Airtable credentials:

```
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=Leads
```

## Deployment (Vercel-ready)

1. Push this repo to GitHub.
2. Create a new Vercel project and import the repository.
3. Add the environment variables above in the Vercel dashboard (Project Settings → Environment Variables).
4. Deploy — no extra build steps required (`npm run build`).

## Tech stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS for styling
- Localized FR/EN content via JSON dictionaries
- Airtable REST API integration for contact form submissions

## Key folders

- `app/` — App Router pages, API route for contact, and global layout
- `components/` — UI building blocks (Navbar, Footer, LanguageToggle, ServiceCard, TeamCard, ReviewCarousel, ContactForm)
- `content/` — Localized text (`i18n`) and structured data (services, team, projects, reviews)

