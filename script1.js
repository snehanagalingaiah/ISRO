let url="https://isro.vercel.app/api/spacecrafts";
let spacecraftData=document.getElementById("spacecraftData");
let i=1;
spacecraftData.innerHTML="";

const getSpacecraftData= async ()=>{
    let isroData=await fetch(url);
    let isroDataJson= await isroData.json();
    console.log(isroDataJson);
    return isroDataJson;
}

const buildTable = (spacecraft, i) => {
  spacecraftData.innerHTML +=`
    <tr>
    <td>${i+1}</td>   
    <td>${spacecraft.name}</td> 
    </tr>`
 }

let isroSpacecraftData= getSpacecraftData().then((isroSpacecraftData)=>{
  return (isroSpacecraftData.spacecrafts);
 
}).then((spacecrafts)=>{spacecrafts.forEach((spacecraft, i)=>{
    buildTable(spacecraft, i);
})}).catch(err => windows.alert("Unable to fetch data"))



