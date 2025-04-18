import Navegacion from "./components/Navegacion"
import Calculadora from "./components/Calculadora"
import "./css/styles.css"
const App = () => {
  return (
    <>
      <header className="bg-gray-200">
        <nav className="border border-red-500 flex justify-center items-center bg-gray-100">
          <Navegacion />
        </nav>
      </header>
      <main className="bg-gray-300 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Contador</h1>
        <Calculadora />
      </main>
    </>
  )
}

export default App
