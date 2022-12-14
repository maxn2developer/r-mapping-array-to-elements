import React from 'react';

export default class ArrayMapping extends React.Component {
  constructor() {
    super();
    // this is the data as in app component and using mapping
    //any object convert to array b/c we map arrray method and simple and fast code
    //to exucute the millions of array list.
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 11,
        },
        {
          name: 'Frank',
          id: 12,
        },
        {
          name: 'Jacky',
          id: 13,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {/* <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1> */}
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}> {monster.name}</h1>;
        })}
      </div>
      //   <div>
      //   {/* <h1>{this.state.monster1.name}</h1>
      //   <h1>{this.state.monster2.name}</h1>
      //   <h1>{this.state.monster3.name}</h1> */}
      //   {this.state.monsters.map((monster) => {
      //    render extra div (node)
      //     return <div><h1> {monster.name}</h1></div>;
      //   })}
      // </div>
    );
  }
}
