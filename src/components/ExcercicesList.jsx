import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Excercise = props => (
    <tr>
        <td>{props.excercise.username}</td>
        <td>{props.excercise.description}</td>
        <td>{props.excercise.duration}</td>
        <td>{props.excercise.date.substring(0, 10)}</td>
         
        <td>
            <Link to={"/edit/"+props.excercise._id}>edit</Link> | <a href='#' onClick={() => props.deleteExcercise(props.excercise._id)}>Delete</a>
        </td>
    </tr>
)

export class ExcercicesList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            excercicesArray: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/excercises/')
            .then(response => {
                this.setState({ excercicesArray: response.data });
            })
            .catch(err => { console.log(err) });
    }

    deleteExcercise = id => {
        axios.delete('http://localhost:5000/excercises/'+id)
            .then(res => console.log(res.data));

        this.setState({
            excercicesArray: this.state.excercicesArray.filter(element => element._id !== id)
        })

    }

    excerciseList() {
        return this.state.excercicesArray.map(ce => {
            return <Excercise excercise={ce} deleteExcercise={this.deleteExcercise} key={ce._id} />;
        })
    }


    render() {
        return (
            <div>
                <h3>Logged Excercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.excerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExcercicesList;
