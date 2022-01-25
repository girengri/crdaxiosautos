import React from "react";
import { AgregarProducto } from "../components/AgregarProducto";
import { ListaProducto } from "../components/ListaProducto";

export const ListaProductos = () => {
  return (
    <div className="container mt-5">
      <h1>Productos</h1> <br />
      <div className="row">
        <div className="col-8">
          <ListaProducto />
        </div>
        <div className="col-4">
          <h1>
            <AgregarProducto />
          </h1>
        </div>
      </div>
    </div>
  );
};
