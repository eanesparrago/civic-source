import styled from 'styled-components';

function LightBaseText({ className, children }) {
  return (
    <ScLightBaseText className={className}>
      <span>{children}</span>
    </ScLightBaseText>
  );
}

const ScLightBaseText = styled.div`
  color: ${(p) => p.theme.color.textDarkMidPriority};

  span {
    font-size: 1.125em;
    font-weight: 200;
    line-height: 100%;
  }
`;

export default LightBaseText;
