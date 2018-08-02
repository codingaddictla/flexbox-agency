$(document).ready(function () {
 // preloader
 $('.preloader').fadeOut();
 // navBtn
 $('.navBtn').click(function () {
  $('.navBtn').toggleClass('navBtn--action')
  $('.nav').toggleClass('nav--show')
 })
 // video switch
 $('.video__switch-container').click(function () {
  const value = $('.video__switch-btn').hasClass('btnSlide')
  if (value) {
   $('.video__switch-btn').removeClass('btnSlide')
   $('#video').get(0).play()
  }
  else {
   $('.video__switch-btn').addClass('btnSlide')
   $('#video').get(0).pause()
  }
 });
 // magnific popup
 $('#projects__center').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
   // options for gallery
   enabled: true
  }
  // other options
 });



 // accordion
 $('.accordion__btn').click(function () {
  $('.accordion__btn').not(this).removeClass('rotate')
  $('.accordion__btn').not(this).parent().next().slideUp()


  // if ($(this).hasClass('rotate')) {
  //  $(this).removeClass('rotate');
  //  $(this).parent().next().slideUp()
  // }
  // else {
  //  $(this).addClass('rotate');
  //  $(this).parent().next().slideDown()
  // }
  $(this).toggleClass('rotate');
  $(this).parent().next().slideToggle();
 });
 // team members
 (function () {
  let data = [
   {
    id: 0,
    name: 'john doe',
    job: 'developer',
    text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
    favorites: ['eat', 'drink', 'sleep'],
    img: 'img/team-1.jpg'
   },
   {
    id: 1,
    name: 'tom orange',
    job: 'designer',
    text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
    favorites: ['paint', 'draw', 'run'],
    img: 'img/team-2.jpg'
   },
   {
    id: 2,
    name: 'albert cupid',
    job: 'accountant',
    text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
    favorites: ['math', 'physics', 'more math'],
    img: 'img/team-3.jpg'
   },
   {
    id: 4,
    name: 'dog hugo',
    job: 'intern',
    text: `A biography, or simply bio, is a detailed description of a person's life.It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.`,
    favorites: ['bark', 'run', 'bite'],
    img: 'img/team-4.jpg'
   },

  ]
  // click event
  $('.team__single-img').click(function () {
   $('.team__single-img').not(this).removeClass('active');
   $(this).addClass('active');
   let id = $(this).attr('data-id')
   // console.log(id);
   // change the name
   $('.team__member-name').text(data[id].name);
   // change the job
   $('.team__member-job').text(data[id].job);
   // change the text
   $('.team__member-text').text(data[id].text);
   // change likes 
   $('.team__member-single-favorite-text').each(function (index) {
    $(this).text(data[id].favorites[index]);

   })

   // change photo
   $('.team__info-img').attr('src', data[id].img)
  })
 })();
 // owl carousel
 $('.owl-carousel').owlCarousel({
  loop: true,
  smartSpeed: 2000,
  margin: 10,
  nav: true,
  responsive: {
   0: {
    items: 1
   },
   600: {
    items: 1
   },
   1000: {
    items: 1
   }
  }
 })
 //#################### change icons
 $(".owl-prev").html('<div><i class="fa fa-chevron-left"></i></div>');
 $(".owl-next").html('<div><i class="fa fa-chevron-right"></i></div>');
 //################ flip cards
 $('.flipBtn').click(function () {

  $(this).parents('.card-side').addClass('flip-card')
  console.log(this);

 })
 $('.flipBackBtn').click(function () {
  $(this).parents('.card-side').removeClass('flip-card')
  console.log(this);

 })

})
