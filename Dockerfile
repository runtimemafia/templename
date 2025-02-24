# 1️⃣ Use official Node.js image
FROM node:20-alpine AS builder

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package.json and lock file
COPY package.json package-lock.json ./

# 4️⃣ Install dependencies
RUN npm install --frozen-lockfile

# 5️⃣ Copy the rest of the project
COPY . .

# 6️⃣ Build Next.js app
RUN npm run build

# 7️⃣ Production stage
FROM node:20-alpine AS runner

# 8️⃣ Set working directory
WORKDIR /app

# 9️⃣ Copy only necessary files from builder stage
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# 1️⃣0️⃣ Set environment variable
ENV NODE_ENV=production

# 1️⃣1️⃣ Expose port
EXPOSE 3000

# 1️⃣2️⃣ Start Next.js app
CMD ["node", "./node_modules/.bin/next", "start"]
