# Step 1: Build the React app
FROM node:16 as build

WORKDIR /src

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npx update-browserslist-db@latest
RUN npm run build


# Step 2: Serve the app using a web server
FROM nginx:alpine

# Copy build files from the build stage
COPY --from=build /src/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
