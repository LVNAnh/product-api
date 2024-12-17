# Base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy project files
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the server
CMD ["node", "index.js"]
