import axios from "axios";
import React, { useState } from "react";
import { fileUpload } from "../helpers/FileUpload";
import { url } from "../helpers/url";

export const AgregarProducto = () => {
  const [auto, setAuto] = useState({
    marca: "",
    modelo: "",
    airbags: "",
    estrellas: "",
    imagen: "",
  });

  const { marca, modelo, airbags, estrellas } = auto;

  const handleChange = ({ target }) => {
    setAuto({
      ...auto,
      [target.name]: [target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const handleFile = ({ target }) => {
    const file = target.files[0];
    fileUpload(file)
      .then((respuesta) => {
        auto.imagen = respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = () => {
    axios
      .post(url, auto)
      .then((respuesta) => console.log(respuesta.data))
      .catch((error) => console.log(error));
  };

  const handleInputClick = () => {
    document.querySelector("#inputImagen").click();
  };

  return (
    <div>
      <h3 className="text-cemter">Agregar Automovil</h3>
      <form id="formulario" className="form-group" onSubmit={handleSubmit}>
        <input
          id="inputImagen"
          type="file"
          className="form-control"
          placeholder="Seleccionar Imagen"
          required
          style={{ display: "none" }}
          name="imagen"
          onChange={handleFile}
        />
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => handleInputClick()}
        >
          Seleccionar Imagen
        </button>

        <input
          id="inputMarca"
          type="text"
          className="form-control mt-2"
          placeholder="Marca"
          required
          name="marca"
          value={marca}
          onChange={handleChange}
        />

        <input
          id="inputModelo"
          type="text"
          className="form-control mt-2"
          placeholder="Modelo"
          required
          name="modelo"
          value={modelo}
          onChange={handleChange}
        />

        <input
          id="inputAirbags"
          type="number"
          className="form-control mt-2"
          placeholder="Numero de Airbags"
          autoComplete="off"
          required
          min="1"
          name="airbags"
          value={airbags}
          onChange={handleChange}
        />

        <input
          id="inputEstrellas"
          type="number"
          className="form-control mt-2"
          placeholder="Numero de Estrellas"
          autoComplete="off"
          required
          min="1"
          name="estrellas"
          value={estrellas}
          onChange={handleChange}
        />

        <div className="d-grip gap-2 mx-auto mt-2">
          <button type="submit" className="btn btn-dark">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};
