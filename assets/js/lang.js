function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }

//Language translations
var language = {
  eng: {
      welcome: "Welcome"
  },
  
  est: {
      welcome: "Tere tulemast",
      home: "KODU",
      about: "MEIST",
      products: "TOOTED",
      contact: "KONTAKTI",
      lifano: " LIFANO FOODS'I",
      sliderText: "Lifano foods toob teieni Anatoolia ja Vahemere parimad hõrgutised.",
      readMore: "LOE ROHKEM",
      real: "Tõeline",
      fresh: "VÄRSKED TOIDUD",
      sliderText2: "Lifano pakub kvaliteetseid tooteid professionaalsetele toitlustusasutustele ja eraisikutele üle Eesti.",
      delicious: "Maitsev",
      sweetMeat: "MAGUSLIHAD",
      sliderText3: "Vana ütlus soovitab süüa magusalt ja rääkida magusalt.",
      discover: "Avastage",
      aboutText: "Lifano Foods tutvustab erakordset uut kontseptsiooni, et tuua teieni Anatoolia ja Vahemere piirkonna parimad hõrgutised ja omadused. Pakume oma kaubamärgi all Vahemere ehedate ja kvaliteetsete toitude küllusesarvet. Loosungiga “Avasta Vahemere köök” käivitatud tooted on Vahemere köögi ainulaadsed näited. Vana ütlus soovitab süüa magusalt ja rääkida magusalt. Maiustused ja magustoidud on alati olnud Vahemere köögi olulised ja omanäolised elemendid. See oli tõsi iidsetel aegadel ja kehtib ka tänapäeval. Meie tooted:",
      lifanoDessert: "Lifano Magustoidud",
      lifanoBakery: "Lifano Pagaritooted",
      lifanoFresh: "Lifano Värsked Toidud",
      lifanoMarash: "Lifano Marash Jäätis",
      frsh: "Värske",
      breakfast: "Hommikusöögi Esemed",
      dinner: "Õhtusöögi Esemed",
      hot: "Kuum",
      coffee: "Kohvi Esemed",
      satisfied: "Rahuldatud",
      customers: "Kliendid",
      ourProducts: "Meie Tooted",
      all: "Kõik",
      supporters: "Meie Toetajad",
      brands: "Kaubamärgid",
      getInTouch: "Ühendust Võtma",
      yourName: "Sinu Nimi",
      emailAddress: "Meiliaadress",
      subject: "Teema",
      message: "Sõnum",
      sendMessage: "Saada Sõnum",
      infoText: "Lifano pakub kvaliteetseid tooteid professionaalsetele toitlustusasutustele ja eraisikutele üle Eesti.",
      hours: "Lahtiolekuajad",
      monday_friday: "Esmaspäev -  Reede",
      saturday: "Laupäeval",
      sunday: "Pühapäev",
      productList: "Klõpsake tooteloendi allalaadimiseks"
  },

};

//Define language via window hash

if (window.location.hash) {
  if(window.location.hash == "#est"){
      h.textContent = language.est.home;
      a.textContent = language.est.about;
      pr.textContent = language.est.products;
      co.textContent = language.est.contact;
      hi.textContent = language.est.welcome;
      lfn.textContent = language.est.lifano;
      slider_text.textContent = language.est.sliderText;
      readmore.textContent = language.est.readMore;
      rl.textContent = language.est.real;
      frsh.textContent = language.est.fresh;
      s_text2.textContent = language.est.sliderText2;
      readmore2.textContent = language.est.readMore;
      delics.textContent = language.est.delicious;
      sm.textContent = language.est.sweetMeat;
      s_text3.textContent = language.est.sliderText3;
      readmore3.textContent = language.est.readMore;
      disc.textContent = language.est.discover;
      abt.textContent = language.est.about;
      about_txt.textContent = language.est.aboutText;
      l_dess.textContent = language.est.lifanoDessert;
      l_bak.textContent = language.est.lifanoBakery;
      l_frs.textContent = language.est.lifanoFresh;
      l_ice.textContent = language.est.lifanoMarash;
      frs.textContent = language.est.frsh;
      brk.textContent = language.est.breakfast;
      delic.textContent = language.est.delicious;
      dinn.textContent = language.est.dinner;
      hot.textContent = language.est.hot;
      cofe.textContent = language.est.coffee;
      stsf.textContent = language.est.satisfied;
      cust.textContent = language.est.customers;
      dis.textContent = language.est.discover;
      ourpr.textContent = language.est.ourProducts;
      all.textContent = language.est.all;
      ldess.textContent = language.est.lifanoDessert;
      lbak.textContent = language.est.lifanoBakery;
      lfrs.textContent = language.est.lifanoFresh;
      lice.textContent = language.est.lifanoMarash;
      supp.textContent = language.est.supporters;
      brand.textContent = language.est.brands;
      git.textContent = language.est.getInTouch;
      cont.textContent = language.est.contact;
      yname.textContent = language.est.yourName;
      emaila.textContent = language.est.emailAddress;
      subj.textContent = language.est.subject;
      msg.textContent = language.est.message;
      smsg.textContent = language.est.sendMessage;
      info_text.textContent = language.est.infoText;
      hour.textContent = language.est.hours;
      m_f.textContent = language.est.monday_friday;
      sat.textContent = language.est.saturday;
      sun.textContent = language.est.sunday;
      prodlist.textContent = language.est.productList;

    
  }
}
