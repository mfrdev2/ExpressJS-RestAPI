require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT;



app.listen(PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});