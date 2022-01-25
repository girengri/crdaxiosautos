import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../helpers/url";

export const ListaProducto = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((respuesta) => {
        setAutos(respuesta.data);
      })
      .catch((error) => console.log(error));
  };

  const dataDelete = (id) => {
    axios
      .delete(url + id)
      .then((respuesta) => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <table className="table text-center mt-3">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Imagen</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Airbags</th>
            <th scope="col">Estrellas</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>

        <tbody>
          {autos.map((auto) => (
            <tr key={auto.id}>
              <td>{auto.id}</td>
              <td>
                <img src={auto.imagen} alt="auto" width="50" />
              </td>
              <td>{auto.marca}</td>
              <td>{auto.modelo}</td>
              <td>{auto.airbags}</td>
              <td>{auto.estrellas}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => dataDelete(auto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
