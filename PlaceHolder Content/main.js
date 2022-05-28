const container = document.querySelector(".container");
console.log(container);
setTimeout(() => {
  container.innerHTML = `      <img
 src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
 alt=""
 />
 <div class="textbox">
 <div class="header">
   <h3>Lorem ipsum dolor sit amet</h3>
   <span
     >Lehenderit! Ullam quod libero nemo eum mollitia assunimi cumque,
     esse fuga harum doloribus.</span
   >
 </div>
 <div class="bottom">
   <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
   <div class="text">
     <h3>John Doe</h3>
     <span>Oct 08,2020</span>
   </div>
 </div>
 </div>`;
}, 2500);
