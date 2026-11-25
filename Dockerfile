FROM nginx:alpine

# Copy all project assets to nginx web root
COPY . /usr/share/nginx/html

# Copy dynamic nginx port template for Railway / Render / Fly
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Default fallback port if PORT env is not set
ENV PORT=80

EXPOSE 80
