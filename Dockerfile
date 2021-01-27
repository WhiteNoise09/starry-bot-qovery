FROM node
RUN echo "hey from Dockerfile !"
COPY . .
RUN npm install
RUN echo "secon hey from Dockerfile !"
CMD node index.js