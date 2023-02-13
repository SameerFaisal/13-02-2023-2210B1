// Hours:Minutes:Seconds

// var today=new Date()
// let hours=today.getHours()
// let min=today.getMinutes()
// let sec=today.getSeconds()


// if(hours>=12){
//     document.write(hours+" : "+min+" : "+sec+" PM")
// }
// else if(hours<12){
//     document.write(hours+" : "+min+" : "+sec+" AM")
// }

var today=new Date()
let day=today.getDay()
let date=today.getDate()
let month=today.getMonth()
let year=today.getFullYear()




switch(day){
    case 0:
        document.write("Sunday"+",")
        break
    case 1:
        document.write("Monday"+",")
        break
    case 2:
        document.write("Tuesday"+",")
        break
}

document.write(date+" ")

if(month===0){
    document.write("January"+",")
}
else if(month===1){
    document.write("February"+",")
}
else if(month===2){
    document.write("March"+",")
}

document.write(year)