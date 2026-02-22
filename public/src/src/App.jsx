import React, { useState } from "react";

function App() {
  const [para, setPara] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Birikim Takibi</h1>
      <h2>{para} TL</h2>
      <button onClick={() => setPara(para + 100)}>
        +100 TL Ekle
      </button>
    </div>
  );
}

export default App;
