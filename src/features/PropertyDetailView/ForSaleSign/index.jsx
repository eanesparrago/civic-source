import styled from 'styled-components';
import Label from './Label';
import SaleInfo from './SaleInfo';

function ForSaleSign() {
  return (
    <ScForSaleSignWrapper>
      <ScForSaleSign>
        <Label />

        <div className="ForSaleSign-horizontalLine" />
        <div className="ForSaleSign-verticalLine" />

        <SaleInfo />
      </ScForSaleSign>
    </ScForSaleSignWrapper>
  );
}

const ScForSaleSignWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 1;
`;

const ScForSaleSign = styled.div`
  min-width: 24em;
  position: relative;
  padding-left: 2em;
  padding-bottom: 8em;
  opacity: 0.85;

  .ForSaleSign-horizontalLine {
    height: 0.5em;
    background-color: ${(p) => p.theme.color.blue};
    margin-left: -2em;
  }

  .ForSaleSign-verticalLine {
    position: absolute;
    left: calc(2em - 0.5em);
    top: 0;
    width: 0.5em;
    height: 100%;
    background-color: ${(p) => p.theme.color.blue};
  }
`;

export default ForSaleSign;
