import * as userDom from "@/js/userDom"
import { UserInfoStructure, User, createUser } from '@/js/user'
import sortBy from 'sort-by';
// import { contentLine ,tabContent} from "./";
import { tabContent, readList, tableName, tableAge, tableIncome } from "./tableDom";




export const userInfoList = [
  {
    name: "Amy",
    age: 28,
    income: 20000
  },
  {
    name: "Vincent",
    age: 25,
    income: 10000
  },
  {
    name: "Peter",
    age: 22,
    income: 30000
  }
]

userDom.userInfoSubmit.addEventListener('click', () => {

  // 清除排序数字
  tableAge.textContent = "Age"
  tableName.textContent = "Name"
  tableIncome.textContent = "Income"
  
  // console.log('submit');
  const userInfo = new UserInfoStructure()
  // console.log(userInfo)

  userInfo.name = userDom.userNameInput.value

  userInfo.age = +userDom.userAgeInput.value
  userInfo.income = +userDom.userIncomeInput.value

  if (userInfo.name == "" || userInfo.income == "") {
    console.log("no name or no Income is inputted, stopped");
    return
  }
  console.log(userInfo);

  const user = createUser(userInfo)
  if (user instanceof User) {

    userInfoList.push({ ...userInfo })
    console.log(userInfoList);
    // console.log(sort(["name", "age"]));
    console.log(sort(["name", "income",]));
  } else {
    console.error(user.errorInfo);
  }

  // console.log(userInfoList);

  //点击完成清除输入框
  userDom.userNameInput.value = ''
  userDom.userAgeInput.value = ''
  userDom.userAgeCur.textContent = ''
  userDom.userIncomeInput.value = ''

  readList(userInfoList)

  // userInfoList.forEach(element => {
  //   const contentLine = document.createElement('div')
  //   contentLine.className = 'content_line'
  //   const nameValue = document.createElement('span')
  //   nameValue.textContent = element.name

  //   const ageValue = document.createElement('span')
  //   ageValue.textContent = element.age

  //   const incomeValue = document.createElement('span')
  //   incomeValue.textContent = element.income

  //   contentLine.appendChild(nameValue)
  //   contentLine.appendChild(ageValue)
  //   contentLine.appendChild(incomeValue)

  //   tabContent.appendChild(contentLine)

  // })


})

userDom.userAgeInput.addEventListener('click', () => {
  console.log(userDom.userAgeInput.value);
  userDom.userAgeCur.textContent = userDom.userAgeInput.value
})

// 公共变量
let Totalcounter = 0
let sortparam = []

let Namecounter = 0
let orgName = tableName.textContent
let nameflag = false

let Agecounter = 0
let ageflag = false
let orgAge = tableAge.textContent


let Incomecounter = 0
let incomeflag = false
let orgIncome = tableIncome.textContent


tableName.addEventListener('click', () => {
  tableName.textContent = orgName

  if (nameflag) {
    console.log("this button has been clicked.");

    let templist = [] 
    console.log("当前列表: " + sortparam);

    for (let i=0;i<sortparam.length;i++){
      if(sortparam[i]!='name'){
        templist.push(sortparam[i])
      }
    }
    sortparam = templist;
    console.log("去除后的列表: "+sortparam); 

    // console.log(res);
    // console.log(sortparam);
    nameflag = false
    
  } else {
    sortparam.push('name')
    nameflag =true
  }

  writenum()
  sort(sortparam)
  // sort (['age' ,'income '])

  // let nameindex = sortparam.indexOf("name")
  // if (nameindex == -1) {
  //   console.log("into name index if, 排序列表中无此参数.");    
  //   console.log(sortparam);
  //   console.log("nameindex: " + nameindex); 
  // } else {
  //   console.log("into name index else")    
  //   console.log(sortparam)
  //   console.log("nameindex: " + nameindex)
  //   Namecounter = nameindex+1
  //   tableName.textContent = "Name " + Namecounter
  // }

  // let ageindex = sortparam.indexOf("age")
  // if (ageindex == -1) {
  //   console.log("into name index if, 排序列表中无此参数.");  
  //   console.log(sortparam);
  //   console.log("ageindex: " + ageindex);
  // } else {
  //   console.log("into age index else")    
  //   console.log(sortparam)
  //   console.log("ageindex: " + ageindex)
  //   Agecounter = ageindex+1
  //   tableAge.textContent = "Age " + Agecounter
  // }

  // let incomeindex = sortparam.indexOf("income")
  // if (incomeindex == -1) {
  //   console.log("into incomeindex index if");    
  //   console.log(sortparam);
  //   console.log("incomeindex: " + incomeindex);
  // } else {
  //   console.log("into income index else")    
  //   console.log(sortparam)
  //   console.log("incomeindex: " + incomeindex)
  //   Incomecounter = incomeindex+1
  //   tableIncome.textContent = "Income " + Incomecounter
  // }



  readList(userInfoList)
  console.log("===========================================");
  console.log("===========================================");
  // console.log();
})


