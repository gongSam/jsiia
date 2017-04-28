module.exports = {
    port:3000,
    session: {
        secret: 'mywebpage',
        key: 'mywebpage',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/mywebpage'
};
