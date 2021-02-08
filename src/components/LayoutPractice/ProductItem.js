import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { item } = this.props;

        return (
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src={item.src} />
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer">
                        <a href={item.link} className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        )
    }
}
