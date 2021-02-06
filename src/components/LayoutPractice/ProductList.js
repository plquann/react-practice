import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    data = [
        {img: 'https://picsum.photos/id/237/500/325', title: 'First Item', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'},
        {img: 'https://picsum.photos/id/560/500/325', title: 'Second Item', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'},
        {img: 'https://picsum.photos/id/724/500/325', title: 'Third Item', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'},
        {img: 'https://picsum.photos/id/368/500/325', title: 'Four Item', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'},

    ];
    render() {
        return (
            <div>
                <div className="row text-center">
                    {this.data.map((item, index) => {
                        return <ProductItem  key={index} item = {item}/>
                    })}
                </div>
            </div>
        )
    }
}
