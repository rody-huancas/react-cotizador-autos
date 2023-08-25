import { useCotizador } from "../hooks/useCotizador";
import { Formulario } from "./";
import { Resultado } from "./Resultado";
import { Spinner } from "./Spinner";

export const AppSeguro = () => {
  const { resultado, cargando } = useCotizador();
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-5xl font-extrabold uppercase">
          Cotizador de seguros de auto
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10 mb-5">
        <Formulario />
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  );
};
