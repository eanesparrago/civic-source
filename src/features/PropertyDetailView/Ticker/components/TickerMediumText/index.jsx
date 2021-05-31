import styled from 'styled-components';
import MediumBaseText from 'components/MediumBaseText';

function TickerMediumText({ children, ...rest }) {
  return <ScTickerMediumText {...rest}>{children}</ScTickerMediumText>;
}

const ScTickerMediumText = styled(MediumBaseText)`
  letter-spacing: 0.04875em;
`;

export default TickerMediumText;
