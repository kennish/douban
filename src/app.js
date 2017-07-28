import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
import Frame from 'frame/Frame';

require('css/reset.css');
require('css/style.css');

ReactDOM.render(
    <Router>
        <div>
            <Route to="/" component={Frame} />
        </div>
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
