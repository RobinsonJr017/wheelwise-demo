import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import StartScreen from "./screens/StartScreen.tsx";
import Questions from "./screens/Questions.tsx";
import Recomendations from "./screens/Recomendations.tsx";

const router = createBrowserRouter(
  [
    {path: "/", element: <StartScreen/>},
    {path: "/questions", element: <Questions/>},
    {path: "/recomendations", element: <Recomendations/>}
  ]
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
