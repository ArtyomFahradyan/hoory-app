const corsOptions = {
    development: {
        origin: [ /localhost:3000/, /localhost:3001/ ],
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ]
    },
    production: {
        origin: [  ],
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ]
    }
};

export default corsOptions[process.env.NODE_ENV || 'development'];
