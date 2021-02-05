import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    // Setup the HTML string
    let responseHTML = '';

    
    // Loop through each item in array and create a list item
    this.props.menu.forEach( (item) => {
      // Wrap items in an unordered list

      // TODO: Add (concatenate) the value of each item to the variable responseHTML. 

      // Each should be wrapped in <li></li>
      
      responseHTML += '<li>' + Sidebar + '</li>';
    });


    
    return responseHTML;
  }
}

export default Sidebar;
