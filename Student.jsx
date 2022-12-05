import React, { Component } from 'react'
import '../index.css';

class Student extends Component {
  state = {
    title: 'Student',
    count: 40,
    students: [
      {
        id: 1,
        name: 'vijay',
        phone: '123456890',
        address: { city: 'chennai' },
        photo: 'https://picsum.photos/id/2/200/150',
      },
      {
        id: 2,
        name: 'karthick',
        phone: '7894561230',
        address: { city: 'Bangalore' },
        photo: 'https://picsum.photos/id/12/200/150',
      },
      {
        id: 3,
        name: 'balaji',
        phone: '1478523690',
        address: { city: 'canada' },
        photo: 'https://picsum.photos/id/18/200/150',
      },
      {
        id: 4,
        name: 'js',
        phone: '6369875412',
        address: { city: 'cmtr' },
        photo: 'https://picsum.photos/id/58/200/150',
      },
      {
        id: 5,
        name: 'mithu',
        phone: '',
        address: { city: 'kvpt' },
        photo: 'https://picsum.photos/id/43/200/150',
      },
    ],
  }
  render() {
    return (
      <div>
        <h4 className='h4'>
          {this.state.title}
          <span className="badge badge-secondary m-2 highlight bg-danger">
            {this.state.count}
          </span>
          <button className="btn btn-warning text-white" onClick={this.onRefreash}>
            Refreash
          </button>
        </h4>
        <table className="table">
          <thead className="table-head">
            <tr>
              <th>ID</th>
              <th>PHOTO</th>
              <th>NAME</th>
              <th>PHONE.NO</th>
              <th>CITY</th>
            </tr>
          </thead>
          <tbody className="table-body">{this.getStudentRow()}</tbody>
        </table>
      </div>
    )
  }
  onRefreash = () => {
    this.setState({
      count: 5,
    })
  }

  getPhone = (phone) => {
    if (phone) {
      return phone
    } else {
      return <div className="bg-danger p-2 text-center">Not Available</div>
    }
  }

  studentNameStyle = (stuName) => {
    if (stuName.startsWith('v')) return 'green-highlight border-left'
    else if (stuName.startsWith('b')) return 'red-highlight border-right'
    else return ''
  }
  getStudentRow = () => {
    return this.state.students.map((stu, index) => {
      return (
        <tr>
          {/* <td>{stu.photo}</td> */}
          <td>{stu.id}</td>
          <td>
            <img src={stu.photo} class="photo" alt="students" />
            <div>
              <button
                className="changephoto"
                onClick={() => {
                  this.onChangePhoto(stu, index)
                }}
              >
                change photo
              </button>
            </div>
          </td>
          <td className={this.studentNameStyle(stu.name)}>{stu.name}</td>
          <td>{this.getPhone(stu.phone)}</td>
          <td>{stu.address.city}</td>
        </tr>
      )
    })
  }

  onChangePhoto = (stu, index) => {
    // console.log(stu)
    // console.log(index)

    var stuArr = this.state.students
    stuArr[0].photo = 'https://picsum.photos/id/22/200/150'

    this.setState({ students: stuArr })
  }
}

export default Student
