import React from 'react';
import { BrowserRouter,Route,Link,Router, HashRouter} from 'react-router-dom';
import { Switch} from 'react-router-dom';
import  Shows from './component/Shows';
import  Show from './component/Show';
import Schedule from './component/Schedule';
import  Episode from './component/Episode';
require('react-router').hashHistory;


const apiUrl  = 'http://api.zxqk.life';
//const baseUrl = 'http://boxout.fm';

const baseUrl = 'http://localhost:3000';


const AppRouter = ()  => (
	<Switch>
	<Route path = "/schedule" component={Schedule}/>
	<Route path = "/shows" component={Shows}/>
	<Route path = "/show/:showName" component={Show}/>
	<Route path = "/show/:showName/:episodeNo" component={Episode}/>
	</Switch>



	



)

export default AppRouter;