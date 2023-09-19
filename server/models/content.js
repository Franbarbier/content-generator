import mongoose from 'mongoose'

const content = mongoose.Schema({

    nombre: String,
    zip_url : {
        type: String,
        default: 'logo-chico.png'
    },
    tags: Array,
    descripcion: String,
    total_pieces: Number,
    completed_pieces: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }

}
)

const Content = mongoose.model('Contents', content);

export default Content;