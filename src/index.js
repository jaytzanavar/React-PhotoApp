import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import Main from './Components/Main';



    //url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg'); 
// const tasks = ['one', '2', 'three', '4']

// const element = React.createElement('ol', null, tasks.map((task, index) => React.createElement('li', { key: index }, task)));
// const elemnt2 = <ol> <li>Jaja
//     {tasks.map((task, index) => React.createElement('li', { key: index }, task))}</li>
//     <li>haha
//     {tasks.map((task, index) => <li key={task}>{task}</li>)}
//     </li>
//     <li>xaxa</li></ol>


// const elmnt3 =
//     <div>
//         <h1> Elemnt</h1>
//         lalal
//         {elemnt2}
//     </div>


// ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));
