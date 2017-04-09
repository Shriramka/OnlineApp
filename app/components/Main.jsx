var React = require('react');
var Nav =require('Nav');



/*var Main =React.createClass({
    render: function () {

        return (
           <div>
               <Nav />
               <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Get Weather </IndexLink>
               <Link to="/about"  activeClassName="active" activeStyle={{fontWeight:'bold'}}> About </Link>
               <Link to="/example"  activeClassName="active" activeStyle={{fontWeight:'bold'}}> Example </Link>
               <a href="#/about"  activeClassName="active" activeStyle={{fontWeight:'bold'}}> Got To About </a>
               
           <h2>Main Component</h2>
           {this.props.children}
           
           </div>
        );

    }


});*/

var Main =(props) => {

     return (
           <div>
               <Nav />               
               
           <h2>Main Component</h2>
           {props.children}
           
           </div>
        );

}

module.exports =Main;