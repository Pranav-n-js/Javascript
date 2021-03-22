const mutationFormula=require('./task1')
it('works',()=>{
  expect(mutationFormula({name:"Pranav",place:"Manglore"},{name:"Ganesh"})).toMatchObject ({name:'Ganesh', place:'Manglore'})
})

it('works',()=>{
  expect(mutationFormula({name:"pranav",place:"manglore",address:{street:"AKG",taluk:"kundapur",place:"manglore"}},{place:"kundapur",street:"akg"})).toMatchObject({name:"pranav",place:"kundapur",address:{street:"akg",taluk:"kundapur",place:"kundapur"}})
})

it('works',()=>{
  expect(mutationFormula({name:"pranav",place:"manglore",address:{street:"AKG",taluk:"kundapur",place:"manglore"}},{name:"Ganesh",place:"kotara",street:"1st lane",taluk:"manglore"})).toMatchObject({name:"Ganesh",place:"kotara",address:{street:"1st lane",taluk:"manglore",place:"kotara"}})
})
it('works',()=>{
  expect(mutationFormula({name:"pranav",place:"manglore",address:{street:"AKG",taluk:"kundapur",caddress:{home:"aaa",street:"AKG",place:"Kundapur",taluk:"kundapur"}}},{name:"Ganesh",place:"kotara",street:"1st lane",taluk:"manglore",home:"Ganesh"})).toMatchObject({name:"Ganesh",place:"kotara",address:{street:"1st lane",taluk:"manglore",caddress:{home:"Ganesh",street:"1st lane",place:"kotara",taluk:"manglore"}}})
})
