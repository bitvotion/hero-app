import { useLoaderData } from 'react-router'
import './App.css'

function App() {

  const data = useLoaderData()
  console.log(data);


  return (
    <>
      <div>
        {
          data.map(d => <div>
            <h1>{d.id} app name: {d.title} </h1>
            <p>description: {d.description} </p>
          </div>)
        }

      </div>
    </>
  )
}

export default App
