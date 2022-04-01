import { Link, Route, Routes } from "react-router-dom"
import { Status } from "../components/Status"

export const SubRouter = () => {
  return (
    <div>
      <div>
        <Link to=""> loading</Link>
        <Link to="status"> success</Link>
        
      </div>
      <Routes>
        <Route path="" element={<Status status='loading' />} />
        <Route path="status" element={<Status status='success' />} />
      </Routes>
    </div>
  )
}