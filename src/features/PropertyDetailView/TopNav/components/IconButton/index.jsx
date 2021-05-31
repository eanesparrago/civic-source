import styled from 'styled-components';
import PropTypes from 'prop-types';

function IconButton({ imgSrc, imgAlt }) {
  return (
    <ScIconButton>
      <ScImg src={imgSrc} alt={imgAlt} />
    </ScIconButton>
  );
}

const ScIconButton = styled.button`
  height: 6.25em;
  cursor: pointer;
`;

const ScImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

IconButton.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default IconButton;
