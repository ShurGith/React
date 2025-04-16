import Navegacion from "./components/Navegacion"
import Contador from "./components/Contador"
const App = () => {
  return (
    <>
      <header className="bg-gray-200">
        <nav className="border border-red-500 flex justify-center items-center bg-gray-100">
          <Navegacion />
        </nav>
      </header>
      <main className="bg-gray-300">
        <h1>Contador</h1>
        <Contador />
      </main>
    </>
  )
}

export default App
