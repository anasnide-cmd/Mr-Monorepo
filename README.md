# Mr-Monorepo

A monorepo with multiple Next.js projects using app router.

## Projects

- **portfolio**: Personal portfolio website with main page and other page.
- **other**: Another simple app.
- **ecommerce**: Simple ecommerce site with products and cart.
- **ui**: Shared UI components package.

## Setup

1. Install pnpm globally if not already: `npm install -g pnpm`
2. Install dependencies: `pnpm install`
3. Build shared packages: `pnpm --filter @mr-monorepo/ui build`

## Running Apps

- Portfolio: `cd apps/portfolio && pnpm dev`
- Other: `cd apps/other && pnpm dev`
- Ecommerce: `cd apps/ecommerce && pnpm dev`

## Notes

If you encounter PowerShell execution policy issues, run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` first.