
//**************************** love button *************************************** */
var icons = document.getElementsByClassName("fa-heart");
for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", goRed);
  }
function goRed(e){
var icon = e.target;
if(icon.style.color =="red" ){
    icon.style.color ="#FFFFFF";
} 
else icon.style.color ="red" ; 
}

//***************************** basket icon  **************************************** */
var icons2 = document.getElementById("shopicon");

 icons2.addEventListener("click", executeF);
 function executeF(e){
    goRed2(e);
    affiche(e);
 }
 function goRed2(e){
    var icon = e.target;
    if( icon.style.color =="black" ){
        icon.style.color ="red" ;
    } 
    else icon.style.color ="black" ; 
    }

function affiche (e){
    var priceList = document.getElementById("basketProducts");
    if (priceList.style.display == "none"){
        priceList.style.display = "flex";
    }
    else priceList.style.display = "none";
}
//*************************** +- butons*********************************** */


    

//********************************* adding to the basket list *************************************************************** */

const btn = document.getElementsByClassName("btn");
//console.log(btn);
for (let i = 0; i <  btn.length; i++) {
    btn[i].addEventListener("click", events);
  }
  
  function events(e){

 
      var parg = document.querySelector('#basketProducts :nth-child(1)');
     // console.log(parg);
         parg.style.display = "none";
//*************** p2
         var pelem = e.target.parentElement.parentElement;// div ta3 page
         //console.log(pelem);
         //getteing all the element from page 
        var img = pelem.children[0].cloneNode(true);// clonenode pour copier 
        img.setAttribute("style", " width:60px;");
        var title = pelem.children[1].cloneNode(true);
        title .setAttribute("style", " font-size:10px;");
        var price = pelem.children[2].cloneNode(true);
       

        //  console.log(img);
        //  console.log(title);
        // console.log(price_number);
        //  console.log(typeof(price_number));
//creating the table****
         var tab = document.getElementById("tab");
        
         var tr = document.createElement("tr");
          

         var tdphoto = document.createElement("td");
         tdphoto.setAttribute("class", "imge");
         tdphoto.setAttribute("style", "text-align: center;");
         tdphoto.appendChild(img);
         tdphoto.appendChild(title);
         
         
         var tdprice = document.createElement("td");
         tdprice.setAttribute("class", "price");
         tdprice.setAttribute("style", "text-align: center;");
         tdprice.appendChild(price);
        
        
         var tdquantity= document.createElement("td");
         tdquantity.setAttribute("class", "quantity");
         /*******div feha bouton +- */
         var tdquantity_div = document.createElement("div");
         tdquantity_div.setAttribute("class", "quantity-div");
         tdquantity_div.setAttribute("style", "position : relative ; width :100px;   height: 53px; top :20px; left:55px;");
        

     //********************** creation ++ et -- button   */
     var buttonplus = document.createElement("input");
     buttonplus.setAttribute("class", "plusmoins");
     buttonplus.setAttribute("type", "number");
     buttonplus.setAttribute("min", "0");

     
    // buttonplus.setAttribute("onchange", "adding()");
     buttonplus.setAttribute("style", " height: 20px;  width:30px;");
     
     buttonplus.value = 0;
     //console.log(buttonplus);
    
     var buttonplusbtn = document.createElement("button");
     buttonplusbtn.setAttribute("class", "btn+");
     buttonplusbtn.innerHTML = '+';
     var buttonminsbtn = document.createElement("button");
     buttonminsbtn.setAttribute("class", "btn-");
     buttonminsbtn.innerHTML = '-';
     
     

     
     //CREATE DELETE BUTTON 
     var tddeleteButton= document.createElement("td");// td ta3 bouton 
       var deleteButton= document.createElement("button");//CREATE DELETE BUTTON 
       deleteButton.innerHTML = 'DELETE';
      deleteButton.setAttribute("class", "delete");
      deleteButton.setAttribute("style", "position : relative ; width :70px;   height: 30px; left:26px; ");
      tddeleteButton.appendChild(deleteButton);
     /****************** append child */4
           // dive -+
     tdquantity_div.appendChild(buttonplusbtn);
     tdquantity_div.appendChild(buttonplus);
     tdquantity_div.appendChild(buttonminsbtn);
     tdquantity.appendChild(tdquantity_div);

// the tr ta3 table kol
     tr.appendChild(tdphoto);
     tr.appendChild(tdprice);
     tr.appendChild(tdquantity);
     tr.appendChild(tddeleteButton);
     //console.log(tr);
     tab.appendChild(tr);
    // console.log(tab);
   
  

//****************************** suming ******************* */
   var sumButton = document.createElement("label");
   var sumtext = document.createElement("p");
   var actionbutton = document.createElement("button");
   sumButton.innerHTML='sum';
   
   sumButton.setAttribute("style", " text-align: center;  position: absolute;bottom: 15px; left:500px ;");
   sumtext.setAttribute("style", " text-align: center;  position: absolute;bottom: 0px; left:570px; margin-top:20px;");
   sumtext.setAttribute("id","sum")
   document.getElementById("basketProducts").appendChild(sumButton);
   document.getElementById("basketProducts").appendChild(sumtext);
  

var price = document.getElementsByClassName('price') ;
var coff = document.getElementsByClassName('plusmoins');
var minbtns = document.getElementsByClassName("");



console.log(coff)



////********************************* the delete button function ********************************************************** */

var delButton = document.getElementsByClassName("delete");
console.log(delButton)
for (let i = 0; i < delButton.length; i++) {
  delButton[i].addEventListener("click", del);
}
function del(e){
  let row = e.target.parentElement.parentElement;
  if (row) {
    row.remove();
    console.log("ge")
  }
}
//++++++++++++++++++++++++++++++++++++++++++++++++
var plusbtns = document.getElementsByClassName("btn+");
console.log(plusbtns)
for (let i = 0; i < plusbtns.length; i++) {
  plusbtns[i].addEventListener("click", clgg);
}
function clgg(e){
  let row = e.target.parentElement.parentElement;
  let inputEl = row.querySelector('.plusmoins');
  inputEl.value++;
  console.log(row)
  console.log(inputEl)

  var price = document.getElementsByClassName('price') ;
var coff = document.getElementsByClassName('plusmoins');
for ( var i =0 ;i<coff.length ; i++ ){
   
  
  console.log("hi");
  var price = document.getElementsByClassName('price') ;
  var coff = document.getElementsByClassName('plusmoins');
  var summ = 0;
  for ( var i =0 ;i<price.length;i++ ){
        console.log(coff[i].value );
        summ += price[i].firstChild.innerHTML.substr(0,2) * coff[i].value ;
       }
       document.getElementById("sum").innerHTML= summ; 



}

}

    
  //------------------------------------
 

  var plusbtns = document.getElementsByClassName("btn-");
  console.log(plusbtns)
  for (let i = 0; i < plusbtns.length; i++) {
    plusbtns[i].addEventListener("click", clgg2);
  }
  function clgg2(e){
    let row = e.target.parentElement.parentElement;
    let inputEl = row.querySelector('.plusmoins');
    if(inputEl.value>0){
      inputEl.value--;
    }
  
    console.log(row)
    console.log(inputEl)
  
    var price = document.getElementsByClassName('price') ;
  var coff = document.getElementsByClassName('plusmoins');
  for ( var i =0 ;i<coff.length ; i++ ){
     
    
    console.log("hi");
    var price = document.getElementsByClassName('price') ;
    var coff = document.getElementsByClassName('plusmoins');
    var summ = 0;
    for ( var i =0 ;i<price.length;i++ ){
          console.log(coff[i].value );
          summ += price[i].firstChild.innerHTML.substr(0,2) * coff[i].value ;
         }
         document.getElementById("sum").innerHTML= summ; 
  
  
  
  }
  
  }
  

}



  





 







  
 

 
