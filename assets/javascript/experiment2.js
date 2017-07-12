window.onload = function() {

var setUp = function() {
  $(".jellyPick, .jellyEnemy, .jellyDefend, #restart").hide();
  $(".jellyFirst").show();
  $("#commentary").text("");
  $("#attack").prop('disabled', false);
}

var firstPick = function() {
  $("#moonFirst").click(function(){
    $(".jellyFirst").hide();
    $("#moonPick").show();
    $("#nettleEnemy, #combEnemy, #narcoEnemy").show();
  })
  $("#nettleFirst").click(function(){
    $(".jellyFirst").hide();
    $("#nettlePick").show();
    $("#moonEnemy, #combEnemy, #narcoEnemy").show();
  })
  $("#combFirst").click(function(){
    $(".jellyFirst").hide();
    $("#combPick").show();
    $("#moonEnemy, #nettleEnemy, #narcoEnemy").show();
  })
  $("#narcoFirst").click(function(){
    $(".jellyFirst").hide();
    $("#narcoPick").show();
    $("#moonEnemy, #nettleEnemy, #combEnemy").show();
  })
}

var secondPick = function() {
  $("#nettleEnemy").click(function() {
    $("#nettleEnemy").hide();
    $("#nettleDefend").show();
    $("#commentary").text("");
  })
  $("#moonEnemy").click(function() {
    $("#moonEnemy").hide();
    $("#moonDefend").show();
    $("#commentary").text("");
  })
  $("#combEnemy").click(function() {
    $("#combEnemy").hide();
    $("#combDefend").show();
    $("#commentary").text("");
  })
  $("#narcoEnemy").click(function() {
    $("#narcoEnemy").hide();
    $("#narcoDefend").show();
    $("#commentary").text("");
  })
}

setUp();
firstPick();
secondPick();

var moonJelly = {
  healthPoints: 110,
  attackPower: 0,
  counterAttackPower: 15,
};

var blackSeaNettle = {
  healthPoints: 90,
  attackPower: 0,
  counterAttackPower: 10,
};

var combJelly = {
  healthPoints: 115,
  attackPower: 0,
  counterAttackPower: 12,
};

var narcomedusae = {
  healthPoints: 130,
  attackPower: 0,
  counterAttackPower: 19,
};

  var healthPoints1 = $(".hp1");
  healthPoints1.text(moonJelly.healthPoints);
  var healthPoints2 = $(".hp2");
  healthPoints2.text(blackSeaNettle.healthPoints);
  var healthPoints3 = $(".hp3");
  healthPoints3.text(combJelly.healthPoints);
  var healthPoints4 = $(".hp4");
  healthPoints4.text(narcomedusae.healthPoints);
  var commentary = $("#commentary");
  var commentary2 = $("#commentary2");
  var words = $(".words");
  var attackBtn = $("#attack");
  var restartBtn = $("#restart");


  //comb attacks, narco defends
  attackBtn.click(function() {
    if ($("#combPick").is(":visible") && $("#narcoDefend").is(":visible")) {
      words.show();
      combJelly.attackPower += 8;
      combJelly.healthPoints -= narcomedusae.counterAttackPower;
      narcomedusae.healthPoints -= combJelly.attackPower;
      healthPoints3.text(combJelly.healthPoints);
      healthPoints4.text(narcomedusae.healthPoints);
      commentary.html("You attacked the Narcomedusae for " + combJelly.attackPower + " damage.")
      commentary2.text("The Narcomedusae attacked you for " + narcomedusae.counterAttackPower + " damage.")
      if (combJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (narcomedusae.healthPoints <= 0) {
        commentary.text("You have defeated the Narcomedusae. You can choose to fight another enemy.");
        commentary2.text("");
        $("#narcoDefend").hide();
      if (combJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (narcomedusae.healthPoints <= 0 && moonJelly.healthPoints <= 0 &&blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }
      }
    }
  })

//narco attacks, comb defends
  



  $("#restart").click(function() {
    location.reload();
  })

};


 