import styled from 'styled-components';
import LightBaseText from 'components/LightBaseText';

function TickerLightText({ children, ...rest }) {
  return <ScTickerLightText {...rest}>{children}</ScTickerLightText>;
}

const ScTickerLightText = styled(LightBaseText)`
  letter-spacing: 0.04875em;
`;

export default TickerLightText;
