# VocabGenie

An AI-powered vocabulary flashcards web app that helps you learn new words and their meanings.

![home](/public/screenshot-home.png)

![flashcards-1](/public/screenshot-flash-card-1.png)

![flashcards-2](/public/screenshot-flash-card-2.png)

## Note

The vocabulary flashcards are scraped from the [Magoosh GRE Vocabulary Flashcards](https://gre.magoosh.com/flashcards/vocabulary/decks) website using a [Python script](https://github.com/ghpranav/VocabGenie/blob/main/scripts/scrape.py). The complete credit for the vocabulary data goes to the [Magoosh](https://magoosh.com/) website.

## Stack

- App framework: [Next.js](https://nextjs.org/)
- Generative API: [Groq](https://console.groq.com/)
- Generative Model: [LLaMA3 8b](https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct)
- Component library: [shadcn/ui](https://ui.shadcn.com/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

First, fill out secrets:

```bash
cp .env.local.example .env.local
```

Then, fill out the `GROQ_API_KEY` in the `.env.local` file.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy

Host your own version on Vercel, the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fghpranav%2FVocabGenie&env=GROQ_API_KEY&project-name=vocab-genie&repository-name=vocab-genie&demo-title=Vocab%20Genie&demo-description=An%20AI-powered%20vocabulary%20flashcards%20web%20app%20that%20helps%20you%20learn%20new%20words%20and%20their%20meanings.&demo-url=https%3A%2F%2Fvocabgenie.vercel.app%2F)
