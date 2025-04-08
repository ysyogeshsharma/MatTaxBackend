import express from 'express';
import userRouter from './user/index.js';
import authRouter from './userAuth/index.js';
import transactionRouter from './transaction/index.js';
import authorizeAccountRouter from './authorizeTable/index.js';
import verifyToken from '../middleware/verifyAuth.js';

const APIrouter = express.Router();
APIrouter.use('/accountant', verifyToken, authorizeAccountRouter);
APIrouter.use('/user', verifyToken, userRouter);
APIrouter.use('/auth', authRouter);
APIrouter.use('/transaction',verifyToken, transactionRouter);

export default APIrouter;