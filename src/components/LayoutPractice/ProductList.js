import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        axios.get('https://picsum.photos/v2/list?page=1&limit=4')
            .then(res => {
                const data = res.data;
                data.map(item => this.setState({data: [...this.state.data, { src: item.download_url, title: item.author, description: `Photo was taken by ${item.author}`, link: item.url}]}));
            })
    }

    render() {
        return (
            <div>
                <div className="row text-center">
                    {this.state.data.map((item, index) => <ProductItem key={index} item={item} />)}
                </div>
            </div>
        )
    }
}
