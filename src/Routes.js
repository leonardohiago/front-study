import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Courses from './pages/Courses';
import VideoList from './pages/VideoList';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/courses" component={Courses} />
      <Route path="/courses/:course" component={VideoList} />
    </Switch>
  );
}
