import styled from 'styled-components';
import backgroundJpg from './background.jpg';

function Background() {
  return (
    <ScBackground>
      <Neighbor>Neighbor?</Neighbor>

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

const Neighbor = styled.div`
  position: absolute;
  left: 15%;
  bottom: 40%;
  font-weight: 500;
  font-size: 1.125rem;
  color: #6ac1ff;
`;

export default Background;
