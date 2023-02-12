import '@/css/style.scss'
// import "@/js/utils"

import { isString ,isNumber } from '@/js/utils'

import { userInfoDom } from '@/js/userDom'
import {userInfoList} from '@/js/sort'


// import '@/js/createTable'

import { UserInfoStructure,User } from '@/js/user'
import { tableDom, readList} from './tableDom'

const app = document.getElementById('app')


app.appendChild(userInfoDom)
app.appendChild(tableDom)


readList(userInfoList)
console.log(userInfoDom.offsetHeight);
let user_height = userInfoDom.offsetHeight;
// tableDom.offsetHeigh = userInfoDom.offsetHeight
// tableDom.offsetHeight = "180px";
tableDom.style.height = user_height +"px";


// tableDom.append(contentLine)

// ['name', 'age', 'income']







