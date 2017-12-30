import React, { Component } from 'react';
import { connect } from 'react-redux';


class CharacterList extends Component{
  render(){
    return(
      <div>
        <h2>Characters</h2>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('state', state);
  return {};
}

export default connect(mapStateToProps, null)(CharacterList);
