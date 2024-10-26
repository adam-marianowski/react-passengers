import Passengers from "components/Passengers";

function App() {
  return (
    <div className="container">
      <header className="border-bottom p-2 d-flex gap-2 align-items-center">
        <img src="/logo.svg" width="40vw" alt="React Logo" />
        <span className="h5">Passengers</span>
      </header>

      <Passengers />

      <footer className="border-top mt-5 text-center text-secondary">
        @adam-marianowski
      </footer>
    </div>
  );
}

export default App;
