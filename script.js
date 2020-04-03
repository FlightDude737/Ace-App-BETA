fetch('http://api.ipstack.com/check?access_key=0639bd367002f6981e9d4833899307fd').then((response) => {
  console.log(respose.json())
}).catch((error) => {
  console.log("404")
})
