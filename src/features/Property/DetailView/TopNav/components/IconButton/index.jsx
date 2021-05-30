import styled from 'styled-components';

function IconButton({ imgSrc, imgAlt }) {
  return (
    <ScIconButton>
      <ScImg src={imgSrc} alt={imgAlt} />
    </ScIconButton>
  );
}

const ScIconButton = styled.button`
  height: 5.625rem;
  cursor: pointer;
`;

const ScImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export default IconButton;
