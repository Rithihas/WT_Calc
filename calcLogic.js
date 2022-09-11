let evaluated = false;

function testBtn( x )
{
    if(x == '=')
    {
        document.getElementById("text").value = eval(document.getElementById("text").value);
        evaluated = true;
    }
    else if(x == 'clear')
    {
        document.getElementById("text").value = "";
        evaluated  =false;
    }
    else 
    {  if(evaluated == false)
       document.getElementById("text").value += x;
       else 
       {
          document.getElementById("text").value = x;
          evaluated = false;
       }
    }

    
}