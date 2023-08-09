# PokeDex
The goal of this coding exercise is to demonstrate proficiency in creating a ReactJS web application by converting a provided Figma design into a functional, rich-quality codebase. The application will integrate with the PokeAPI to dynamically populate content. The implementation will adhere to React best practices, incorporate web performance optimization techniques, and include a testing environment with appropriate tests.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Developer's Notes

- This project uses NextJS 13 as foundation.
- Didn't use `graphql-codegen` as the project's complexity is not worthy of `graphql-codegen`'s flexibility. It will instead make the bundle larger.
It will also help Beginner Devs and those who are not familiar with said tool to understand the codebase much easier greatly impacting maintainability.
- I used PokeAPI's GraphQL url for node-fetch instead of it's RestAPI as I can fetch multiple data with just 1 request. This applies to Pokemon Data and it's level.
- I am trying to minimize external libraries used in this project to lessen the bundle size.
- Didn't 100% follow Figma's padding/gaps as some looks better balanced. Please see [This](https://www.figma.com/file/PcBBsI7qQP8qlgwW5OzOOr/Pokedex?type=design&node-id=44-3653&mode=design&t=TiBiz5FcGrqpPXye-0) grid view. The "Choose a Pokemon" is not equally padded.
- Created reusable components for repeating usages of similar designed component. This helps a lot in terms of clean code and maintainability. 
- Used vscode's quicktype extension to easily create a type for PokeAPI's result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
