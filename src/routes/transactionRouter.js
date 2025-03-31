import express from "express";
import transaction from "../controllers/transactionController.js";
const { createTransaction, getAllTransactionOfUser, updateTransaction } = transaction;
const transactionRouter = express.Router();

transactionRouter.post("/", createTransaction);
transactionRouter.post("/update",updateTransaction);
transactionRouter.get("/:id",getAllTransactionOfUser);

export default transactionRouter;