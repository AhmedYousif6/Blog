import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

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

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});