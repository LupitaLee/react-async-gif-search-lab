import React from 'react'




class  GifSearch extends React.Component{

    state = {
        query: ""
    }
handleSubmit= (e) => {
   
    e.preventDefault()
    this.props.fetchGIFs(this.state.query)
}

  render(){
    console.log(this.props)
      return(
       
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Search</label>
                <input type="text" value={this.state.query}
                onChange={event => this.setState({query: event.target.value})}
                ></input>
            </form>

        </div>
      )
      
  }
}

export default GifSearch
