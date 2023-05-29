import axios from "axios";
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CardPassagem from "../CardPassagem/CardPassagem";

const TelaPassagens = ({ setIdCidadeSelecionada }) => {
  const { idCidade } = useParams();
  const [tickets, setTickets] = React.useState(null);
  const [cidadeOrigem, setCidadeOrigem] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const req = axios.get(
      `http://localhost:5000/tickets/destination/${idCidade}`
    );
    req.then((res) => {
      setTickets(res.data);
      setCidadeOrigem(res.data[0].destination_city);
    });
  }, [idCidade, setIdCidadeSelecionada]);

  const selecionarPassagem = (id) => {
    console.log("clicando" + id);
    navigate("/passagem/" + id);
  };

  console.log(tickets);

  if (!tickets) return null;
  return (
    <Wrapper>
      <h1>Passagens para {cidadeOrigem}</h1>
      {tickets.map(({ id, arrival_time, price, image_url, origin_city }) => (
        <CardPassagem
          selecionarPassagem={() => selecionarPassagem(id)}
          arrival_time={arrival_time}
          price={price}
          image_url={image_url}
          origin_city={origin_city}
        />
      ))}
      <Link to={"/"}>Voltar</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  h1 {
    grid-column: 1/-1;
  }
`;

export default TelaPassagens;
