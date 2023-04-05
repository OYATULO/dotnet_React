import React,{useState}  from 'react'
import Constant from '../utilities/constaints'
export default function Componentform(props) {
    
    const initialformdata= Object.freeze({
        title:"title x",
        content:"content x"
    });

    const [formdata,setFormData] = useState(initialformdata);
    
    
    const handleChange =(e)=>{
        setFormData({
            ...formdata,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = (e)=>{
       e.preventDefault();
       
        const postToCreate={
            postID:0,
            title:formdata.title,
            content:formdata.content
        };
        const url = Constant.Api_url_add_post;

        fetch(url,{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(postToCreate)
        }).then(response=>response.json()).then(responsefromserver=> {
                        console.log(responsefromserver);
                    }).catch((error)=>{
                            console.log(error);
                            alert(error);
                    });

        props.onCreatePost(postToCreate);
    };

  return (
    <div>
        <form className='w-100 px-5'>
            <h1 className='mt-5'>Create new post</h1>
            <div className='mt-5'>
            <label className='h3 form-label'>Title</label>
            <input type="text" value={formdata.title} name="title" className='form-control' onChange={handleChange} />
            </div>
            <div className='mt-5'>
            <label className='h3 form-label'>Content</label>
            <input type="text" value={formdata.content} name="content" className='form-control' onChange={handleChange} />
            </div> 
            <button onClick={handleSubmit} className='btn btn-dark btn-lg w-100 mt-5'>submit</button>
            <button onClick={()=>props.onCreatePost(null)} className='btn btn-dark btn-lg w-100 mt-5'>cancel</button>
        </form>
    </div>
  )
}
