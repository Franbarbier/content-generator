import Content from '../models/content.js';


// export const getContents = async (req, res)=>{
    
//     try{
//         const content = await Content.find().sort({createdAt: 'desc'});
//         res.status(200).json(content)
//     }catch(error){
//         res.status(404).json({message: error.message})
//     }
// }

export const createNewContent = async(req, res) =>{

    const cont = req.body;
    const createNewContent = new Content(cont);
    
    try{
        await createNewContent.save();
        res.status(201).json(createNewContent)
    }catch(error){
        res.status(409).json({message: error.message})
    }

}

// export const deleteContent = async (req, res)=>{
    
//     const id = req.params.id;
//     await Content.findByIdAndRemove(id)
//     res.json({message: 'Content deleted succesfully', id: id})

// }

// export const updateContent = async (req, res) =>{

//     const plataforma = req.body.edited_content;
//     const filter = {_id: plataforma._id}
//     var plataformaToUpdate = await Content.findOneAndUpdate(filter, plataforma, {new: true})

//     try{                            
//         res.status(201).json(plataformaToUpdate)
            
//     }catch(error){
//         res.status(409).json({message: error.message})
//     }

// }