import React from 'react'
import {Person} from './Person.js'
import './Styles.css'
export function NameList(){
  const names = ['Bruce', 'Tony', 'Peter']
  const nameList=names.map((name,index) => <h2 key={index}>{name}</h2>) //use index as key only when you dont have unique id, list is static, list is not filtered or reordered
  return (
    <div>
      {nameList}
    </div>
  )
}
export function PersonList() {
  const person=[
    {
      id:1,
      name:"Pooja",
      job:"React"
    },
    {
      id:2,
      name:"rajeev",
      job:"Web"
    }
  ]
  const personList=person.map(obj => <Person obj={obj} key={obj.id} />)
  return (
    <div className={`comp font-style`}>
      {personList}
    </div>
  )
}
