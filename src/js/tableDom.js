import { userInfoDom } from '@/js/userDom'
import { userInfoList } from '@/js/sort'

export const tableDom = document.createElement('div')


tableDom.id = 'table_dom'
// tableDom.height = userInfoDom.clientHeight
// console.log(userInfoDom.clientHeight);
// console.log(userInfoDom.offsetHeight);
// console.log(userInfoDom.scrollHeight);

// tableDom.style.height=userInfoDom

export const tableTitle = document.createElement('div')
export const tableName = document.createElement('span')
export const tableAge = document.createElement('span')
export const tableIncome = document.createElement('span')

tableTitle.id = 'table_title'

tableName.textContent = "Name"
tableName.id = 'table_name'

tableAge.textContent = "Age"
tableAge.id = 'table_age'

tableIncome.textContent = "Income"
tableIncome.id = 'table_income'

tableDom.appendChild(tableTitle)
tableTitle.appendChild(tableName)
tableTitle.appendChild(tableAge)
tableTitle.appendChild(tableIncome)

export const tabContent = document.createElement('div')
tabContent.id = 'table_content'
tableDom.appendChild(tabContent)


// console.log(userInfoList);

export function readList(userInfoList) {
  tabContent.innerHTML = ''

  // console.log("hello userinfolist");
  userInfoList.forEach(element => {
    const contentLine = document.createElement('div')
    contentLine.className = 'content_line'
    const nameValue = document.createElement('span')
    nameValue.textContent = element.name

    const ageValue = document.createElement('span')
    ageValue.textContent = element.age

    const incomeValue = document.createElement('span')
    incomeValue.textContent = element.income

    contentLine.appendChild(nameValue)
    contentLine.appendChild(ageValue)
    contentLine.appendChild(incomeValue)

    tabContent.appendChild(contentLine)

  });

}

// readList(userInfoList)


// export const contentLine = document.createElement('div')
// contentLine.className='content_line'
// export const nameValue = document.createElement('span')
// nameValue.textContent='peter'

// export const ageValue = document.createElement('span')
// ageValue.textContent = '12'

// export const incomeValue = document.createElement('span')
// incomeValue.textContent ='3232'

// contentLine.appendChild(nameValue)
// contentLine.appendChild(ageValue)
// contentLine.appendChild(incomeValue)

// tabContent.appendChild(contentLine)
