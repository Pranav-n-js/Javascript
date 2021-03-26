import React from 'react'
export const Greet = (props) => {
  return (
    <div>
    <h1> Hello {props.name}</h1>
    {/*here the pops is the object*/}
    {/*props  is readonly cant change (immutable)*/}
      {props.children}
      </div>
  )
}
export const Hello = () => {
  return React.createElement('div',null,React.createElement('h1',null,"Using React Create Element"))
  {/*In create Element method we required parameters*/}
  {/*1st parameter is tag which we want to use (here Div)*/}
  {/*2nd Properties (here null) eg {id:"id",className:"classname "}*/}
  {/* in properties class is replaced with className and for is replaced with htmlFor*/}
  {/*3rd children (in here <h1> msg </h1> cant be passed it will be shown as a string )*/}
}
export const TwoPlayer = (props) => {
  const {player1, player2}=props
  return (React.createElement('div',{id:"2Player"},React.createElement("p",{id:"player1"},{props.player1})))
}
