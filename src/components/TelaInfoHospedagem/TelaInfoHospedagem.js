import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const TelaInfoHospedagem = ({ idCidadeSelecionada }) => {
  const { id } = useParams();
  const [dadosHospedagem, setDadosHospedagem] = React.useState(null);

  React.useEffect(() => {
    const req = axios.get("http://localhost:5000/hotels/" + id);

    req.then((res) => setDadosHospedagem(res.data));
  }, [id]);

  if (!dadosHospedagem) return;
  return (
    <Wrapper>
      <h2>{dadosHospedagem.name}</h2>
      <div>
        {dadosHospedagem.images.map((url) => (
          <img alt={url} src={url} />
        ))}
      </div>
      <div>
        <h3>Características</h3>
        <p>{dadosHospedagem.address}</p>
        <p>R${dadosHospedagem.price}</p>
        <p>{dadosHospedagem.description}</p>
      </div>
      <div>
        <h3>Comodidades</h3>
        <ul>
          {dadosHospedagem.amenities.map((amenity) => (
            <li>{amenity}</li>
          ))}
        </ul>
      </div>
      <Link to={"/hospedagens/" + idCidadeSelecionada}>Voltar</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 150px;
    height: 150px;
  }

  h3,
  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
  }
`;

export default TelaInfoHospedagem;
