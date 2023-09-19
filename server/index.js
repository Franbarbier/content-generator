import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
// import multer from 'multer'

// import {Storage} from '@google-cloud/storage'
import contentRoutes from './routes/content.js';

// import { verifyToken } from './auth.js';

const app = express()

process.env.TZ = "America/Argentina/Buenos_Aires";

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors({
    origin: '*'
}));




// const gc = new Storage({
//   keyFilename: "pivotal-leaf-190722-1453958d93f5.json",
//   projectId : "pivotal-leaf-190722"
// })

// const googleBucket = gc.bucket("prj-calculadora")

// const multerVar = new multer({
//   storage: multer.memoryStorage(),
// });
// Display a form for uploading files.
// app.get('/', (req, res) => {
//   res.render('form.pug');
// });

// app.use('/content', contentRoutes)
app.use('/content', contentRoutes)


app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
})

const PORT = process.env.PORT || 5001
// const CONNECTION_URL = process.env.MONGODB_URL || ''
const CONNECTION_URL = "mongodb+srv://franbarbier:Contentgenerator123@content-generator.t2o7sfq.mongodb.net/"

mongoose.connect(CONNECTION_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log('Server running on port: ' + PORT)))
    .catch((error)=> console.log(error.message)) 

// app.listen(PORT, ()=> console.log('Server running on port: ' + PORT))

// mongoose.set('useFindAndModify', false)