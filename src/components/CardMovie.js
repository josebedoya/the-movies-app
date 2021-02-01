import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { formatReleaseDate } from '../utils';

const CardMovie = ({ title, release, image, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      onClick={() => setIsOpen(!isOpen)}
      hoverable
      style={{ width: 220 }}
      cover={<img alt={title} src={image} />}
    >
      {isOpen && (
        <div className='info'>
          <h3>{title}</h3>
          <span className='release-date'>
            Release Date: <time>{formatReleaseDate(release)}</time>
          </span>
          <p>{description}</p>
          <span className='close'>x</span>
        </div>
      )}
    </Card>
  );
};

CardMovie.propTypes = {
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default CardMovie;
