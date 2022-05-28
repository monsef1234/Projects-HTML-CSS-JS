const usersData = [
  {
    paragraph:
      "This guy is an amazing frontend developer that delivered the tast exactly how  we need it, do your self a favor and hire him, you will not be disappointed by the work delivered, He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
    userName: "june cha",
    userProfession: "software engineer",
  },
  {
    paragraph:
      "This guy is a hard worker, Communication was also very good with him and he was very responsive all the time, somthing not easy to find in many freelancers, We'll definitely repeat with him",
    img: "https://randomuser.me/api/portraits/men/58.jpg",
    userName: "lida niskenen",
    userProfession: "data entry",
  },
  {
    paragraph:
      "This guy does everything he can to get the job done and dont right, This is the second time I've hired him, and I'll hire him again in the future.",
    img: "https://randomuser.me/api/portraits/women/13.jpg",
    userName: "renee sims",
    userProfession: "receptionist",
  },
  {
    paragraph:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline, And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and i totally recommend him. Thanks again!",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    userName: "jonathan nunfiez",
    userProfession: "graphic designer",
  },
];
const userPara = document.getElementById("user-para");
const userName = document.getElementById("user-name");
const userImg = document.getElementById("user-img");
const userProfession = document.getElementById("user-profession");
let counter = 0;
const loadTestimonial = () => {
  userPara.innerHTML = usersData[counter].paragraph;
  userImg.src = usersData[counter].img;
  userName.innerHTML = usersData[counter].userName;
  userProfession.innerHTML = usersData[counter].userProfession;
  setInterval(() => {
    if (counter < usersData.length - 1) {
      counter++;
      userPara.innerHTML = usersData[counter].paragraph;
      userImg.src = usersData[counter].img;
      userName.innerHTML = usersData[counter].userName;
      userProfession.innerHTML = usersData[counter].userProfession;
    } else {
      counter = 0;
      userPara.innerHTML = usersData[counter].paragraph;
      userImg.src = usersData[counter].img;
      userName.innerHTML = usersData[counter].userName;
      userProfession.innerHTML = usersData[counter].userProfession;
    }
  }, 10000);
};
loadTestimonial();
