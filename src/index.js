import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { useParams ,BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

function Home(){
  return(
    <div>
      <h2>Home!</h2>
      home ...
    </div>
  )
}

var contents=[
  {id:1, title:'HTML', desc:'HTML is ...'},
  {id:2, title:'JS', desc:'JS is ... '},
  {id:3, title:'React', desc:'React is ...'}
]

function Topic(){
  var params = useParams(); //Route에 있는 paraeter가져오기
  var topic_id = params.topic_id;
  var selectd_topic = {
    title:'Sorry',
    desc:'Not Found'
  }
  for (var i = 0; i<contents.length; i++){
    if (contents[i].id === Number(topic_id)){
      selectd_topic = contents[i];
      break;
    }
  }
  // console.log('params',params.topic_id);
  return(
    <div>
      <h3>{selectd_topic.title}</h3>
      {selectd_topic.desc}
    </div>
  )
}
function Topics(){
  var lis = [];
  for (var i = 0; i<contents.length; i++){
    lis.push(<li key={contents[i].id}><NavLink to={"/topics/"+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return(
    <div>
      <h2>Topics!</h2>
      <ul>
        {lis}
      </ul>
      <Route path="/topics/:topic_id"> <Topic></Topic></Route>
      {/* <Switch>
        <Route path="/topics/1">          HTML is ...        </Route>
        <Route path="/topics/2">          JS is ...        </Route>
        <Route path="/topics/3">          React is ...        </Route>
      </Switch> */}
    </div>
  )
}
function Contact(){
  
  return(
    <div>
      <h2>Contact!</h2>
      Contact ...
    </div>
  )
}

function App(){
  return (
    <div>
      <h2> React Router DOM example</h2>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home /> </Route>
        <Route path="/topics"><Topics /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/">Not Found</Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
