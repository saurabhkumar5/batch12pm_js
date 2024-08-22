

//   let a = 10;

//   console.log(`sohan ${a}`);



// https://jsonplaceholder.typicode.com/users

    fetch('https://jsonplaceholder.typicode.com/users')
       .then((value)=>{
            // console.log(value)
            return value.json()
       })
       .then((a)=>{
             
        a.map((data)=>{
           
              const div = document.createElement('div')
             div.innerHTML = `
                  <h1>name ${data.name} email:${data.email}</h1> 
                  
             `
          
             const z  =  document.getElementById('api');
                  z.appendChild(div)

        })

        
       })