import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'https://alexis-sousa.ml/bd'

 export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }


    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        //axios.get(`${URL}?sort=-createdAt`)
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
            //.then(resp => this.setState({...this.state, description: '', list: resp.data}))
            //.then(resp => console.log(resp.data))
    }


    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        //console.log('Add')
        //console.log(this)
        //console.log(this.state.description)

        //wtf? porque é que a const tem que ser = description
        // porque ele está a fazer um post do nome da variável (para inserir no campo key) e o valor dela (para inserir no campo value)
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
            //.then(resp => console.log('Funcionou!'))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    handleRemove(todotata) {
        axios.delete(`${URL}/${todotata._id}`)
            .then(resp => this.refresh(this.state.description))
            //.then(resp => this.refresh())
    }

    handleMarkAsDone(todotata) {
        axios.put(`${URL}/${todotata._id}`, { ...todotata, done: true})
            .then(resp => this.refresh(this.state.description))
            //.then(resp => this.refresh())
    }

    handleMarkAsPending(todotata) {
        axios.put(`${URL}/${todotata._id}`, { ...todotata, done: false})
            .then(resp => this.refresh(this.state.description))
            //.then(resp => this.refresh())
    }

     render() {
         return (
             <div>
                 <h1>Todo Menu</h1>
                 <PageHeader name='Tasks' small='in here'></PageHeader>
                 <TodoForm 
                        descriptitions={this.state.description} 
                        handleChange={this.handleChange} 
                        handleAdd={this.handleAdd} 
                        handleSearch={this.handleSearch} 
                        handleClear={this.handleClear}/>
                 <TodoList 
                        list={this.state.list} 
                        handleMarkAsDone={this.handleMarkAsDone} 
                        handleMarkAsPending={this.handleMarkAsPending}
                        handleRemove={this.handleRemove}/>
             </div>
         )
     }
 }