tableAge.addEventListener('click', () => {
  tableAge.textContent = orgAge

  if (ageflag) {
    console.log("this button has been clicked.");
    // let res =sortparam.pop('age')  //方法有问题
    let templist = [] 
    console.log("当前列表: " + sortparam);

    for (let i=0;i<sortparam.length;i++){
      if(sortparam[i]!='age'){
        templist.push(sortparam[i])
      }
    }
    sortparam = templist;
    console.log("去除后的列表: "+sortparam); 
    // console.log(res);
    // console.log(sortparam);
    ageflag = false

  } else {
    sortparam.push('age')
    // console.log(res);
    ageflag = true
  }

  writenum()
  sort(sortparam)

  // let ageindex = sortparam.indexOf("age")
  // if (ageindex == -1) {
  //   console.log("into name index if, 排序列表中无此参数.");  
  //   console.log(sortparam);
  //   console.log("ageindex: " + ageindex);
  // } else {
  //   console.log("into age index else")    
  //   console.log(sortparam)
  //   console.log("ageindex: " + ageindex)
  //   Agecounter = ageindex+1
  //   tableAge.textContent = "Age " + Agecounter
  // }

  // let nameindex = sortparam.indexOf("name")
  // if (nameindex == -1) {
  //   console.log("into name index if, 排序列表中无此参数.");    
  //   console.log(sortparam);
  //   console.log("nameindex: " + nameindex); 
  // } else {
  //   console.log("into name index else")    
  //   console.log(sortparam)
  //   console.log("nameindex: " + nameindex)
  //   Namecounter = nameindex+1
  //   tableName.textContent = "Name " + Namecounter
  // }
  

  // let incomeindex = sortparam.indexOf("income")
  // if (incomeindex == -1) {
  //   console.log("into incomeindex index if");    
  //   console.log(sortparam);
  //   console.log("incomeindex: " + incomeindex);
  // } else {
  //   console.log("into income index else")    
  //   console.log(sortparam)
  //   console.log("incomeindex: " + incomeindex)
  //   Incomecounter = incomeindex+1
  //   tableIncome.textContent = "Income " + Incomecounter
  // }

  readList(userInfoList)
  // console.log();
  console.log("===========================================");
  console.log("===========================================");

})

tableIncome.addEventListener('click', () => {
  tableIncome.textContent = orgIncome

  if (incomeflag) {
    console.log("this button has been clicked.");

    let templist = [] 
    console.log("当前列表: " + sortparam);

    for (let i=0;i<sortparam.length;i++){
      if(sortparam[i]!='income'){
        templist.push(sortparam[i])
      }
    }
    sortparam = templist;
    console.log("去除后的列表: "+sortparam); 

    // console.log(res);
    // console.log(sortparam);
    incomeflag = false

  } else {
    sortparam.push('income')
    incomeflag = true
  }

  writenum()
  sort(sortparam)

  // let incomeindex = sortparam.indexOf("income")
  // if (incomeindex == -1) {
  //   console.log("into incomeindex index if");    
  //   console.log(sortparam);
  //   console.log("incomeindex: " + incomeindex);
  // } else {
  //   console.log("into income index else")    
  //   console.log(sortparam)
  //   console.log("incomeindex: " + incomeindex)
  //   Incomecounter = incomeindex+1
  //   tableIncome.textContent = "Income " + Incomecounter
  // }

  // let nameindex = sortparam.indexOf("name")
  // if (nameindex == -1) {
  //   console.log("into name index if, 排序列表中无此参数.");    
  //   console.log(sortparam);
  //   console.log("nameindex: " + nameindex); 
  // } else {
  //   console.log("into name index else")    
  //   console.log(sortparam)
  //   console.log("nameindex: " + nameindex)
  //   Namecounter = nameindex+1
  //   tableName.textContent = "Name " + Namecounter
  // }

  // let ageindex = sortparam.indexOf("age")
  // if (ageindex == -1) {
  //   console.log("into name index if, 排序列表中无此参数.");  
  //   console.log(sortparam);
  //   console.log("ageindex: " + ageindex);
  // } else {
  //   console.log("into age index else")    
  //   console.log(sortparam)
  //   console.log("ageindex: " + ageindex)
  //   Agecounter = ageindex+1
  //   tableAge.textContent = "Age " + Agecounter
  // }



  readList(userInfoList)
  console.log("===========================================");
  console.log("===========================================");

})




function sort(attr) {
  return userInfoList.sort(sortBy(...attr))
}

function writenum(){
  let nameindex = sortparam.indexOf("name")
  if (nameindex == -1) {
    console.log("into name index if, 排序列表中无此参数.");    
    console.log(sortparam);
    console.log("nameindex: " + nameindex); 
  } else {
    console.log("into name index else")    
    console.log(sortparam)
    console.log("nameindex: " + nameindex)
    Namecounter = nameindex+1
    tableName.textContent = "Name " + Namecounter
  }

  let ageindex = sortparam.indexOf("age")
  if (ageindex == -1) {
    console.log("into name index if, 排序列表中无此参数.");  
    console.log(sortparam);
    console.log("ageindex: " + ageindex);
  } else {
    console.log("into age index else")    
    console.log(sortparam)
    console.log("ageindex: " + ageindex)
    Agecounter = ageindex+1
    tableAge.textContent = "Age " + Agecounter
  }

  let incomeindex = sortparam.indexOf("income")
  if (incomeindex == -1) {
    console.log("into incomeindex index if");    
    console.log(sortparam);
    console.log("incomeindex: " + incomeindex);
  } else {
    console.log("into income index else")    
    console.log(sortparam)
    console.log("incomeindex: " + incomeindex)
    Incomecounter = incomeindex+1
    tableIncome.textContent = "Income " + Incomecounter
  }

}