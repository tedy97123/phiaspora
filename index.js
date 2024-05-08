import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import descriptionRoutes from "./routes/description.js"
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";
import { Db } from "mongodb";


/* CONFIGURATIONS */
dotenv.config();
const app = express();
// Use Helmet for general security headers
app.use(helmet());
// Specifically, remove the crossOriginResourcePolicy from Helmet for now as it might conflict with CORS
 //app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Enable CORS for local development
app.use(cors());

// Request logging
app.use(morgan("common"));

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
app.use("/description", descriptionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 8000;
const MONGO_URL = "mongodb+srv://tedyyohanes97:Peeman200@cluster1.vs1vunz.mongodb.net/?retryWrites=true&w=majority";

app.post('/dropDatabase', async function (req, res) {   
  await mongoose.connection.db.dropDatabase();
  res.send("deleted!")
})

app.post('/insert_kpis', async function (req, res) {   
    KPI.insertMany(kpis);
    res.send("kpis inserted!") 
})

app.post('/insert_products', async function (req, res) {   
   Product.insertMany(products);
   res.send("products inserted!") 
})
 

app.post('/insert_transactions', async function (req, res) {   
    Transaction.insertMany(transactions); 
    res.send("transactions inserted!")  
}) 


mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("connected to DB");
    app.listen(PORT, '0.0.0.0' , () => console.log(`Server Port: ${PORT}`));   
  })
  .catch((error) => console.log(`${error} did not connect`));

/* ERROR HANDLING MIDDLEWARE */
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});