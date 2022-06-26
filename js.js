var game = document.getElementById("game");
var array = [0,1,2,3,4,5,6,7,8,9];
var num= 0;
var num = 0; 
var r = Math.random();
var rf = Math.floor((r*2)+1);
var ob ={
    x:0,
    y:0
};

                if (localStorage.getItem("xo") == null){
                        ob.x=0;
                        ob.y=0;
                }else {
                    ob = JSON.parse(localStorage.getItem("xo"));
                }

(function main(){
    display();
    addButton();
}())
function display() {
        document.getElementById("cildX").innerHTML=`<p>${ob.x}</p>`;    
        document.getElementById("cildY").innerHTML=`<p>${ob.y}</p>`;
}
function addButton(){
    var str= "";
    for (var i = 1 ; i<=9;i++){
     str += ` 
            <span class="xo" id="xo"><button class="" id="xo${i}" onclick="clicks(${i})"></button></span>
     
     `
    }
    game.innerHTML = str;
}

function clicks(index) {

    var xo = document.getElementById("xo"+index);
      
            if ( rf == 1) {
              
                if (xo.className == ""){
                    xo.className="x";
                    rf++;
                    array[index]="x";
                    
                    checkX("x");
                }
                
            }else {
                
                if (xo.className == ""){
                    xo.className="y";
                    rf--;
                    array[index]="y";
                    checkX("y");
                }
            }
}

function checkX(st) {

    if(array[1]==st&&array[2]==st&&array[3]==st||
       array[4]==st&&array[5]==st&&array[6]==st||
       array[7]==st&&array[8]==st&&array[9]==st||
       array[1]==st&&array[4]==st&&array[7]==st||
       array[2]==st&&array[5]==st&&array[8]==st||
       array[3]==st&&array[6]==st&&array[9]==st||
       array[3]==st&&array[5]==st&&array[7]==st||
       array[1]==st&&array[5]==st&&array[9]==st
       )
    {
       addButton();
       array = [0,1,2,3,4,5,6,7,8,9];
       result(st);

    }
        
}

function  result(st){
        console.log(st);
            
                if (st == "x"){
                    var num=0;
                    ob.x++;
                    document.getElementById("cildX").innerHTML=`<p>${ob.x}</p>`;
                }else {
                    ob.y++;
                    document.getElementById("cildY").innerHTML=`<p>${ob.y}</p>`;
                   
                }
              localStorage.setItem("xo",JSON.stringify(ob));

      
}