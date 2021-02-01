import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Row, Input, DatePicker, Button } from 'antd';
import moment from 'moment';
import { DataContext } from '../../../context/DataContext';

const releaseDateFormat = 'MM/DD/YYYY';

const MovieForm = ({ closeDrawer }) => {
  const { setMovies } = useContext(DataContext);

  const onFinish = values => {
    const { title, release, description } = values;
    const releaseString = moment(release).format('MM/DD/YYYY');
    const newMovie = {
      title,
      'release': releaseString,
      description
    }
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
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
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
            label='Title'
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
                message: 'Please choose a release date'
              }
            ]}
          >
            <DatePicker format={releaseDateFormat} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name='description' label='Description'>
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Button
            onClick={() => closeDrawer()}
            style={{ marginRight: 8 }}
          >
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
}

export default MovieForm;
