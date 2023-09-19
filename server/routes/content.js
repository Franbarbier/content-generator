import express from 'express'

import { createNewContent} from '../controllers/content.js'

const router = express.Router()

router.post('/', createNewContent)


export default router
