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
  left: 12.7%;
  right: 73.57%;
  top: 53.06%;
  bottom: 39.11%;
  font-weight: 500;
  font-size: 1.125em;
  color: #6ac1ff;
  letter-spacing: 0.125em;
  height: 7.0625em;
  width: 22em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Background;
