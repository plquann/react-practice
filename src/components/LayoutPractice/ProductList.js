import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    state = {
        data: [],
    }
    randomImg() {
        return Math.floor(Math.random() * 100)
    }
    componentDidMount() {
        axios.get(`https://picsum.photos/v2/list?page=${this.randomImg()}&limit=4`)
            .then(res => {
                const data = res.data;
                data.map(item => this.setState({
                    data: [...this.state.data,
                    { src: item.download_url, title: item.author, desc: `Photo was taken by ${item.author}`, link: item.url }
                ]}));
            });
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