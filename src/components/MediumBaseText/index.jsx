import styled from 'styled-components';

function MediumBaseText({ className, children }) {
  return (
    <div className={className}>
      <ScMediumBaseText>{children}</ScMediumBaseText>
    </div>
  );
}

const ScMediumBaseText = styled.div`
  font-size: 1.125em;
  font-weight: 500;
  line-height: 100%;
`;

export default MediumBaseText;
