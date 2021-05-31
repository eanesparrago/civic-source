import styled from 'styled-components';
import LightBaseText from 'components/LightBaseText';

function TopNavLightText({ children, ...rest }) {
  return <ScTopNavLightText {...rest}>{children}</ScTopNavLightText>;
}

const ScTopNavLightText = styled(LightBaseText)`
  letter-spacing: 0.125em;
`;

export default TopNavLightText;
