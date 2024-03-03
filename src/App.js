import Header from "./components/header";
import Home from "./view/home";
import { ContextProvider } from "./helper/authContext";
function App() {
  return (
    <ContextProvider>
      <Header />
      <Home />
    </ContextProvider>
  );
}

export default App;
