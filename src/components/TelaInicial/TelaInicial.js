import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const TelaInicial = ({ setIdCidadeSelecionada }) => {
  const [cidades, setCidades] = React.useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = React.useState(null);

  React.useEffect(() => {
    const findCidades = axios.get("http://localhost:5000/cities");
    findCidades.then((res) => setCidades(res.data));
  }, []);

  const selecionaCidade = (event) => {
    if (
      event.target.options[event.target.selectedIndex].value === "Selecione"
    ) {
      setCidadeSelecionada(null);
      return;
    }

    const { value, text } = event.target.options[event.target.selectedIndex];

    setCidadeSelecionada({
      name: text,
      id: value,
    });
    setIdCidadeSelecionada(value);
    // navigate("/passagens/" + event.target.value);
  };

  return (
    <Wrapper>
      <form action="">
        <label htmlFor="">Selecione a cidade de destino</label>
        <select name="opcoes" id="opcoes" onChange={selecionaCidade}>
          <option value={null}>Selecione</option>
          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.id}>
              {cidade.name}
            </option>
          ))}
        </select>
      </form>
      {cidadeSelecionada ? (
        <>
          <p>Cidade selecionada: {cidadeSelecionada.name}</p>
          <div>
            <Link to={"/passagens/" + cidadeSelecionada.id}>Ver passagens</Link>
            <Link to={"/hospedagens/" + cidadeSelecionada.id}>
              Ver hospedagens
            </Link>
          </div>
        </>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  gap: 15px;
  width: 400px;

  form {
    display: grid;
    gap: 15px;
  }

  div {
    display: flex;
    gap: 25px;
  }
`;

export default TelaInicial;
