import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Product from './Product'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Products: [],
    }
  }

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        {/* <table className="table"> */}
        {/* <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>quantity</th>
            </tr>
          </thead> */}
        {/* <tbody> */}
        {this.state.Products.map((prod, key) => {
          return (
            <Product
              key={prod.id}
              product={prod}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            >
              <button className="btn btn-primary">Buy</button>
            </Product>
            // <tr>
            //   <td>{prod.id}</td>
            //   <td>{prod.productName}</td>
            //   <td>{this.getPrice(prod.price)}</td>
            //   <td>{prod.quantity}</td>
            // </tr>
          )
        })}
        {/* </tbody> */}
        {/* </table> */}
      </div>
    )
  }
  componentDidMount = async () => {
    var response = await fetch('http://localhost:5000/Products', {
      method: 'GET',
    })

    var product = await response.json()
    // console.log(product)
    this.setState({ Products: product })
  }
  getPrice = (price) => {
    if (price) {
      return price
    } else {
      return <div className="bg-danger p-2 text-center">Not Available</div>
    }
  }

  // componentDidMount() {
  //   console.log('componentDidMount - ProductList')
  // }

  handleIncrement = (Product, maxValue) => {
    //get index of selected course
    let allProducts = [...this.state.Products]
    let index = allProducts.indexOf(Product)
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++
      //update the state of current component (parent component)
      this.setState({ Products: allProducts })
    }
  }
  handleDecrement = (Product, minValue) => {
    //get index of selected course
    let allProducts = [...this.state.Products]
    let index = allProducts.indexOf(Product)
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--
      //update the state of current component (parent component)
      this.setState({ Products: allProducts })
    }
  }
  handleDelete = (Product) => {
    //get index of selected course
    let allProducts = [...this.state.Products]
    let index = allProducts.indexOf(Product)
    if (window.confirm('Are you sure to delete?')) {
      //delete course based on index
      allProducts.splice(index, 1)
      //update the state of current component (parent component)
      this.setState({ Products: allProducts })
    }
  }
}

export default ProductList
