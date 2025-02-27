import axios from "axios"
import {useEffect, useState} from "react"

function App() {

  const endPoint = "http://localhost:3000/posts"

  const [post, setPost] = useState ([])

  const fetchPost = () => {
    axios.get(endPoint).then(res => setPost (res.data)) 
  }

  useEffect( fetchPost, [])

    return (
      <>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {post.map((element) =>{
                return(
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.title}</td>
                    <td>{element.content}</td>
                  </tr>
                )
              } )}
            </tbody>
          </table>
          
        </div>
      </>
    )
}

export default App
