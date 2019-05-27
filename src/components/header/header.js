import React, {Component} from 'react';

class Header extends Component {

  state = {
    showPhones: false
  }

showPhonesOnClick = (e) => {
  this.setState({
    showPhones: !this.state.showPhones
  })
}

render(){

  return (
      <div id="call_us" onClick={this.showPhonesOnClick}>
        {this.state.showPhones ?
          <div id="myDIV">
            <div className="phone__number">
              <a href="tel:+38 (097) 90 42 553">+38 (097) 90 42 553</a>
              <a href="tel:+38 (095) 90 30 126">+38 (095) 90 30 126</a>
              <a href="tel:+38 (066) 73 55 190">+38 (066) 73 55 190</a>
              <a href="tel:+38 (067) 75 76 844">+38 (067) 75 76 844</a>
              <a href="tel:(032) 47 59 805">(032) 47 59 805</a>
            </div>
          </div> : ''}
        </div>
      );
  }
}

export default Header;
