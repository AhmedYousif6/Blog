import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDb is connected');
    })
    .catch((error) => {
        console.log(error);
    });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});