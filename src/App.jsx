import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import MyComment from './components/MyComment';

function App() {
  const [comments, setComments] = useState([]);
  const endpoint = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    const axiosData = async () => {
      try{
        let res = await axios(endpoint);
        setComments(prevComments => [...prevComments, ...res.data]);
      }catch(error){
        console.log("error en llamada a API: " + error);
      }
    }
    axiosData();
  }, []);
  
  return (
    <div>
      <h1>Comments</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {comments.map(comment => (
          <MyComment key={comment.id} item={comment}/>
        ))}
      </ul>
    </div>
  );
}

export default App
