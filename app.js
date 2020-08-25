// Need to select 3 things:
//Select class"about" / Then target all the buttons class"tab-btn" / Then get all the articles.
//All articles have class"content"

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// Attach an eventLister for the class"about" which is the parent container to check out what is being clicked on
about.addEventListener("click", function (e) {
  //console.log(e.target);
  const id = e.target.dataset.id;
  if(id){
    // remove active from other buttons and add active to button that was clicked
    btns.forEach(function(btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // Hide other articles
    articles.forEach(function(article){
      article.classList.remove('active')
    })
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
