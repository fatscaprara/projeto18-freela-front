import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";

const TelaInfoPassagem = ({ idCidadeSelecionada }) => {
  const { id } = useParams();
  const [infoPassagem, setInfoPassagem] = React.useState(null);

  React.useEffect(() => {
    const req = axios.get("http://localhost:5000/tickets/" + id);
    req.then((res) => setInfoPassagem(res.data));
  }, [id]);

  console.log(infoPassagem);

  if (!infoPassagem) return;
  return (
    <Wrapper>
      <h2>Passagem para {infoPassagem.destination_city}</h2>
      <p>Cidade de Destino: {infoPassagem.destination_city}</p>
      <p>Cidade de Origem: {infoPassagem.origin_city}</p>
      <p>Companhia aérea: {infoPassagem.airline}</p>
      <p>
        Horário de partida: {dayjs(infoPassagem.departure_time).format("HH:mm")}
      </p>
      <p>
        Horário previsto de chegada:{" "}
        {dayjs(infoPassagem.arrival_time).format("HH:mm")}
      </p>
      <p>Preço da Passagem: R${infoPassagem.price}</p>
      <Link to={"/passagens/" + idCidadeSelecionada}>Voltar</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default TelaInfoPassagem;
