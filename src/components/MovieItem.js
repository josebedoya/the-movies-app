import PropTypes from 'prop-types';
import { Popconfirm } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

const MovieItem = ({ title, release, handleDelete }) => {
  return (
    <div className='movie-item'>
      <div className='movie-item-info'>
        <h5>{title}</h5>
        <time>Release Date: {release}</time>
      </div>
      <div className='movie-item-actions'>
        <Popconfirm title={`Delete "${title}" movie?`} onConfirm={() => handleDelete()}>
          <DeleteTwoTone twoToneColor='#ad343e' />
        </Popconfirm>
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default MovieItem;
