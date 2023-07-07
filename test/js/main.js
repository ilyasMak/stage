(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    // new WOW().init();
    
    
    // Dropdown on mouse hover
    // const $dropdown = $(".dropdown");
    // const $dropdownToggle = $(".dropdown-toggle");
    // const $dropdownMenu = $(".dropdown-menu");
    // const showClass = "show";
    
    // $(window).on("load resize", function() {
    //     if (this.matchMedia("(min-width: 992px)").matches) {
    //         $dropdown.hover(
    //         function() {
    //             const $this = $(this);
    //             $this.addClass(showClass);
    //             $this.find($dropdownToggle).attr("aria-expanded", "true");
    //             $this.find($dropdownMenu).addClass(showClass);
    //         },
    //         function() {
    //             const $this = $(this);
    //             $this.removeClass(showClass);
    //             $this.find($dropdownToggle).attr("aria-expanded", "false");
    //             $this.find($dropdownMenu).removeClass(showClass);
    //         }
    //         );
    //     } else {
    //         $dropdown.off("mouseenter mouseleave");
    //     }
    // });
    
    
    // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });


    // Modal Video
    // $(document).ready(function () {
    //     var $videoSrc;
    //     $('.btn-play').click(function () {
    //         $videoSrc = $(this).data("src");
    //     });
    //     console.log($videoSrc);

    //     $('#videoModal').on('shown.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //     })

    //     $('#videoModal').on('hide.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc);
    //     })
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

//changement de langue p1
function changePlaceholder(elementId, newPlaceholder) {
    var element = document.getElementById(elementId);
    if (element) {
      element.placeholder = newPlaceholder;
    } else {
      console.error("Element with ID '" + elementId + "' not found.");
    }
  }
  
var compt=0 ; 
function changeLanguage() {
    compt++ ;
    var select = document.getElementById("language-select");
    var ac = document.getElementById("ac");
    var ht = document.getElementById("ht");
    var cn = document.getElementById("cn");
    var bv = document.getElementById("bv");
    var des = document.getElementById("des");
    var tvl = document.getElementById("tvl");
    var cre=document.getElementById("cre");
    var rvi=document.getElementById("rvi");
    var mdm=document.getElementById("mdm");
    var neev=document.getElementById("neev");
    var cy=document.getElementById("cy");
    var cu=document.getElementById("cu");
    var au=document.getElementById("au");
    var pp=document.getElementById("pp");
    var tc=document.getElementById("tc");
    var sup=document.getElementById("sup");
    var fer=document.getElementById("fer");
    var sfs=document.getElementById("sfs");
    var sg=document.getElementById("sg");
    var ep=document.getElementById("ep");
    var gym=document.getElementById("gym");
    var foot=document.getElementById("foot");
    var rts=document.getElementById("rts");
    var selectedLanguage = select.value;
    var selectElement = document.getElementById("language-select");
    var flag=document.getElementById("drap");
    if(compt % 2==0 ){
        selectElement.selectedIndex = 0;
        selectedLanguage = "fr";
       
        flag.src="usa.PNG";
    }
    else if(compt % 2==1){
        selectElement.selectedIndex = 1;
        selectedLanguage = "en";
        flag.src="france.PNG";
      

    }

    if (selectedLanguage === "fr") {
      
        ac.innerHTML = ' <li id="ac" ><a href="#top">Accueil</a></li>';
        ht.innerHTML = '<li id="ht" ><a href="#hotels">Hôtels</a></li>';
        rts.innerHTML=' <li id="rts" ><a href="#tmcontact">Réactions</a></li>';
        cre.textContent='Commencer la recherche';
        bv.textContent = "Bienvenue aux voyageurs";
        des.textContent = "Découvrez Easy Stay";
        tvl.innerHTML='Trouvez votre logement idéal dans la ville de votre choix grâce à Easy Stay, le site de recherche en ligne <a rel="nofollow" href="#hotels" target="blank">d hôtels</a> le plus simple et efficace. Que vous voyagiez pour affaires ou pour le plaisir, nous sommes là pour vous aider à trouver le lieu de séjour parfait.'  ;       
        mdm.innerHTML='les meilleurs <span class="text-primary text-uppercase" id="hotels"> destinations</span> du mois';
        neev.innerHTML=' Notre équipe dévouée est à votre disposition pour vous aider à trouver l hôtel idéal, que ce soit pour un voyage d affaires, des vacances en famille ou une escapade romantique.';
        cy.textContent='entreprise';
        cu.textContent='Contactez-nous';
        pp.textContent='politique de confidentialité';
        tc.textContent='Termes et conditions';
        au.textContent='à propos de nous';
        sup.textContent='soutien';
        fer.textContent='Alimentation & Restauration';
        sfs.textContent='Spa et remise en forme';
       sg.textContent='Sports et jeux';
       ep.textContent='Événement et fête';
       gym.textContent='GYM & Yoga';
       changePlaceholder("rvi", "rechercher la ville");
       foot.innerHTML='<a class="border-bottom" href="#">EasyStay</a>, Tous droits réservés Conçu par<a class="border-bottom" href="https://artiweb.ma/">Artiweb</a>'
      
       //rvi.innerText='<input type="text" name="search" id="rvi" placeholder="Rechercher une ville" class="cool-input">'
       
    } else if (selectedLanguage === "en" ||compt % 2==1) {
       
        ac.innerHTML = ' <li id="ac" ><a href="#top">Home</a></li>';
        ht.innerHTML = '<li id="ht" ><a href="#hotels">Hotels</a></li>';
        rts.innerHTML=' <li id="rts" ><a href="#tmcontact">FeedBacks</a></li>';
        bv.textContent = "Travelers welcome";
        des.textContent = "Discover Easy Stay";
        tvl.innerHTML='Find your ideal accommodation in the city of your choice thanks to Easy Stay, the simplest and most efficient online <a rel="nofollow" href="#hotels" target="blank">hotels</a> search site. Whether you re traveling for business or pleasure, we re here to help you find the perfect place to stay ';
        cre.innerHTML='Start searching';
       mdm.innerHTML='The best <span class="text-primary text-uppercase" id="hotels"> destinations</span> of the month';
       neev.innerHTML='Our dedicated team is on hand to help you find the perfect hotel, whether it s for a business trip, a family vacation or a romantic getaway.'
       //rvi.innerText='<input type="text" name="search" id="rvi" placeholder="search the city" class="cool-input">';
       changePlaceholder("rvi", "search for the city");
       cy.textContent='company';
       cu.textContent='Contact us';
       pp.textContent='Privacy Policy';
       tc.textContent='Terms & Condition';
       au.textContent='about us';
       sup.textContent='support';
       fer.textContent='Food & Restaurant';
        sfs.textContent='Spa & Fitness';
        sg.textContent='Sports & Gaming';
        ep.textContent='Event & Party';
        gym.textContent='GYM & Yoga';
        foot.innerHTML='<a class="border-bottom" href="#">EasyStay</a>, All Right Reserved Designed By <a class="border-bottom" href="https://artiweb.ma/">Artiweb</a>'
       
    }
}

//changement de langue p2
// function changeLanguage() {
//     var select = document.getElementById("language-select");
//     var sh = document.getElementById("sh");
//     var ahp =document.getElementById("ahp");
//     var vd =document.getElementById("vd");
//     var vo=document.getElementById("vo");
//     var vi =document.getElementById("vi");
//     var vu =document.getElementById("vu");
//     var hol=document.getElementById("hol");
//     var sug=document.getElementById("sug");
//     var tmc=document.getElementById("tmc");
//     var ha=document.getElementById("ha");
//     var ho=document.getElementById("ho");
//     var hi=document.getElementById("hi");
   
 
//     var send=document.getElementById("send");
//     var selectedLanguage = select.value;

//     if (selectedLanguage === "fr") {
//         acc.innerHTML=' <li ><a href="ES.html" id="acc">Accueil</a></li>';
//         hol.innerHTML=' <li ><a href="#hotel" id="hol">Hôtel</a></li>';
//         sug.innerHTML=' <li ><a href="#Suggestion" id="sug">Suggestions</a></li>';
//         tmc.innerHTML='  <li ><a href="#tmContact" id="tmc">Réactions</a></li>';
//         sh.innerHTML = 'site Site de lhotel';
//         ahp.innerHTML='Autres hôtels à proximité';
//        vd.innerHTML='Voir les details';
//        vo.innerHTML='Voir les details';
//        vi.innerHTML='Voir les details';
//        vu.innerHTML='Voir les details';
//        para.innerHTML='Votre opinion compte ! Votre réaction et vos feedbacks sont essentiels pour nous aider à améliorer constamment notre service et à offrir la meilleure expérience possible.';
//       paro.innerHTML=' En cas de problème ou de question, n hésitez pas à contacter notre service client dédié. Nous sommes là pour vous aider et résoudre tout souci que vous pourriez rencontrer lors de votre séjour.'
//       pari.innerHTML=' Comment avez-vous trouvé notre service ? Nous aimerions connaître votre opinion ! Veuillez cliquer sur les étoiles ci-dessous pour évaluer votre expérience avec nous.'
//     send.innerHTML='envoyer';
//     changePlaceholder("cel", "Nom");
//     ha.innerHTML=' Notre équipe dévouée est à votre disposition pour vous aider à trouver l hôtel idéal, que ce soit pour un voyage d affaires, des vacances en famille ou une escapade romantique.';
//      ho.textContent='Entreprise';
//      hi.textContent='à propos de nous';
// } else if (selectedLanguage === "en") {
//         acc.innerHTML=' <li ><a href="ES.html" id="acc">Home</a></li>'
//         hol.innerHTML=' <li ><a href="#hotel" id="hol">Hotel</a></li>'
//         tmc.innerHTML='  <li ><a href="#tmContact" id="tmc">FeedBacks</a></li>';
//         sug.innerHTML=' <li ><a href="#Suggestion" id="sug">Suggestions</a></li>';
//         sh.innerHTML = ' <i class="bi bi-globe me-1"></i> Hotel website';
//         ahp.innerHTML='Other nearby hotels';
//        vd.innerHTML='See the details';
//        vo.innerHTML='See the details';
//        vi.innerHTML='See the details';
//        vu.innerHTML='See the details';
//        para.innerHTML='Your opinion counts! Your reaction and feedback are essential to help us constantly improve our service and provide the best possible experience.';
//     paro.innerHTML='If you have any problems or questions, do not hesitate to contact our dedicated customer service. We are here to help you and resolve any concerns you may encounter during your stay.'
//     pari.innerHTML='How did you find our service? We would like to know your opinion ! Please click on the stars below to rate your experience with us.'
// send.innerHTML='Send';
// changePlaceholder("cel", "Name");
// ha.innerHTML='Our dedicated team is on hand to help you find the perfect hotel, whether it s for a business trip, a family vacation or a romantic getaway.';
//  ho.textContent='company';
//  hi.textContent='About us';
// }
// }


