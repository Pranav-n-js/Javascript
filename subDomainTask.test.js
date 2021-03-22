
const subDomain=require('./subDomainTask.js')
it("working",() => {

  expect(subDomain("working.js.com")).toMatch("Output: working");

})
it("working",() => {
expect(subDomain("a.js.com")).toMatch("Output: a")

})
it("working",() => {
  expect(subDomain("js.com")).toMatch("NO SUBDOMAIN")
})
it("working",() => {
  expect(subDomain("http://xy.js.com")).toMatch("Output: xy")
})
it("working",() => {
  expect(subDomain("https://js.com")).toMatch("NO SUBDOMAIN")
})
it("working",() => {
  expect(subDomain("https://.com")).toMatch("NO SUBDOMAIN")
})
