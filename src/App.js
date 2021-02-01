import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/styles/main.scss';
import './assets/styles/app.less';
import { PagesRoute } from './components/AppRoute/PagesRoute';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Router>
        <Route component={PagesRoute} />
      </Router>
    </DataProvider>
  );
}

export default App;
