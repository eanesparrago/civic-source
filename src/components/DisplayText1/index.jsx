import styled from 'styled-components';

function DisplayText1({ className, children }) {
  return (
    <ScDisplayText1 className={className}>
      <span>{children}</span>
    </ScDisplayText1>
  );
}

const ScDisplayText1 = styled.div`
  color: ${(p) => p.theme.color.textDarkHighPriority};

  span {
    font-size: 2.875em;
    font-weight: 300;
    line-height: 100%;
  }
`;

export default DisplayText1;
