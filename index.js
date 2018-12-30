function ratingStar(event){
    var checkValue = document.querySelectorAll("input");
    var checkStar = document.querySelectorAll("label");
    var cnt = 0; //how many stars chosen

    for(var i=0; i<checkValue.length; i++){  //number of stars = 5
        if(checkValue[i]==event.target){     //number of stars chosen
            cnt = i+1;
        }
    }

    for(var i=0; i<cnt; i++){
        checkStar[i].className = "rated";
    }
    
    for(var i=cnt; i<checkValue.length; i++){
        checkStar[i].className = "check"
    }

}