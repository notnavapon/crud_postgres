import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './src/routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api",userRoutes)




// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
