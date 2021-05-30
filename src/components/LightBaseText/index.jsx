import styled from 'styled-components';

function LightBaseText({ className, children }) {
  return <ScLightBaseText className={className}>{children}</ScLightBaseText>;
}

const ScLightBaseText = styled.div`
  font-size: 1.125em;
  font-weight: 200;
  line-height: 100%;
`;

export default LightBaseText;
