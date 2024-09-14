import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Broweser from "./Broweser"
import Login from "./Login"
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/broswer",
            element:<Broweser/>
        }
    ])
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body