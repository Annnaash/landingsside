import React, { useState } from "react";

function Kontaktoss() {
  const [navn, setNavn] = useState("");
  const [epost, setEpost] = useState("");
  const [melding, setMelding] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Skjema sendt:", { navn, epost });
    setMelding("Takk for din henvendelse! Vi vil kontakte deg snart.");
    setNavn("");
    setEpost("");
  };

  return (
    <main className="cont">
      <h1>Kontakt Oss</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="navn">Navn:</label>
          <input
            type="text"
            id="navn"
            value={navn}
            onChange={(e) => setNavn(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="epost">E-post:</label>
          <input
            type="email"
            id="epost"
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {melding && <p className="mt-4 text-success">{melding}</p>}
    </main>
  );
}

export default Kontaktoss;
