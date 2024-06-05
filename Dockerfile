# Step 1: Build the React application
FROM node:18 AS build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React application with Nginx
FROM nginx:alpine

# Copy the built React app from the build stage to the Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 83

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
