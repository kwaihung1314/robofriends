import React, { Component } from 'react'
import CardList from './CardList'
import SearchBar from './SearchBar'
import Scroll from './Scroll'
// import { robots } from './robot'

class RoboApp extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchValue: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchValue: event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({
          robots: users
        })
      })
  }

  render() {
    const { robots, searchValue } =  this.state
    let content = !robots.length? 
    (<span className="loading dib"></span>) :
    (
      <div>
        <SearchBar 
          searchValue={searchValue}
          onSearchChange={this.onSearchChange}
          />
        <Scroll>
          <CardList 
            robotList={robots}
            filterValue={searchValue}
            />
        </Scroll>
      </div>
    )      
  
    return (
      <div className="pa3 tc">
        <h1 className="title f1 navy">Robofriends</h1>
          {content}
      </div>
    )
  }
}

export default RoboApp