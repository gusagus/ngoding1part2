//event link
$('.page-scroll').on('click', function(e) {
  //ambil isi href
  var isi = $(this).attr('href');

  //lalu tangkap elemen section
  var elemenisi = $(isi);
  //memulai animate scroll

 $('html, body').animate({
   scrollTop: elemenisi.offset().top - 50
 }, 600, 'swing');

  e.preventDefault();
});
