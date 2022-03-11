const form = document.querySelector(".form-container1");
const form2 = document.querySelector(".form-container2");
const five_min = document.querySelector(".five");
const ten_min = document.querySelector(".ten");
const fifteen_min = document.querySelector(".fifteen");
const thirty_min = document.querySelector(".thirty");
const custom = document.querySelector(".custom");
const submit = document.querySelector(".submit");

const ok=document.querySelector(".ok");
const ok1=document.querySelector(".ok1");
const cancel=document.querySelector(".rejected1");
const cancel2=document.querySelector(".rejected2");

const popUpContainer=document.querySelector(".pop-up-container");
const popUpContainer2=document.querySelector(".pop-up-container2");
const popUpContainer3=document.querySelector(".pop-up-container3");
const suggested=document.querySelector(".suggested");

const addPageBox=document.getElementById("addPageBox");
const navigate=document.querySelector(".navigate");

const webList=["facebook","reddit","youtube","netflix","instagram"]
localStorage.setItem("sites", JSON.stringify(webList));

var timer;

webList.map((item)=>{
  suggested.innerHTML+=`<li id=${item} data-value=${item} class="webpage">
                      <div class="icon">
                        <img src="icons/${item}.png" />
                      </div>
                      <p>${item}</p>
                    </li> `
})
function addPageBoxClick()
{
  popUpContainer3.classList.toggle("show");
  const addSite=document.getElementById("addSite");
  addSite.addEventListener("click", ()=>{
    let siteLabel=document.getElementById("siteLabel").value;
    let siteLink=document.getElementById("siteLink").value;

    var existingEntries=JSON.parse(localStorage.getItem("siteList"))
    if(existingEntries==null) existingEntries=[];

    var entry={
      id:Date.now(),
      link:siteLink,
      label:siteLabel
    };
    localStorage.setItem("entry",JSON.stringify(entry))
    existingEntries.push(entry);
    localStorage.setItem("siteList",JSON.stringify(existingEntries));

    addSiteFunction(siteLink,siteLabel);
    document.getElementById("siteLabel").value="";
    document.getElementById("siteLink").value="";
    popUpContainer3.classList.remove("show");
  })
}
document.onload=displayAllSites();
function displayAllSites()
{
  const parsedData=JSON.parse(localStorage.getItem("siteList"));
  parsedData?.forEach(element=>{
    console.log(element);
    var siteName=element.link;
    var siteLabel=element.label;
    if(siteName!=="" && siteLabel!=="")
    {
      imgSrc=`https://logo.clearbit.com/${siteName}.com`
      //siteLabel="Hello"
      var html_snippet=`<li class='webpage' id='${siteName.toLowerCase()}' data-value=${siteName.toLowerCase()}>
                          <div class="icon">
                            <img id='${siteName}' src="${imgSrc}">
                          </div>
                          <p>${siteLabel}</p>
                        </li>`;
        suggested.insertAdjacentHTML('beforeend',html_snippet);
    }
    displaySites();
  })
}
function addSiteFunction(siteName,siteLabel)
{
  console.log(siteName,siteLabel)
  imgSrc = 'https://logo.clearbit.com/' + siteName.toLowerCase();
  if(siteName!=="" && siteLabel!=="")
  {
    imgSrc=`https://logo.clearbit.com/${siteName}.com`
    //siteLabel="Hello"
    var html_snippet=`<li class='webpage' id='${siteName.toLowerCase()}' data-value=${siteName.toLowerCase()}>
                        <div class="icon">
                          <img id='${siteName}' src="${imgSrc}">
                        </div>
                        <p>${siteLabel}</p>
                      </li>`;
      suggested.insertAdjacentHTML('beforeend',html_snippet);
  }
  displaySites();
}

five_min.addEventListener("click", (e) => {
  e.preventDefault();
  timer = 5;
  console.log(timer);
  form2.classList.add("show");
  navigate.classList.add("show");
  initTimer(timer);
  displaySites();
});

