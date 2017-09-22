import React, {
    PropTypes,
    Component
} from 'react';
import classnames from 'classnames';
import './style.css';
export default class Admin extends Component {
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
<div>
    <div >
        <input type="text" />
        
        <button> </button>
        
    </div>
    
    <div class="listGithub">
        
        <div class="card">
            <img data-src="holder.js/100px280/thumb" alt="100%x280" style="height: 280px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2283%22%20height%3D%22280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2083%20280%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ea5e68bbb%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ea5e68bbb%22%3E%3Crect%20width%3D%2283%22%20height%3D%22280%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2210.359375%22%20y%3D%22146.3%22%3E83x280%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <label>Nombre:</label>
            <label>Juan Esteban </label>
            <br />
            <label>Seguidores:</label>
            <br />
            <button type="button" class="btn btn-info">seguidor 1</button>   
            
          </div>
        
    </div>     
</div>
       
    );
  }
}
