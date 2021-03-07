import React, { Component } from 'react'

export default class Glasses extends Component {
    render() {
        return (
            <div className="glasses">
                {this.props.arrProds.map((item) => (
                    <div className="glasses-item" onClick={() => this.props.changeGlasses(item)}>
                        <img
                            src={item.url}
                            style={{ width: "100%", padding: "10px", cursor: "pointer" }}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        )
    }
}
