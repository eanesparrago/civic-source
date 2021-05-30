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
  min-width: 24rem;
  position: relative;
  padding-left: 2rem;
  padding-bottom: 8rem;

  .ForSaleSign-horizontalLine {
    height: 0.5rem;
    background-color: ${(p) => p.theme.color.blue};
    margin-left: -2rem;
  }

  .ForSaleSign-verticalLine {
    position: absolute;
    left: calc(2rem - 0.5rem);
    top: 0;
    width: 0.5rem;
    height: 100%;
    background-color: ${(p) => p.theme.color.blue};
  }
`;

export default ForSaleSign;
