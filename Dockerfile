FROM node:23-alpine AS base

# Dependencies layer
FROM base AS deps
RUN npm install --global corepack@latest && corepack enable pnpm && corepack use pnpm@latest-10
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile --prod

# Build layer
FROM base AS build
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Production layer
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Copy standalone mode output
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Ensure proper user permissions
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Expose Next.js port
EXPOSE $PORT

# Run the Next.js standalone server
CMD ["node", "server.js"]
