import React, { Component } from 'react'
import '../index.css'
import 'font-awesome/css/font-awesome.css'
import { AiOutlineCloseCircle } from 'react-icons/fa'

class Product extends Component {
  state = {
    product: this.props.product,
  }

  render() {
    // console.log(this.props)
    return (
      <div className="col-lg-13">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">{this.state.product.id}</div>
            <span
              className="pull-right hand-icon"
              onClick={() => {
                this.props.onDelete(this.state.product)
              }}
            >
              <i className="fa fa-times"></i>
            </span>

            <div>
            <img src={this.state.product.photo} alt="Product" />
              <h5 className="pt-5 border-top">
                {this.state.product.productName}
              </h5>
            </div>
            <div>{this.state.product.price}</div>
            <div>{this.state.product.quantity}</div>
            <div>
              <span className="badge">{this.state.product.quantity}</span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 20)
                  }}
                >
                  +
                </button>

                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0)
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer text-right">{this.props.children}</div>
        </div>
      </div>
    )
  }
}
export default Product
