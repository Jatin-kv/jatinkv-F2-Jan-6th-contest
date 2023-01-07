/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(finding_profession_using_map)
  function finding_profession_using_map(ids) {
    if (ids.profession === "developer") {
      console.log(ids);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(findprofession)
  function findprofession(ids) {
    if (ids.profession === "developer") {
      console.log(ids);
    }
  }
}

function addData() {
  //Write your code here
  let add = { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(add);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  arr.filter(rem_admin)
  function rem_admin(ids) {
    if (ids.profession !== "admin") {
      console.log(ids)
    }
  }
}


function concatenateArray() {
  //Write your code here
  let addobj = [
    { id: 5, name: "vihu", age: "21", profession: "developer" },
    { id: 6, name: "bibhu", age: "22", profession: "developer" },
    { id: 7, name: "ashwini", age: "20", profession: "intern" },
  ]
  let concating = arr.concat(addobj)
  console.log(concating)
}
