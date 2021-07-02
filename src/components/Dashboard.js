import { Maps } from "./Maps";
import { Chart } from "./Chart";

import "../styles/components/dashboard.css";

export function Dashboard() {
  return (
    <>
      <div className="container-dashboard">
        <div className="div-grafico">
          <Chart />
        </div>
        <div className="div-maps">
          <Maps />
        </div>
      </div>
    </>
  );
}
