function loadJson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")

      callback(xhr.responseText);

  };
  xhr.send();
}
loadJson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
career(data.career);
education(data.education);
skills(data.skills);
})

var ct=document.querySelector(".child2");
function career(careerInfo)
{

var heading=document.createElement("h2");
heading.textContent="Career Objective";
ct.appendChild(heading);//Heading

var ul=document.createElement("hr");//creating Hr tag
  heading.appendChild(ul);//underline

  var cp=document.createElement("p");
  cp.textContent=careerInfo.info;//career Objective
   ct.appendChild(cp);
}

function education(edu)
{
  var heading=document.createElement("h2");
  heading.textContent="Educational Qualification";
  ct.appendChild(heading);//Heading

  var ul=document.createElement("hr");//creating Hr tag
    heading.appendChild(ul);//underline

var tab=document.createElement("table");
ct.appendChild(tab);
console.log(tab);
tab.border="2";
tab.cellpadding=10;
tab.cellspacing=10;
var tr1="<tr><td>Name Of Qualification</td><td>Name Of the Institution</td><td>Duration</td><td>Percentage</td></tr>";
var tr2="";
for (var i = 0; i < edu.length; i++){

    tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].date+"</td><td>"+edu[i].per+"</td></tr>";
console.log(edu[i]);
}

tab.innerHTML=tr1+tr2;

}

function skills(skill)
{
  var heading=document.createElement("h2");
  heading.textContent="Professional-Skills";
  ct.appendChild(heading);//Heading

  var hr=document.createElement("hr");//creating Hr tag
    heading.appendChild(hr);//underline
for(var i=0;i<skill.length;i++)
{
  var tit=document.createElement("h3");
  tit.textContent=skill[i].title;
  ct.appendChild(tit);
  var ul=document.createElement("ul");

  ct.appendChild(ul);
  for(var j=0;j<skill[i].info.length;j++)
  {
    var li=document.createElement("li");
    li.textContent=skill[i].info[j];
    ul.appendChild(li);

  }
}

}
