import React, {
    Component
}
import {
    getUser
} from './getUser';
from 'react';
import './styleApp.css';
import { createQuote } from './createQuote'
class App extends Component {
    constructor(props) {
        super(props);
    }
    
    
    handleClick() {
        this.setState({
            condition: !this.state.condition
        });
    }
        

  componentDidMount() {
    fetch('/getfollowers/juanestebanchaparromachete')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;