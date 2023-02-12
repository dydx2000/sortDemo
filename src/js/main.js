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


// tableDom.append(contentLine)

// ['name', 'age', 'income']







