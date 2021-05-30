import styled from 'styled-components';

function LightBaseText({ className, children }) {
  return (
    <div className={className}>
      <ScLightBaseText>{children}</ScLightBaseText>
    </div>
  );
}

const ScLightBaseText = styled.div`
  font-size: 1.125em;
  font-weight: 200;
  line-height: 100%;
`;

export default LightBaseText;
