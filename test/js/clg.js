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
        var sh = document.getElementById("sh");
        var ahp =document.getElementById("ahp");
        var vd =document.getElementById("vd");
        var vo=document.getElementById("vo");
        var vi =document.getElementById("vi");
        var vu =document.getElementById("vu");
        var hol=document.getElementById("hol");
        var sug=document.getElementById("sug");
        var tmc=document.getElementById("tmc");
        var ha=document.getElementById("ha");
        var ho=document.getElementById("ho");
        var hi=document.getElementById("hi");
        var ea=document.getElementById("ea");
        var eo=document.getElementById("eo");
        var ei=document.getElementById("ei");
        var ia=document.getElementById("ia");
        var io=document.getElementById("io");
        var ii=document.getElementById("ii");
        var iu=document.getElementById("iu");
     
        var send=document.getElementById("send");
        var flag=document.getElementById("drap");
        var selectedLanguage = select.value;
        var selectElement = document.getElementById("language-select");
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
            acc.innerHTML=' <li ><a href="ES.html" id="acc">Accueil</a></li>';
            hol.innerHTML=' <li ><a href="#hotel" id="hol">Hôtel</a></li>';
            sug.innerHTML=' <li ><a href="#Suggestion" id="sug">Suggestions</a></li>';
            tmc.innerHTML='  <li ><a href="#tmContact" id="tmc">Réactions</a></li>';
            sh.innerHTML = ' <i class="bi bi-globe me-1"></i> Site de hôtel';
            ahp.innerHTML='Autres hôtels à proximité';
           vd.innerHTML='Voir les details';
           vo.innerHTML='Voir les details';
           vi.innerHTML='Voir les details';
           vu.innerHTML='Voir les details';
           para.innerHTML='Votre opinion compte ! Votre réaction et vos feedbacks sont essentiels pour nous aider à améliorer constamment notre service et à offrir la meilleure expérience possible.';
          paro.innerHTML=' En cas de problème ou de question, n hésitez pas à contacter notre service client dédié. Nous sommes là pour vous aider et résoudre tout souci que vous pourriez rencontrer lors de votre séjour.'
          pari.innerHTML=' Comment avez-vous trouvé notre service ? Nous aimerions connaître votre opinion ! Veuillez cliquer sur les étoiles ci-dessous pour évaluer votre expérience avec nous.'
        send.innerHTML='envoyer';
        changePlaceholder("cel", "Nom");
        ha.innerHTML=' Notre équipe dévouée est à votre disposition pour vous aider à trouver l hôtel idéal, que ce soit pour un voyage d affaires, des vacances en famille ou une escapade romantique.';
         ho.textContent='Entreprise';
         hi.textContent='à propos de nous';
         ea.textContent='Contactez nous';
         eo.textContent='politique de confidentialité';
         ei.textContent='Termes & conditions';
         ia.textContent='Alimentation & Restauration';
         ii.textContent='Sports et jeux';
         iu.textContent='Événement et fête';
       
    io.innerHTML='<a class="border-bottom" href="#">@ EasyStay</a>, Tous droits réservés Conçu par <a class="border-bottom" href="https://artiweb.ma/">Artiweb</a>'
    } else if (selectedLanguage === "en") {
            acc.innerHTML=' <li ><a href="ES.html" id="acc">Home</a></li>'
            hol.innerHTML=' <li ><a href="#hotel" id="hol">Hotel</a></li>'
            tmc.innerHTML='  <li ><a href="#tmContact" id="tmc">FeedBacks</a></li>';
            sug.innerHTML=' <li ><a href="#Suggestion" id="sug">Suggestions</a></li>';
            sh.innerHTML = ' <i class="bi bi-globe me-1"></i> Hotel website';
            ahp.innerHTML='Other nearby hotels';
           vd.innerHTML='See the details';
           vo.innerHTML='See the details';
           vi.innerHTML='See the details';
           vu.innerHTML='See the details';
           para.innerHTML='Your opinion counts! Your reaction and feedback are essential to help us constantly improve our service and provide the best possible experience.';
        paro.innerHTML='If you have any problems or questions, do not hesitate to contact our dedicated customer service. We are here to help you and resolve any concerns you may encounter during your stay.'
        pari.innerHTML='How did you find our service? We would like to know your opinion ! Please click on the stars below to rate your experience with us.'
    send.innerHTML='Send';
    changePlaceholder("cel", "Name");
    ha.innerHTML='Our dedicated team is on hand to help you find the perfect hotel, whether it s for a business trip, a family vacation or a romantic getaway.';
     ho.textContent='company';
     hi.textContent='About us';
     ea.textContent='Contact us';
     eo.textContent='Privacy Policy';
     ei.textContent='Terms & conditions';
     ia.textContent='Food & Restaurant';
     ii.textContent='Sports and games';
     iu.textContent='event and party';
     
    io.innerHTML='<a class="border-bottom" href="#"> @ EasyStay</a>, All Right Reserved Designed By <a class="border-bottom" href="https://artiweb.ma/">Artiweb</a>';
    }
    }