import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Erro ao buscar CEP");
      setInput("");
    }
  }
  return (
    <div className="conteiner">
      <h1 className="title"> Busca CEP</h1>

      <div className="containerInput">
        <input
          type="number"
          min={0}
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="button" className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"></FiSearch>
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2 className="">CEP: {cep.cep}</h2>
          <span>Logradouro: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>
            Cidade: {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
