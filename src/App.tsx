import { Outlet, Link } from "react-router-dom"

export default function App() {
  return (
    <div>
      <nav className="p-4">
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </div>
  )
}
