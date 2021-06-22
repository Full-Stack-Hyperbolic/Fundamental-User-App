import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://admin-Karsen:admin-Karsen1212@cluster0.2rxhx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)))
.catch((error) => console.log(error.message))

// ensures no warnings printed to console
mongoose.set('useFindAndModify', false);