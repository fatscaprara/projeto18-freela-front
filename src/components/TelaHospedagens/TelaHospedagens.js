import axios from "axios";
import React from "react";
import styled from "styled-components";
import CardHospedagem from "../CardHospedagem/CardHospedagem";
import { Link, useNavigate } from "react-router-dom";

const TelaHospedagens = ({ idCidadeSelecionada }) => {
  const navigate = useNavigate();
  const [hospedagens, setHospedagens] = React.useState(null);

  React.useEffect(() => {
    const req = axios.get(
      "http://localhost:5000/hotels/destination/" + idCidadeSelecionada
    );
    req.then((res) => setHospedagens(res.data));
  }, [idCidadeSelecionada]);

  const selecionarHospedagem = (id) => {
    navigate("/hospedagem/" + id);
  };
  if (!idCidadeSelecionada || !hospedagens) return;
  return (
    <>
      <Wrapper>
        {hospedagens.map(({ id, images, name, price }) => (
          <CardHospedagem
            images={images}
            price={price}
            name={name}
            selecionarHospedagem={() => selecionarHospedagem(id)}
          />
        ))}
      </Wrapper>
      <Link to={"/"}>Voltar</Link>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export default TelaHospedagens;
