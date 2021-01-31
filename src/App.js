import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/styles/main.scss';
import './assets/styles/app.less';
import { PagesRoute } from './components/AppRoute/PagesRoute';

function App() {
  return (
    <Router>
      <Route component={PagesRoute} />
    </Router>
  );
}

export default App;
