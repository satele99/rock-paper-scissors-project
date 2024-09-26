# Use an official NGINX image as the base
FROM nginx:alpine

# Copy your static files into the NGINX directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
