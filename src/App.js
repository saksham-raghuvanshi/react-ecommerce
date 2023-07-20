import "./App.css";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />

      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
