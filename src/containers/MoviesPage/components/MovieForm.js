import { Form, Col, Row, Input, DatePicker, Button } from 'antd';
import moment from 'moment';

const releaseDateFormat = 'MM/DD/YYYY';

const MovieForm = ({ closeDrawer }) => {
  const onFinish = values => {
    const { title, release, description } = values;
    const releaseString = moment(release).format('MM/DD/YYYY');
    const newMovie = {
      'title': title,
      'release': releaseString,
      'description': description
    }
    if (localStorage.getItem('myMovies') === null) {
      localStorage.setItem('myMovies', '[]');
    }
    //
    const oldData = JSON.parse(localStorage.getItem('myMovies'));
    oldData.push(newMovie);
    //
    localStorage.setItem('myMovies', JSON.stringify(oldData));
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
          <Form.Item name='release' label='Release Date'>
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
            // onClick={() => setShowDrawer(false)}
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

export default MovieForm;
