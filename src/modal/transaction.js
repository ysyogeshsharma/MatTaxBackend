import { pool } from "../config/database.js";

const transactionTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS transaction (
        id SERIAL PRIMARY KEY,
        isDeleted BOOLEAN NOT NULL,
        amount VARCHAR(100) NOT NULL,
        category VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        userId INT NOT NULL,
        vendorId INT NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (vendorId) REFERENCES vendor(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log("Transaction table is ready");
  } catch (error) {
    console.error("Error creating transaction table:", error);
  }
};

export default transactionTable;
