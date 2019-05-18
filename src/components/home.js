import React from 'react';

  class Index extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      }
    }
  
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json =>  
        this.setState({
          list: json.slice(0,10),
          isLoading: false
        })
      )
    }
  
    render() {
      if (this.state.isLoading) {
        return <p>Loading ...</p>;
      }
      return (
        <ul>
          {this.state.list.map(item =>
            <li key={item.id}>
              {item.id}
            </li>
          )}
        </ul>
      );
    }

  }

export default Index;