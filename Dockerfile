# set the base image 

FROM nginx:alpine

# remove the default welcome to the nginx file


RUN rm -rf /usr/share/nginx/html/*

# copy all our website file to nginx directory

COPY . /usr/share/nginx/html

# Expose a port
EXPOSE 8080

# command to start nginx 
CMD ["nginx", "-g", "daemon off;"]
