import styled from 'styled-components';

function DisplayText1({ className, children }) {
  return (
    <div className={className}>
      <ScDisplayText1>{children}</ScDisplayText1>
    </div>
  );
}

const ScDisplayText1 = styled.div`
  font-size: 2.875em;
  font-weight: 300;
  line-height: 100%;
`;

export default DisplayText1;
