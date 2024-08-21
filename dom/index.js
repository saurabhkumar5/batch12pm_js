// 1. getElementById
         
            //   const h1  = document.getElementById('header');
            //   console.log(h1)

            // const btn = document.getElementById('btn')
            // console.log(btn)


//    2. getElementByTagName   

                // const h1 = document.getElementsByTagName('h1')
                //      console.log(h1)

        // 3. getElementByClassname
        
        //   const h1  = document.getElementsByClassName('momo');
        //      console.log(h1)
       
        
    // 4. by querySelector
         
            //   const btn  = document.querySelector('.momo')
            //   console.log(btn)


            // manipulation

        //   const h1  =  document.getElementById('header')
        //      console.log(h1)
        //       h1.style.backgroundColor = 'red'
        //       h1.style.color = "blue"
        //     //   h1.style.height = '500px'
        //     //   h1.style.width = '300px'
        //     h1.style.textAlign = 'center';
        //     h1.innerHTML = "anu rayat"
        //     h1.classList.add('simran')


        //    const header  = document.createElement('h1')
        //    header.innerHTML = "most welcome hello"
        //    console.log(header)

        //    const div = document.getElementById('kullu')
        //         div.appendChild(header)



            // const h1  = document.getElementById('header')
            // const btn = document.getElementById('btn')
             
            //      let a = true

            //   btn.addEventListener('click',()=>{
            //         //   h1.style.backgroundColor = 'red'
            //         //   h1.style.textAlign = 'center'
            //         //   h1.style.height = '100px'


            //         if(a){
            //                h1.style.backgroundColor = 'red'
            //           h1.style.textAlign = 'center'
            //           h1.style.height = '100px'

            //         }else{
            //                h1.style.backgroundColor = ''
            //           h1.style.textAlign = ''
            //           h1.style.height = ''
            //         }

            //         a = !a;
            //   })

        //       btn.addEventListener('click',()=>{
        //         h1.style.backgroundColor = 'yellow'
        //         h1.style.textAlign = 'center'
        //         // h1.style.height = '100px'
        // })



            const bulb = document.getElementById('photo');
            const btn = document.getElementById('btn')
               btn.addEventListener('click',()=>{
                  
                   if(bulb.src.match('off')){
                         bulb.src = './bulbon.jpg'
                   }else{
                        bulb.src = './bulboff.jpg'
                   }

               })