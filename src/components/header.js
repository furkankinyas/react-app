import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const searchInput = {
  width: "300px"
};

class Header extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isLoading: true,
      ajaxPage: 1,
      list:[],
      search:false
    }
  }

  handleChange(event) {
    const text = event.target.value;
    this.props.onChange(text);
  }

  render() {
    return(
      <header className="background-primary color-white padding-md height-md flex between middle margin-bottom-md">
        <div className="flex middle">
        <h1 className="font-weight-7 margin-right-lg">React My App</h1>
        {this.props.activePage!="/about/"&&
        <input style={searchInput} onChange={this.handleChange} value={this.props.value} className="radius-max height-sm padding-md" placeholder="arama" type="text"/>
        }
        </div>
          <nav>
            <ul className="flex">
              <li className="margin-right-md">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
          </ul>
        </nav>
      </header>
      )
  }
}

export default Header;