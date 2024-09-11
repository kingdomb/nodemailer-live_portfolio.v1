import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Emailer API",
    version: "1.0.0",
    description: "Email service for form data.",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};



const options = {
swaggerDefinition,
apis: ['./routes/index.js'],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;