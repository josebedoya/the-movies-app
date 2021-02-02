import PropTypes from 'prop-types';
import { Popconfirm } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import { formatReleaseDate } from '../utils';

const MovieItem = ({ title, release, handleDelete, active, onClick }) => {
  return (
    <div
      className={active ? 'movie-item selected' : 'movie-item'}
      onClick={onClick}
    >
      <div className='movie-item-info'>
        <h5>{title}</h5>
        <time>Release Date: {formatReleaseDate(release)}</time>
      </div>
      <div className='movie-item-actions'>
        <Popconfirm
          title={`Delete "${title}" movie?`}
          onConfirm={() => handleDelete()}
        >
          <DeleteTwoTone twoToneColor='#ad343e' alt="delete" />
        </Popconfirm>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieItem;
