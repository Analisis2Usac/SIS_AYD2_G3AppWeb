const app = require('./app');
const port = process.env.PORT ;



async function main() {
    await app.listen(port);
    console.log(`Server running on port:${port}`);
    
    
};

main();