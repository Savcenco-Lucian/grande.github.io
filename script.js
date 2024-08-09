/*NAVBAR*/

function openSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

window.addEventListener("scroll", function() {
  const navbar = document.querySelector("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

/*DROPDOWN*/

let dropwdown = document.querySelector('.arrow');
dropwdown.onclick = function(){
  dropwdown.classList.toggle('active');
}

let dropwdown2 = document.querySelector('.arrow2');
dropwdown2.onclick = function(){
  dropwdown2.classList.toggle('active');
}

let dropwdown3 = document.querySelector('.arrow3');
dropwdown3.onclick = function(){
  dropwdown3.classList.toggle('active');
}

/*TYPEWRITER*/
const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "80-140";
            }, 0);
            setTimeout(() => {
                text.textContent = "80-140";
            }, 8000);
            setTimeout(() => {
                text.textContent = "80-140";
            }, 12000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);

