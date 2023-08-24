import { Fragment, useContext } from "react";
import { MARCAS, PLANES, YEARS } from "../constants";
import CotizadorContext from "../context/CotizadorProvider";

export const Formulario = () => {
  const { modal, cambiarState } = useContext(CotizadorContext);
  return (
    <>
      <form>
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            id="marca"
            className="w-full p-3 bg-white border border-gray-200 rounded"
          >
            <option value="">--- Selecciona la Marca ---</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="year"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            name="year"
            id="year"
            className="w-full p-3 bg-white border border-gray-200 rounded"
          >
            <option value="">--- Selecciona el Año ---</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor={plan.id}>{plan.nombre}</label>
                <input type="radio" id={plan.id} name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-700 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};
