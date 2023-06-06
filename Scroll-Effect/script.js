const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(eachLink){
    eachLink.addEventListener('click',smoothScroll());
});

function smoothScroll(event){
    event.preventDefault();

    const targetID = event.target.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    const orginalTop =  Math.floor(targetSection.getBoundingClientRect().top)-200;
    window.scrollBy({top: originalTop, left:0 ,behavior:'smooth'});
    console.log(originalTop);
}

window.addEventListener('load',function(){
    const posts =document.querySelectorAll('section');
    let postTops={};
    let pageTop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;
    console.log(posts[0].getBoundingClientRect().top + window.pageYOffset);

    posts.forEach(function(post){
        postTops.push(Math.floor(post.getBoundingClientRect().top+ window.pageYOffset))
    });
    //console.log(postTops);

    //$(window).on('scroll',function(){});
    this.window.addEventListener('scroll',function(){
        pagetop=window.pageYOffset;
        if(pagetop >postTops[counter]){
            counter++;
            console.log('scrolling down '+{counter});
        } else if ( counter >1 && pagetop[counter-1]){
            counter--;
            console.log('scrolling up'+{counter});
        }

        if(counter!=prevCounter){
            navLinks.forEach(function(eachlink){
                eachLink.removeAttribute('class');
            });

            const thisLink = document.querySelector('nav ul li:nth-child(${counter}) a');
            thisLink.className = 'selected';
            prevCounter = counter;
            
        }
    });
});