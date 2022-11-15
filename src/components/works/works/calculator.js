var screen= document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');
    
    for (item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;

            if(btntext=='*')
            {
                btntext= '*';
            }

            if(btntext== '/')
            {
                btntext= '/';
            }
            screen.value+=btntext;
        });
    }
    
    function fact()
    {
        var  i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i
        }

        i=i-1
        screen.value=f
        
    }
    

    function backspc(){
        screen.value=screen.value.substr(0, screen.value.length-1)
    }