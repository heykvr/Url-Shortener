import React,{useState} from 'react'
import db from '../firebase'
const tinyid = require('tiny-unique-id')
function Input() {
    const [input,setInput] = useState('')
    const [shorten,setShorten] = useState('')
    const handleDb = async() => {
        const slug = tinyid.unique()
        await db.collection('urls').add({
            url:input,
            slug:slug
        })
        setShorten(`${window.location.origin}/${slug}`)
    }
    
    

  return (
    <div className='container'>
        <h1 className='mt-5'>Url shortener</h1>
        <center>
            <div className='mt-4'>
                <input type="text" disabled className='form-control' value={shorten}/>
            <input type = "url" value={input} className='form-control mt-3' placeholder='Enter Url' onChange={(e)=>{
        setInput(e.target.value)
      }}/>
      <br/>
      <button onClick={handleDb} className='btn btn-dark' mt-3> Shorten URL </button>
            </div>
    </center>
    </div>
  )
}

export default Input