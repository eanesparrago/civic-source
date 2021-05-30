import styled from 'styled-components';
import MediumBaseText from 'components/MediumBaseText';

function GreyTickerText({ className, children }) {
  return <ScGreyTickerText className={className}>{children}</ScGreyTickerText>;
}

const ScGreyTickerText = styled(MediumBaseText)`
  color: ${(p) => p.theme.color.textDarkLowPriority};
  line-height: 100%;
`;

export default GreyTickerText;
