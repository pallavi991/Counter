let count = 0;


const value = document.querySelector('#value')
const btns = document.querySelectorAll(".btn")
console.log(btns)

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      const styles = e.currentTarget.classList
      if(styles.contains("decrease")){
          count--;
          value.style.color= 'red';
      }
      else if(styles.contains("increase")){
          count++;
          value.style.color = 'blue'
      }
      else{
          count = 0;
          value.style.color = "grey"
      }
    //   if(count>0){
    //       value.style.color  = "red";
    //   }
    //   if(count<0){
    //       value.style.color= "blue"
    //   }
    //   if(count == 0){
    //       value.style.color = "black";
    //   }
      value.textContent = count;
    })
  })
  
  