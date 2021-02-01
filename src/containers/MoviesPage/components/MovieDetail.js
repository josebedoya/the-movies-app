import PropTypes from 'prop-types';
import { Card } from 'antd';
import { formatReleaseDate } from '../../../utils';

const MovieDetail = ({ title, release, image, description }) => {
  return (
    <Card className="movie-detail" bordered={false}>
      <img alt={title} src={image} className="movie-image-detail" />
      <div className="movie-info-detail">
        <h3>{title}</h3>
        <span className='release-date'>
          Release Date: <time>{formatReleaseDate(release)}</time>
        </span>
        <p>{description}</p>
      </div>
    </Card>
  );
};

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default MovieDetail;
