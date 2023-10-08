let crsr = document.querySelector('#cursor')
let blr = document.querySelector('#cursor-blr')
document.addEventListener('mousemove', function(dets) {
    crsr.style.left = dets.x+'px'
    crsr.style.top = dets.y+'px'
    blr.style.left = dets.x-250+'px'
    blr.style.top = dets.y-250+'px'


})

let h4all = document.querySelectorAll('#nav h4')

h4all.forEach(function(i) {
    i.addEventListener('mouseenter', function(){
        crsr.style.scale = 3
        crsr.style.border = '1px solid #fff'
        crsr.style.backgroundColor = 'transparent'
    })
    i.addEventListener('mouseleave', function(){
        crsr.style.scale = 1
        crsr.style.border = '0px solid #91B508'
        crsr.style.backgroundColor = '#91B508'
    })

})

gsap.to('#nav', {
    backgroundColor : '#000',
    duration: 0.5,
    height: '110px',
    scrollTrigger : {
        trigger: '#nav',
        scroller: 'body',
        markers: true,
        start:'top -10%',
        end:'top -11%',
        scrub:1
    }

})

gsap.to('#main', {
    backgroundColor: '#000',
    scrollTrigger:{
        trigger: '#main',
        scroller: 'body',
        markers: true,
        start: 'top -25%',
        end: 'top -70%',
        scrub: 2
    }
})

gsap.from('#colon1', {
    y:-70,
    x: -70,
    scrollTrigger:{
        trigger:'#colon1',
        scroller:'body',
        start:'top 55%',
        end:'top 45%',
        scrub:4
    }
})

gsap.from('#colon2', {
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:'#colon1',
        scroller:'body',
        start:'top 55%',
        end:'top 45%',
        scrub:4
    }
})

gsap.from('#page4 h1', {
    y:50,
    scrollTrigger:{
        trigger:'#page4 h1',
        scroller:'body',
        start:'top 75%',
        end:'top 70%',
        scrub:3
    }
})