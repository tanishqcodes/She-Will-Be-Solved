x = document.getElementById('numbers');
// newnum='';
html = '';
// sum=0;
// op=''
x.addEventListener('click', function (e) {
    if (e.target.innerText != '=' && e.target.innerText != '<-' && e.target.innerText != 'C') {
        val = e.target.innerText;
        document.getElementById('appear').children[0].innerText = html + `${val}`;
        html = html + `${val}`;
        newnum=newnum+`${val}`;
    }
    else if(e.target.innerText=='C'){
        html='';
        document.getElementById('appear').children[0].innerText='';
        document.getElementById('result').children[0].innerText='';
    }
    else if(e.target.innerText=='='){
        document.getElementById('result').children[0].innerText=eval(html)
    }
    else if(e.target.innerText=='<-'){
        html=html.substr(0,html.length-1);
        document.getElementById('appear').children[0].innerText=html;
    }
    /*
    I WASTED MY HALF AN HOUR IN WRITTING THIS CODE FOR THE CALCULATION TO BE PERFORMED BU THE CALCI THEN CAME TO KNOW(I GOOGLED IT)THAT THERE IS AN FUNCTION IN JAVASCRIPT CALLED AS EVAL WHICH CALCULATES FOR THE WHOLE STRING !
    for (let i = 0; i < html.length; i++) {
        if(html[i]!='+'&& html[i]!='*' && html[i]!='-' && html[i]!='/'){
            newnum=newnum+html[i];
        }
        else if((html[i]=='+'|| html[i]=='*' || html[i]=='-' || html[i]=='/')&&(op=='')){
            // sum=sum+parseInt(newnum)
            newnum='';
            op=html[i];
        }
        else if((html[i]=='+'|| html[i]=='*' || html[i]=='-' || html[i]=='/')&&(op!='')){
            if()
        }
    }*/

})