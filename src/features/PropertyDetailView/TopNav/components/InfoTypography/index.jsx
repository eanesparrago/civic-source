import styled from 'styled-components';
import DisplayText1 from 'components/DisplayText1';
import TopNavLightText from '../TopNavLightText';

function InfoTypography({ line1Text, line2Text, Line3Text, ...rest }) {
  return (
    <ScInfoTypography {...rest}>
      <ScLine1Text>{line1Text}</ScLine1Text>

      <ScLine2Text>{line2Text}</ScLine2Text>

      <TopNavLightText>{Line3Text}</TopNavLightText>
    </ScInfoTypography>
  );
}

const ScInfoTypography = styled.div`
  text-align: center;
`;

const ScLine1Text = styled(TopNavLightText)`
  margin-bottom: 0.59375em;
`;

const ScLine2Text = styled(DisplayText1)`
  margin-bottom: 0.40625em;
`;

export default InfoTypography;
