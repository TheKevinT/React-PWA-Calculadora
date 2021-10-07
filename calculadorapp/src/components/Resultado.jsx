import React from "react";
import PropTypes from "prop-types";

function Resultado({ operacion, calculo }) {
  return (
    <>
      <span>
        {operacion}: {calculo}
      </span>
    </>
  );
}

Resultado.propTypes = {
  operacion: PropTypes.string,
  calculo: PropTypes.number,
};

export default Resultado;
