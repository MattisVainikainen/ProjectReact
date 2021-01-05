import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){
 const [users, setUsers] = useState([
   {name: "Mattis", content: "Hello there!", likes: "23"},
   {name: "Jenka", content: "Mother of 2", likes: "12"},
   {name: "Kian", content: "Im out playing", likes: "567"},
   {name: "Alice", content: "Im always funny", likes: "61"}
 ]);


  return(

    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} content={user.content} likes={user.likes}/>
      ))}
    </div>
  );
}

export default App;