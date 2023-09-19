import React, { useState, useEffect, useMemo } from 'react';
// import {useDispatch, useSelector} from 'react-redux';


import { createNewContent } from '../../actions/content'

import './NewContent.css';





const NewContent = ({  }) => {
    


  // const dispatch = useDispatch()

  function handleCreateCont(){
    
        let dummy_content = {
          nombre: "contenido de prueba",
          zip_url : "compriminido.zip",
          tags: [],
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl nec ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc ",
          total_pieces: 3,
          completed_pieces: 0,
        }
        

        createNewContent(dummy_content).then(
            (e)=> 
              console.log(e, 'todo ok, creado')
            ).catch( (e) =>{
              console.log('error:::', e.error)
     
          } )
    }

    
       
  function render(){
      return  <div id="NewContent">
                 <div>
                    <h4>Nueva FAQ</h4>
                    <button onClick={ handleCreateCont }>Crear</button>

                 </div>
              </div>

       }
       
       
       return ( render() )
}




export default NewContent;