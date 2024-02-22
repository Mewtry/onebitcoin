const fsn = require('fs')
const name = process.argv[2]
/*@ts-ignore*/
function setZero(num) {
  return num >= 10 ? String(num) : '0' + num
}

const now = new Date()
const sufix = !name 
  ? setZero(now.getDate()) +
    setZero(now.getMonth() + 1) +
    now.getFullYear() +
    setZero(now.getHours()) +
    setZero(now.getMinutes()) +
    setZero(now.getSeconds())
  : name

if (!fsn.existsSync('release')) {
  fsn.mkdirSync('release')
}

fsn.copyFileSync(
  'android/app/build/outputs/apk/release/app-release.apk',
  'release/OneBitCode-' + sufix + '-1.0' + '.apk',
)