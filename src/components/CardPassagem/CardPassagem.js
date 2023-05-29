import dayjs from "dayjs";
import styled from "styled-components";

const CardPassagem = ({
  arrival_time,
  price,
  origin_city,
  image_url,
  selecionarPassagem,
}) => {
  const dataFormatada = dayjs(arrival_time).format("DD-MM-YYYY HH:mm");
  return (
    <Wrapper onClick={selecionarPassagem}>
      <img src={image_url} alt="" />
      <p>{dataFormatada}</p>
      <p>R${price}</p>
      <p>De: {origin_city}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  img {
    width: 100px;
  }
`;

export default CardPassagem;
