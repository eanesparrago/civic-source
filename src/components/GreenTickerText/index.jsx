import styled from 'styled-components';
import MediumBaseText from 'components/MediumBaseText';

function GreenTickerText({ className, children }) {
  return (
    <ScGreenTickerText className={className}>{children}</ScGreenTickerText>
  );
}

const ScGreenTickerText = styled(MediumBaseText)`
  color: ${(p) => p.theme.color.primaryGreen};
`;

export default GreenTickerText;
