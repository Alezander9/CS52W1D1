import { StrictMode, ComponentType } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import "./index.css"

const modules = import.meta.glob<{ default: ComponentType }>("./pages/*.tsx", {
  eager: true,
})

const pages = Object.entries(modules).map(([path, mod]) => ({
  name: path.replace("./pages/", "").replace(".tsx", ""),
  Component: mod.default,
}))

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {pages.map(({ name, Component }) =>
            name === "Home" ? (
              <Route key="home" index element={<Component />} />
            ) : (
              <Route key={name} path={name} element={<Component />} />
            )
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
