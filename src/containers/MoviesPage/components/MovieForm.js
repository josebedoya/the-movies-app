import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Form, Col, Row, Input, DatePicker, Button } from 'antd';
import moment from 'moment';
import { DataContext } from '../../../context/DataContext';

const releaseDateFormat = 'MM/DD/YYYY';

const MovieForm = ({ closeDrawer }) => {
  const { setMovies } = useContext(DataContext);
  const [image64, setImage64] = useState('');
  const [hasImage, setHasImage] = useState(null);
  const history = useHistory();

  const onFinish = values => {
    const { title, release, description } = values;
    const releaseString = moment(release).format('MM/DD/YYYY');
    if (image64 === '') {
      setHasImage(false);
      return;
    }
    const newMovie = {
      title,
      release: releaseString,
      description,
      image: image64,
    };
    if (localStorage.getItem('myMovies') === null) {
      localStorage.setItem('myMovies', '[]');
    }
    //
    const myMoviesParse = JSON.parse(localStorage.getItem('myMovies'));
    myMoviesParse.push(newMovie);
    //
    localStorage.setItem('myMovies', JSON.stringify(myMoviesParse));
    setMovies(myMoviesParse);
    //
    closeDrawer();
    history.push('/');
  };

  const onFinishFailed = () => {
    if (image64 === '') setHasImage(false);
  };

  const previewFile = e => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage64(reader.result);
      setHasImage(true);
    };
  };

  return (
    <Form
      layout='vertical'
      id='movieForm'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name='title'
            label='Movie Title'
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Please enter a movie title',
              },
            ]}
          >
            <Input placeholder='Please enter a movie title' />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name='release'
            label='Release Date'
            rules={[
              {
                required: true,
                message: 'Please choose a release date',
              },
            ]}
          >
            <DatePicker format={releaseDateFormat} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label='Movie Image'>
            <input
              type='file'
              onChange={e => previewFile(e)}
              accept='.gif,.jpg,.jpeg,.png'
            />
            {image64 !== '' && (
              <img src={image64} width='100' alt='Movie poster' />
            )}
            {hasImage === false && (
              <div role='alert' style={{ color: '#ff4d4f' }}>Movie Image is required</div>
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name='description' label='Description'>
            <Input.TextArea rows={10} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Button onClick={() => closeDrawer()} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button
            type='primary'
            htmlType='submit'
            form='movieForm'
            key='submit'
          >
            Save Movie
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

MovieForm.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};

export default MovieForm;
