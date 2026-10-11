import Calculator from "./components/Calculator";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div className="min-h-screen bg-blue-950 p-4">
      <h1 className="text-2xl font-bold text-center text-white mt-4 mb-6">Calculator</h1>

      <div className="flex flex-col md:flex-row md:items-start justify-center gap-6">
        <Calculator />
        <Instructions />
      </div>
    </div>
  );
}

export default App;
