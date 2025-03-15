# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller base image for the final stage
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy built files and dependencies
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Set environment variables
ENV NODE_ENV=production

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
