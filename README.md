# Next.js Production Site

Using Next.js, Supabase, Stripe, Langchain, Pinecone, and OpenAI.

## Overview

1. Create a project in Supabase and add the following redirect url: `https://**vercel.app/*/*`
2. Go to Stripe and set up a webhook with the following url: `https://[your-deployment-url].vercel.app/api/webhooks`
3. Duplicate `.env.local.example` and also add each environment variable to Vercel, then deploy.
4. Paste `schema.sql` into the Supabase SQL editor and run it. Go to Stripe and create test products.
5. Run `pnpm install`, `pnpm add <pkg>`, and `pnpm dev` to test the project locally.
