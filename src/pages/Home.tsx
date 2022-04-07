import { Link } from "react-router-dom"

export const Home = () => {
  return (
  <div>
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/size"> Size </Link>
      </li>
      <li>
        <Link to="/counter"> Counter - redux </Link>
      </li>
      <li>
        <Link to="/postlist"> postlist </Link>
      </li>
      
      <li>
        <Link to="/personlist"> personlist </Link>
      </li>
      <li>
        <Link to="/profile"> profile </Link>
      </li>
      <li>
        <Link to="/posts/1"> Post </Link>
      </li>
      <li>
        <Link to="/sub"> SubRouter </Link>
      </li>
      
    </ul>
  </div>
  )
}