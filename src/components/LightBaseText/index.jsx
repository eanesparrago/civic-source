import styled from 'styled-components';

function LightBaseText({ className, children }) {
  return <ScLightBaseText className={className}>{children}</ScLightBaseText>;
}

const ScLightBaseText = styled.div`
  font-size: 1.125rem;
  font-weight: 200;
`;

export default LightBaseText;
