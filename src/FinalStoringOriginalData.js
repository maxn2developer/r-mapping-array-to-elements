import React from 'react';
import './FinalStoringOriginalData.css';

export default class FinalStoringOriginalData extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchfield);

    });
    return (
      <div className='FinalStoringOriginalData'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            const searchfield = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchfield };
            });
          }}
        />
        <h5>FinalStoringOriginalData Class Component</h5>
        {
          filteredMonsters.map((monster) => {
            return (
              <div>
                <div key={monster.id}>
                  <h1><span>{monster.id}. </span>{monster.name}</h1>
                  <h5><a href='#'>{monster.website}</a></h5>
                </div>
              </div>
            );
          })
        }

      </div>
    );
  }
}
// this dynamic smart search.