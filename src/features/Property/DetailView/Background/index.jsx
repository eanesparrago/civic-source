import styled from 'styled-components';
import backgroundJpg from './background.jpg';

function Background() {
  return (
    <ScBackground>
      <ScImg src={backgroundJpg} alt="" />
    </ScBackground>
  );
}

const ScBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const ScImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default Background;
