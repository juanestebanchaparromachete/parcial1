import React, {
    PropTypes,
    Component
} from 'react';
import classnames from 'classnames';
import './style.css';
export default class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            products: [],
            condition: false,
            item: {
                nombre: '',
                descripcion: '',
                alto: 0,
                ancho: 0,
                largo: 0,
                urlImagen: ''
            }
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.descChange = this.descChange.bind(this);
        this.urlChange = this.urlChange.bind(this);
        this.highChange = this.highChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.longChange = this.longChange.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    handleDelete(data) {
        deleteItem(data);
    }
    handleClick() {
        this.setState({
            condition: !this.state.condition
        });
    }

    createProduct() {
        createItem(this.state.item);
    }

    componentDidMount() {


        fetch('/products').then(res => res.json()).then(products => this.setState({
            products
        }));


        fetch('/cotizaciones').then(res => res.json()).then(quotes => this.setState({
            quotes
        }));
    }

    render() {
            return ();
                }
            }