import React, {
    Component
} from 'react';
import {
    getUser
} from './getUser';
import {
    saveSearch
} from './saveSearch';
import './styleApp.css';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            condition: false,
            onSearch: [],
            followers: [],
            nombre: '',
            history:[],
            following:[]
            
        };
        this.handleGet2 = this.handleGet2.bind(this);
        this.handleGet = this.handleGet.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }


    handleGet() {
        
        
        if (this.state.onSearch.length > 0 )
            {
                saveSearch(this.state.onSearch);
                fetch('/search').then(res => res.json()).then(history => this.setState({
                    history
                }));
                this.state.onSearch = [];
            }
        
        this.state.onSearch.push(this.state.nombre);
        fetch('/getfollowers/'+this.state.nombre).then(res => res.json()).then(followers => this.setState({
                followers
            }));
        fetch('/reps/'+this.state.nombre).then(res => res.json()).then(following => this.setState({
                following
            }));

        
    }
    
    handleGet2(data) {
        console.log('llega al 3 handler')
        this.state.nombre = data
        this.state.onSearch.push(data);
        fetch('/getfollowers/'+data).then(res => res.json()).then(followers => this.setState({
                followers
            }));
        fetch('/reps/'+data).then(res => res.json()).then(following => this.setState({
                following
            }));
    }

    nameChange(event) {
        const target = event.target;
        const value = target.value;
        this.state.nombre = target.value;
        this.setState(prevState => ({
            nombre: this.state.nombre
        }));
    }
    componentDidMount() {
        fetch('/search').then(res => res.json()).then(history => this.setState({
            history
        }));

    }

    render() {
        return ( <
            div className = "container" >
            <
            div >
            <
            br / >
            <
            div className = "search" >

            <
            label >
            User name: < input required type = "text"
            value = {
                this.state.nombre
            }
            onChange = {
                this.nameChange
            }
            placeholder = "Github user name" /
            >
            <
            /label> <
            button className="btn btn-primary " onClick = {
                () => {
                    this.handleGet()
                }
            } > Search < /button> < /
            div > <
            /div>

            <div className="row" >     <
            h1 > Seguidores: < /h1>
            </div>
            <
            div className = "listGithub row" >
            
            
                {this.state.followers.map(follower => <
            div className = "contenedorUsuario col-sm-2 text-center" >
            <
            img className = "imagenUser"
            alt = "100%x280"
            src = { follower.avatar_url} / >
            <
            br / >
            <div class="span2">
            <
            button type = "button"
            className = "btn btn-info btn-block" onClick = {() => { this.handleGet2(follower.login)}}  > {
                        follower.login
                    } < /button> 
                    </div><
            /div>)}
                
            

            </div> 
            
            <div className="row" >     <
            h1 > Siguiendo: < /h1>
            </div>
            <
            div className = "listGithub row" >
            
            
                {this.state.following.map(follow => <
            div className = "contenedorUsuario col-sm-2 text-center" >
            <
            img className = "imagenUser"
            alt = "100%x280"
            src = { follow.avatar_url} / >
            <
            br / >
            <div class="span2">
            <
            button type = "button"
            className = "btn btn-info btn-block" onClick = {() => { this.handleGet2(follow.login)}}  > {
                        follow.login
                    } < /button> 
                    </div><
            /div>)}
                
            

            </div> 
            
            
            <div className="row" >     <
            h1 > Historial: < /h1>
            </div>

<div className="row" >   
            {this.state.history.map(hist =><div className="col-sm-4">
              <label>{ hist.date} </label>  
            <ul className="list-group">
                {hist.search.map(val => <li className="list-group-item">{val} sigue a  </li> )}
            </ul>
            </div>)}
            
            </div>

            <
            /div> 

        );
    }
}