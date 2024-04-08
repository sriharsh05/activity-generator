// DEMO Activity APP
import generateActivity from './generateActivity'
import './styles/main.scss'
import activity from './assets/activity.svg'

const activityImg = document.getElementById('activityImg')
activityImg.src = activity

const activityBtn = document.getElementById('activityBtn')
activityBtn.addEventListener('click', generateActivity)

generateActivity()
