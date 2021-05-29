import styled from 'styled-components';

function DisplayText1({ className, children }) {
  return <ScDisplayText1 className={className}>{children}</ScDisplayText1>;
}

const ScDisplayText1 = styled.div`
  font-size: 2.875rem;
  font-weight: 300;
`;

export default DisplayText1;
