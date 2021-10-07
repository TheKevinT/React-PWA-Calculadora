import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultado from "./Resultado";
import { operaciones } from "../helpers/Operaciones";

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });

  //llamar al helper y se destructurar para obtner los valores del return
  const {
    _handleChange,
    sumar,
    restar,
    multiplicar,
    dividir,
    numero1,
    numero2,
  } = operaciones(numeros, setNumeros);

  return (
    <>
      <label className="form-label me-3">
        Número 1:
        <input
          name="numero1"
          className="form-control"
          value={numero1}
          onChange={_handleChange}
          type="number"
        />
      </label>
      <label className="form-label">
        Número 2:
        <input
          name="numero2"
          className="form-control"
          value={numero2}
          onChange={_handleChange}
          type="number"
        />
      </label>
      <br />
      <Resultado operacion="Suma" calculo={sumar()} />
      <br />
      <Resultado operacion="Resta" calculo={restar()} />
      <br />
      <Resultado operacion="Multiplicación" calculo={multiplicar()} />
      <br />
      <Resultado operacion="División" calculo={dividir()} />
    </>
  );
};

//propType se utiliza para definir el tipo de dato
NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
