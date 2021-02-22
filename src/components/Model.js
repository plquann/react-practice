import React, { Component } from 'react'

export default class Model extends Component {
    renderModel = (item) => {
        let { name, desc, url } = item;
        return (
          <div>
            <img
              src={url}
              style={{
                width: "55%",
                position: "absolute",
                left: "51%",
                transform: "translateX(-50%)",
                top: 65,
                opacity: "0.6",
              }}
              alt=""
            />
            <div
              className="content"
              style={{
                backgroundColor: "rgba(249, 176, 106, 0.75)",
                width: "100%",
                position: "absolute",
                bottom: 0,
                height: "80px",
              }}
            >
              <h1 style={{ fontSize: "15px" }}>{name}</h1>
              <p style={{ color: "black", fontSize: "13px", width: "100%" }}>
                {desc}
              </p>
            </div>
          </div>
        );
      };
    render() {
        return (
            <div className="model" style={{backgroundImage: "url('./glassesImage/model.jpg')"}}>
                {this.renderModel(this.props.glasses)}
            </div>
        )
    }
}
