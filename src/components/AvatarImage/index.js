import React from 'react';
import PropTypes from 'prop-types';

import { Image } from './style';

const AvatarImage = ({ source, alt }) => <Image src={source} alt={alt} />;

AvatarImage.defaultProps = {
  alt: 'Imagem',
};

AvatarImage.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default AvatarImage;
