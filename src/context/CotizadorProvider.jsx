import { createContext, useState } from "react";
import {
  calcularMarca,
  calcularPlan,
  formatearDinero,
  obtenerDiferenciaYear,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setcargando] = useState(false);

  const handleChangeDatos = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const cotizarSeguro = () => {
    // base
    let resultado = 2000;
    // diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);
    // restar el 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;
    // americano 15%
    // europeo 30%
    // asiatico 5%
    resultado *= calcularMarca(datos.marca);
    // basico 20%
    // completo 50%
    resultado *= calcularPlan(datos.plan);
    // formatear dinero
    resultado = formatearDinero(resultado);

    setcargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setcargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
