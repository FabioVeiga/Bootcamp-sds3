import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        {/* py padding */}
        <h1 className="text-primary py-3">Dashboard Vendas</h1>

        <div className="row px-3"> {/* row poe em linha, px (padding) */}
          <div className="col-sm-6"> {/* grade de 6 partes, usando metade */}
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6"> {/* grade de 6 partes, usando metade */}
          <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>

        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
