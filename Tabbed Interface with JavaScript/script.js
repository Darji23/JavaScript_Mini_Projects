var tabs=document.querySelectorAll('#tabs >ul > li > a');

for( var i=0;i<tabs.length;i++){
    tabs[i].addEventListener('click',selectTab);
}

function selectTab(event){
    event.preventDefault();

    for (var i=0;i<tabs.length;i++){
        tabs[i].removeAttribute('class');
    }
    event.target.className = 'active';

    var thisTab = event.target.getAttribute('href');
    var thisContent = document.querySelector(thisTab);

    var oldContent = document.querySelector('.visible');
    oldContent.className = 'visuallyhidden';
    oldContent.addEventListener('transitionend',function(){
        oldContent.className='hidden';
        thisContent.className='visible visuallyhidden';
        setTimeout(function(){
            thisContent.classList.remove('visuallyhidden');
        },20);
    });
}