import styled from "styled-components";

const CardHospedagem = ({ images, name, price, selecionarHospedagem }) => {
  return (
    <Wrapper onClick={selecionarHospedagem}>
      <div>
        {/* {images.map((url) => (
          <img key={url} src={url} alt={`Fotos do ${name}`} />
        ))} */}
        <p>{name}</p>
        <p>R${price}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 40px;
`;

export default CardHospedagem;
