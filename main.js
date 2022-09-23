var count =89;
let coDataBAse = ""
let nimname = "xdasturchi"

// function ClickMe(el){
//     document.getElementById('number').innerHTML = count++;
// }

let ber = true

function ClickMe(el){
    if(ber == true){
        ber = false
        document.getElementById('heart').style.cssText = ' display: none;'
        document.getElementById('img_like').style.cssText = ' display: block;'
        document.getElementById('number').innerHTML = count = 89;
        document.getElementById('heart').style.cssText = '  position: absolute;'
        document.getElementById("img_like").style.marginLeft = '-8px'
    }else if ( ber == false ){
        ber = true
        count == 89
        document.getElementById('heart').style.cssText = ' display: block;'
        document.getElementById('img_like').style.cssText = ' display: none;'
        document.getElementById('number').innerHTML = count = 88;
    }

}


function clickme(el){
    if(ber == true){
        ber = false
        document.getElementById('heart').style.cssText = ' display: none;'
        document.getElementById('img_like').style.cssText = ' display: block;'
        document.getElementById('number').innerHTML = count = 89;
        document.getElementById('heart').style.cssText = '  position: absolute;'
        document.getElementById("img_like").style.marginLeft = '-8px'
    }else if ( ber == false ){
        ber = true
        count == 89
        document.getElementById('heart').style.cssText = ' display: block;'
        document.getElementById('img_like').style.cssText = ' display: none;'
        document.getElementById('number').innerHTML = count = 88;
    }

}


// let inp = true 
// function Coment(){
//     if ( inp == true ){
//         inp = false
//         document.getElementById('resive_coment').style.cssText = ' display: block;'
//         document.getElementById('no_metter').style.cssText = ' display: none;'
//         document.getElementById('val_com').innerHTML =  resive_coment.value;
       
//     } else if (inp == false){
//         inp = true
//         // document.getElementById('resive_coment').style.cssText = ' display: none;'
//         // document.getElementById('no_metter').style.cssText = ' display: block;'
//     }
// }

// function Click(){
//     if(inp == true){
//         inp = false
//         
//     } else if( inp = false ){
//         inp == true
//         document.getElementById('resive_coment').style.cssText = ' display: none;'
//         document.getElementById('no_metter').style.cssText = ' display: block;'
//     }
//     }

function davaysend(){
    coDataBAse += '<h4>'+nimname+':</h4>';
    coDataBAse += '<h5>'+resive_coment.value+'</h5>';
    document.getElementById("commenttextku").innerHTML = coDataBAse
}
