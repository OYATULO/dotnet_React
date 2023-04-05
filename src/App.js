import React , {useState} from "react";
import Constant from "./utilities/constaints";
import Componentform from "./components/Componentform";
export default function App() {

  const[posts, setpost ] = useState([]);
  const[showformcreatepost,setshowformcreatepost]= useState(false);

  function getPost(){
    const url = Constant.Api_url_get_all_post;
    fetch( url,{
      method:"GET"
    }).then(response=> response.json())
      .then(postFromserver=>{
        setpost(postFromserver); 
        console.log(postFromserver);
      })
      .catch((error)=>{
        console.log(error);
        alert(error);
      });
  } 
  
  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-item-center ">
            {showformcreatepost===false && (
              <div>
            <h1> ASP.NET Core React Tutorial </h1>

              <div className="mt-5">
                  <button onClick={getPost} className="btn btn-dark btn-lg w-100">Get ALL posts</button>
                  <button onClick={()=>setshowformcreatepost(true)} className="btn btn-Secondary btn-lg w-100 mt-4">Create new Post</button>
              </div> 
              </div>
            )}
            
            {(posts.length>0 && showformcreatepost===false) && RenderPost()}

            {showformcreatepost && <Componentform onCreatePost={onCreatePost} /> }
        </div>  
      </div>
    </div>
  );

  function RenderPost() {
    return(

        <div className="table-responsive mt-5">
            <table className="table  table-bodered border-dark  table-response" >
              <thead >
                <tr>
                    <th scope="col">PostID(pk)</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Crud operation</th>
                </tr>
              </thead>
              <tbody>
                { posts.map((post)=>(
                  <tr key={post.postId}> 
                  <td scope="row">{post.postId}</td>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td> 
                      <button className="btn  btn-dark  mx-3 my-0">update</button>
                      <button className="btn btn-secondary  "> Deleted</button>
                  </td>
               </tr>
                 )) }
              </tbody>
            </table>
            <button onClick={()=>setpost([])} className="btn btn-dark ">Reset</button>
        </div>
        
    );
  }

  function onCreatePost(createpost) {
    setshowformcreatepost(false);
    if (createpost === null){
      return;
    }
          
    alert(`created successfull ${createpost.title}`);
    
    getPost();
  }
}
