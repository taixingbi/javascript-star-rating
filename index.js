function ratingStar(event){
    var checkValue = document.querySelectorAll("input");
    var checkStar = document.querySelectorAll("label");
    var checkCount = 0; //how many stars chosen


    for(var i=0; i<checkValue.length; i++){  //number of stars = 5
        if(checkValue[i]==event.target){     //number of stars chosen
            checkCount = i+1;
        }
    }

    for(var j=0; j<checkCount; j++){
        checkStar[j].className = "rated";
    }
    
    for(var k=checkCount; k<checkValue.length; k++){
        checkStar[k].className = "check"
    }

}