ten_min.addEventListener("click", (e) => {
  e.preventDefault();
  timer = 10;
  console.log(timer);
  form2.classList.add("show");
  navigate.classList.add("show");
  initTimer(timer);
  displaySites();
});

fifteen_min.addEventListener("click", (e) => {
  e.preventDefault();
  timer = 15;
  console.log(timer);
  form2.classList.add("show");
  navigate.classList.add("show");
  initTimer(timer);
  displaySites();
});

thirty_min.addEventListener("click", (e) => {
  e.preventDefault();
  timer = 30;
  console.log(timer);
  form2.classList.add("show");
  navigate.classList.add("show");
  initTimer(timer);
  displaySites();
});

custom.addEventListener("click",(e)=>{
    e.preventDefault();
    popUpContainer2.classList.toggle("show");
    navigate.classList.add("show");
    displaySites();
})
cancel.addEventListener("click", (e)=>{
    e.preventDefault();
    popUpContainer2.classList.toggle("show");    
})
cancel2.addEventListener("click", (e)=>{
    e.preventDefault();
    popUpContainer3.classList.toggle("show");    
})
/*
ok.addEventListener('click',()=>{
  console.log("closed")
})*/
ok1.addEventListener("click",(e)=>{
    e.preventDefault();
    const inpTime=document.querySelector(".timeInp").value;
    timer=inpTime;
    console.log(timer)
    form2.classList.add("show");
    initTimer(timer);
    popUpContainer2.classList.toggle("show");    
})

function initTimer(timer) {
  const timeMins = timer;
  let timeSec = timeMins * 60;
  const countdownEl = document.getElementById("countdown");

  const timemin = Math.floor(timeSec / 60);
  const timesec = Math.floor(timeSec % 60);
  countdownEl.innerHTML = `${timemin < 10 ? "0" : ""}${timemin}:${
    timesec < 10 ? "0" : ""
  }${timesec}`;
}

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const webs = document.querySelector(".inputWebsite").value;
    let time = timer * 60 * 1000;
    let myWindow;
    if (webs!=="") {
         myWindow = window.open(
        `https://www.${webs}.com`,
        "fullscreen=true"
        );
    } 
    setTimeout(()=> {
        myWindow.close();
        form2.reset();
    }, time);
    countDown();
});

function displaySites(){
  const webpageList=document.querySelectorAll(".webpage");
  console.log(webpageList)
  webpageList.forEach(element=>{
    element.addEventListener('click',(e)=>{
      let time=timer*60*1000;
      website=element.getAttribute('data-value');
      console.log(website,time);
      const myWindow = window.open(
        `https://www.${website}.com`,
        "fullscreen=true"
    );
    setTimeout(function () {
        myWindow.close();
    }, time);
    countDown();
    })
  })
}
/*
const facebook=document.querySelector("#facebook");
facebook.addEventListener("click", ()=>{

    let time = timer * 60 * 1000;
    website="facebook"   
    const myWindow = window.open(
        `https://www.${website}.com`,
        "fullscreen=true"
    );
    setTimeout(function () {
        myWindow.close();
    }, time);
    countDown()
});

*/
function countDown(){       
     //COUNT DOWN
     const timeMins = timer;
     let timeSec = timeMins * 60;
     const countdownEl = document.getElementById("countdown");
     displayTime(timeSec*1000);
 
     const countDown = setInterval(() => {
         timeSec--;
         displayTime(timeSec);
         if (timeSec <= 0 || timeSec < 1) {
         endTime();
         clearInterval(countDown);
         }
     }, 1000);
 
     function displayTime(second) {
         const min = Math.floor(second / 60);
         const sec = Math.floor(second % 60);
         countdownEl.innerHTML = `${min < 10 ? "0" : ""}${min}:${
         sec < 10 ? "0" : ""
         }${sec}`;
     }
     function endTime() {
         form2.classList.remove("show");
         navigate.classList.remove("show");
         popUpContainer.classList.add("show");
         ok.addEventListener("click",()=>{
            popUpContainer.classList.remove("show");  
         })
     }
}
