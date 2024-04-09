let countDown = (callback)=>{
       console.log('10')

       setTimeout((callback)=>{
       console.log('9')
        },1000);

        setTimeout((callback)=>{
            console.log('8')
        }, 2000);

        setTimeout((callback)=>{
           console.log('7')
         }, 3000);

        setTimeout((callback)=>{
            console.log('6')
         }, 4000); 

        setTimeout((callback)=>{
            console.log('5')
        }, 5000);  

        setTimeout((callback)=>{
            console.log('4') 
        }, 6000); 

        setTimeout((callback)=>{
            console.log('3')    
        }, 7000); 

        setTimeout((callback)=>{
            console.log('2')   
        }, 8000);

        setTimeout((callback)=>{
            console.log('1')   
        }, 9000);  
        
        setTimeout(()=>{
            console.log('Happy Independence Day..!')
        },10000)
       
    }
    countDown(function(){
        const container =document.querySelector('.container');
        container.appendChild(countDown);
    });
        
   
   
   
       
    
    
   

