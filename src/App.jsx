import { AppSeguro } from "./components";
import { CotizadorProvider } from "./context/CotizadorProvider";

const App = () => {
  return (
    <>
      <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider>
    </>
  );
};

export default App;
