import styled from 'styled-components';

function MediumBaseText({ className, children }) {
  return <ScMediumBaseText className={className}>{children}</ScMediumBaseText>;
}

const ScMediumBaseText = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${(p) => p.theme.color.textDarkHighPriority};
`;

export default MediumBaseText;
