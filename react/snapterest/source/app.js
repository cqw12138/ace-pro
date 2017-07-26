var React = require('react');
var ReactDom = require("react-dom");
var ReactDOMServer = require('react-dom/server');

//ReactDOMServer.renderToStaticMarkup(ReactElement);
/*
var reactElement = React.createElement("h1",{className:'header'},'This is React!');
var h1 = React.createElement('h1',{className:'header',key:'header'},'Thus is  React!!');
var p = React.createElement('p',{className:'content',key:'content'},"And that is how it works!");
var reactFragment = [h1,p];
var section = React.createElement('section',{className:'container'},reactFragment);
ReactDom.render(section,document.getElementById('react-application'));

var createListItemElement = React.createFactory('li');
var listItemElement1 = createListItemElement({className:'item-1',key:'item-1'},'Item-1');
var listItemElement2 = createListItemElement({className:'item-2',key:'item-2'},'Item-2');
var listItemElement3 = createListItemElement({className:'item-3',key:'item-3'},'Item-3');
var reactFragment1 = [listItemElement1,listItemElement2,listItemElement3];
var listOfItems = React.createElement('ul',{className:'list-of-items'},reactFragment1);
ReactDom.render(listOfItems,document.getElementById('react-application'));

var listItemElement4 = React.DOM.li({className:'item-4',key:'item-4'},'Item-4');
var listItemElement5 = React.DOM.li({className:'item-5',key:'item-5'},'Item-5');
var listItemElement6 = React.DOM.li({className:'item-6',key:'item-6'},'Item-6');
var reactFragment2 = [listItemElement4,listItemElement5,listItemElement6];
var listOfItems1 = React.DOM.ul({className:'list-of-items'},reactFragment2);
ReactDom.render(listOfItems1,document.getElementById('react-application'));

var alldom = [section,listOfItems,listOfItems1];
var mainDiv = React.DOM.div({className:'main'},alldom);
ReactDom.render(mainDiv,document.getElementById('react-application'));
*/
var listOfItems = <ul className="list-of-items"><li className="item-1">Item1</li><li className="item-2">Item2</li><li className="item-3">Item3</li></ul>;
ReactDom.render(listOfItems, document.getElementById('react-application'));