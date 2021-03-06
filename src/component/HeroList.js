import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroList extends Component {
  render(){
    return(
      <div>
        <h4> Your Hero Squad</h4>
        <ul className="list-group">
          {this.props.heroes.map(hero => {
            return (
              <li key={ hero.id } className="list-group-item">
                <div className="list-item">
                  { hero.name }
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
