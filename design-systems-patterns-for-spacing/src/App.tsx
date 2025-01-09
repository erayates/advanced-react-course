import "./App.css";

import SubscribeForm from "./components/01-layers-pattern";
import InfoForm from "./components/02-split-pattern";
import InfoFormWithColumns from "./components/03-columns-pattern";
import Cards from "./components/04-grid-pattern";

function App() {
  return (
    <div style={{ maxWidth: "768px", margin: "0 auto" }}>
      <div>
        <p>Layers Pattern</p>
        <SubscribeForm />
      </div>

      <hr />

      <div>
        <p>
          <strong>Split Pattern</strong>
        </p>
        <InfoForm />
      </div>

      <hr />

      <div>
        <p>
          <strong>Columns Pattern</strong>
        </p>
        <InfoFormWithColumns />
      </div>

      <hr />

      <div>
        <p>
          <strong>Grid Pattern</strong>
        </p>
        <Cards />
      </div>
    </div>
  );
}

export default App;
