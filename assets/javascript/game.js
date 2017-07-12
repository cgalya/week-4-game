window.onload = function() {



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
  var enemies = $("#enemies");

  healthPoints1.text(moonJelly.healthPoints);
  healthPoints2.text(blackSeaNettle.healthPoints);
  healthPoints3.text(combJelly.healthPoints);
  healthPoints4.text(narcomedusae.healthPoints);
 
 var setUp = function() {
  $(".jellyPick, .jellyEnemy, .jellyDefend, #restart").hide();
  $(".jellyFirst").show();
  commentary.text("");
  attackBtn.prop('disabled', false);
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
    commentary.text("");
  })
  $("#moonEnemy").click(function() {
    $("#moonEnemy").hide();
    $("#moonDefend").show();
    commentary.text("");
  })
  $("#combEnemy").click(function() {
    $("#combEnemy").hide();
    $("#combDefend").show();
    commentary.text("");
  })
  $("#narcoEnemy").click(function() {
    $("#narcoEnemy").hide();
    $("#narcoDefend").show();
    commentary.text("");
  })
}

setUp();
firstPick();
secondPick();

//moon attack, nettle defend
  attackBtn.click(function() {
    if ($("#moonPick").is(":visible") && $("#nettleDefend").is(":visible")) {
      words.show();
      moonJelly.attackPower += 4;
      moonJelly.healthPoints -= blackSeaNettle.counterAttackPower;
      blackSeaNettle.healthPoints -= moonJelly.attackPower;
      healthPoints1.text(moonJelly.healthPoints);
      healthPoints2.text(blackSeaNettle.healthPoints);
      commentary.text("You attacked the Black Sea Nettle for " + moonJelly.attackPower + " damage.");
      commentary2.text("The Black Sea Nettle attacked you for " + blackSeaNettle.counterAttackPower + " damage.");
      if (moonJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated the Black Sea Nettle. You can choose to fight another enemy.");
        commentary2.text("");
        $("#nettleDefend").hide();
      if (moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Black Sea Nettle, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#nettleDefend").show();
      }
      if (combJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }  
      }
    }
  })


//nettle attack, moon defend
   attackBtn.click(function() {
    if ($("#moonDefend").is(":visible") && $("#nettlePick").is(":visible")) {
      words.show();
      blackSeaNettle.attackPower += 6;
      moonJelly.healthPoints -= blackSeaNettle.attackPower;
      blackSeaNettle.healthPoints -= moonJelly.counterAttackPower;
      healthPoints1.text(moonJelly.healthPoints);
      healthPoints2.text(blackSeaNettle.healthPoints);
      commentary.text("You attacked the Moon Jellyfish for " + blackSeaNettle.attackPower + " damage.");
      commentary2.text("The Moon Jellyfish attacked you for " + moonJelly.counterAttackPower + " damage.");
      if (blackSeaNettle.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (moonJelly.healthPoints <= 0) {
        commentary.text("You have defeated the Moon Jellyfish. You can choose to fight another enemy.");
        commentary2.text("");
        $("#moonDefend").hide();
      if (moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Moon Jellyfish, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#moonDefend").show();
      }
      if (combJelly.healthPoints <= 0 && moonJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      } 
      }
    }
  })

//moon attack, comb defend
  attackBtn.click(function() {
    if ($("#moonPick").is(":visible") && $("#combDefend").is(":visible")) {
      words.show();
      moonJelly.attackPower += 4;
      moonJelly.healthPoints -= combJelly.counterAttackPower;
      combJelly.healthPoints -= moonJelly.attackPower;
      healthPoints1.text(moonJelly.healthPoints);
      healthPoints3.text(combJelly.healthPoints);
      commentary.html("You attacked the Comb Jellyfish for " + moonJelly.attackPower + " damage.");
      commentary2.text("The Comb Jellyfish attacked you for " + combJelly.counterAttackPower + " damage.");
      if (moonJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (combJelly.healthPoints <= 0) {
        commentary.text("You have defeated the Comb Jellyfish. You can choose to fight another enemy.");
        commentary2.text("");
        $("#combDefend").hide();
      if (moonJelly.healthPoints <= 0 && combJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Comb Jellyfish, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#combDefend").show();
      }
      if (combJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }  
      }
    }
  })

//comb attack, moon defend
  attackBtn.click(function() {
    if ($("#moonDefend").is(":visible") && $("#combPick").is(":visible")) {
      words.show();
      combJelly.attackPower += 8;
      moonJelly.healthPoints -= combJelly.attackPower;
      combJelly.healthPoints -= moonJelly.counterAttackPower;
      healthPoints1.text(moonJelly.healthPoints);
      healthPoints3.text(combJelly.healthPoints);
      commentary.text("You attacked the Moon Jellyfish for " + combJelly.attackPower + " damage.");
      commentary2.text("The Moon Jellyfish attacked you for " + moonJelly.counterAttackPower + " damage.");
      if (combJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (moonJelly.healthPoints <= 0) {
        commentary.text("You have defeated the Moon Jellyfish. You can choose to fight another enemy.");
        commentary2.text("");
        $("#moonDefend").hide();
      if (moonJelly.healthPoints <= 0 && combJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Moon Jellyfish, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#moonDefend").show();
      }
      if (narcomedusae.healthPoints <= 0 && moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      } 
      }
    }
  })

//moon attack, narco defend
  attackBtn.click(function() {
    if ($("#moonPick").is(":visible") && $("#narcoDefend").is(":visible")) {
      words.show();
      moonJelly.attackPower += 4;
      moonJelly.healthPoints -= narcomedusae.counterAttackPower;
      narcomedusae.healthPoints -= moonJelly.attackPower;
      healthPoints1.text(moonJelly.healthPoints);
      healthPoints4.text(narcomedusae.healthPoints);
      commentary.html("You attacked the Narcomedusae for " + moonJelly.attackPower + " damage.");
      commentary2.text("The Narcomedusae attacked you for " + narcomedusae.counterAttackPower + " damage.");
      if (moonJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (narcomedusae.healthPoints <= 0) {
        commentary.text("You have defeated the Narcomedusae. You can choose to fight another enemy.");
        commentary2.text("");
        $("#narcoDefend").hide();
      if (moonJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Narcomedusae, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#narcoDefend").show();
      }
      if (combJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }  
      }
    }
  })

//narco attack, moon defend
  attackBtn.click(function() {
    if ($("#moonDefend").is(":visible") && $("#narcoPick").is(":visible")) {
      words.show();
      narcomedusae.attackPower += 10;
      moonJelly.healthPoints -= narcomedusae.attackPower;
      narcomedusae.healthPoints -= moonJelly.counterAttackPower;
      healthPoints1.text(moonJelly.healthPoints);
      healthPoints4.text(narcomedusae.healthPoints);
      commentary.text("You attacked the Moon Jellyfish for " + narcomedusae.attackPower + " damage.");
      commentary2.text("The Moon Jellyfish attacked you for " + moonJelly.counterAttackPower + " damage.");
      if (narcomedusae.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (moonJelly.healthPoints <= 0) {
        commentary.text("You have defeated the Moon Jellyfish. You can choose to fight another enemy.");
        commentary2.text("");
        $("#moonDefend").hide();
      if (moonJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Moon Jellyfish, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#moonDefend").show();
      }
      if (combJelly.healthPoints <= 0 && moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }  
      }
    }
  })

//nettle attack, comb defend
  attackBtn.click(function() {
    if ($("#nettlePick").is(":visible") && $("#combDefend").is(":visible")) {
      words.show();
      blackSeaNettle.attackPower += 6;
      blackSeaNettle.healthPoints -= combJelly.counterAttackPower;
      combJelly.healthPoints -= blackSeaNettle.attackPower;
      healthPoints2.text(blackSeaNettle.healthPoints);
      healthPoints3.text(combJelly.healthPoints);
      commentary.html("You attacked the Comb Jellyfish for " + blackSeaNettle.attackPower + " damage.");
      commentary2.text("The Comb Jellyfish attacked you for " + combJelly.counterAttackPower + " damage.");
      if (blackSeaNettle.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (combJelly.healthPoints <= 0) {
        commentary.text("You have defeated the Comb Jellyfish. You can choose to fight another enemy.");
        commentary2.text("");
        $("#combDefend").hide();
      if (combJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Comb Jellyfish, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#combDefend").show();
      }
      if (combJelly.healthPoints <= 0 && moonJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      } 
      }
    }
  })

//comb attack, nettle defend
  attackBtn.click(function() {
    if ($("#nettleDefend").is(":visible") && $("#combPick").is(":visible")) {
      words.show();
      combJelly.attackPower += 8;
      blackSeaNettle.healthPoints -= combJelly.attackPower;
      combJelly.healthPoints -= blackSeaNettle.counterAttackPower;
      healthPoints2.text(blackSeaNettle.healthPoints);
      healthPoints3.text(combJelly.healthPoints);
      commentary.text("You attacked the Black Sea Nettle for " + combJelly.attackPower + " damage.");
      commentary2.text("The Black Sea Nettle attacked you for " + blackSeaNettle.counterAttackPower + " damage.");
      if (combJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated the Black Sea Nettle. You can choose to fight another enemy.");
        commentary2.text("");
        $("#nettleDefend").hide();
      if (combJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Black Sea Nettle, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#nettleDefend").show();
      }
      if (narcomedusae.healthPoints <= 0 && moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }  
      }
    }
  })

//nettle attacks, narco defends
  attackBtn.click(function() {
    if ($("#nettlePick").is(":visible") && $("#narcoDefend").is(":visible")) {
      words.show();
      blackSeaNettle.attackPower += 6;
      blackSeaNettle.healthPoints -= narcomedusae.counterAttackPower;
      narcomedusae.healthPoints -= blackSeaNettle.attackPower;
      healthPoints2.text(blackSeaNettle.healthPoints);
      healthPoints4.text(narcomedusae.healthPoints);
      commentary.html("You attacked the Narcomedusae for " + blackSeaNettle.attackPower + " damage.");
      commentary2.text("The Narcomedusae attacked you for " + narcomedusae.counterAttackPower + " damage.");
      if (blackSeaNettle.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (narcomedusae.healthPoints <= 0) {
        commentary.text("You have defeated the Narcomedusae. You can choose to fight another enemy.");
        commentary2.text("");
        $("#narcoDefend").hide();
      if (narcomedusae.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Narcomedusae, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#narcoDefend").show();
      }
      if (combJelly.healthPoints <= 0 && moonJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }  
      }
    }
  })

//narco attacks, nettle defends
  attackBtn.click(function() {
    if ($("#nettleDefend").is(":visible") && $("#narcoPick").is(":visible")) {
      words.show();
      narcomedusae.attackPower += 10;
      blackSeaNettle.healthPoints -= narcomedusae.attackPower;
      narcomedusae.healthPoints -= blackSeaNettle.counterAttackPower;
      healthPoints2.text(blackSeaNettle.healthPoints);
      healthPoints4.text(narcomedusae.healthPoints);
      commentary.text("You attacked the Black Sea Nettle for " + narcomedusae.attackPower + " damage.");
      commentary2.text("The Black Sea Nettle attacked you for " + blackSeaNettle.counterAttackPower + " damage.");
      if (narcomedusae.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated the Black Sea Nettle. You can choose to fight another enemy.");
        commentary2.text("");
        $("#nettleDefend").hide();
      if (narcomedusae.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Black Sea Nettle, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#nettleDefend").show();
      }
      if (combJelly.healthPoints <= 0 && moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }
      }
    }
  })

//comb attacks, narco defends
  attackBtn.click(function() {
    if ($("#combPick").is(":visible") && $("#narcoDefend").is(":visible")) {
      words.show();
      combJelly.attackPower += 8;
      combJelly.healthPoints -= narcomedusae.counterAttackPower;
      narcomedusae.healthPoints -= combJelly.attackPower;
      healthPoints3.text(combJelly.healthPoints);
      healthPoints4.text(narcomedusae.healthPoints);
      commentary.html("You attacked the Narcomedusae for " + combJelly.attackPower + " damage.");
      commentary2.text("The Narcomedusae attacked you for " + narcomedusae.counterAttackPower + " damage.");
      if (combJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (narcomedusae.healthPoints <= 0) {
        commentary.text("You have defeated the Narcomedusae. You can choose to fight another enemy.");
        commentary2.text("");
        $("#narcoDefend").hide();
      if (combJelly.healthPoints <= 0 && narcomedusae.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Narcomedusae, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#narcoDefend").show();
      }
      if (narcomedusae.healthPoints <= 0 && moonJelly.healthPoints <= 0 &&blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }
      }
    }
  })

//narco attacks, comb defends
  attackBtn.click(function() {
    if ($("#combDefend").is(":visible") && $("#narcoPick").is(":visible")) {
      words.show();
      narcomedusae.attackPower += 10;
      combJelly.healthPoints -= narcomedusae.attackPower;
      narcomedusae.healthPoints -= combJelly.counterAttackPower;
      healthPoints3.text(combJelly.healthPoints);
      healthPoints4.text(narcomedusae.healthPoints);
      commentary.html("You attacked the Comb Jellyfish for " + narcomedusae.attackPower + " damage.");
      commentary2.text("The Comb Jellyfish attacked you for " + combJelly.counterAttackPower + " damage.");
      if (narcomedusae.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have been defeated. Game over!");
        commentary2.text("");
        attackBtn.prop('disabled', true);
      }
      if (combJelly.healthPoints <= 0) {
        commentary.text("You have defeated the Comb Jellyfish. You can choose to fight another enemy.");
        commentary2.text("");
        $("#combDefend").hide();
      if (narcomedusae.healthPoints <= 0 && combJelly.healthPoints <= 0) {
        restartBtn.show();
        commentary.text("You have defeated the Comb Jellyfish, but you have no Health Points remaining. Game over!")
        commentary2.text("");
        attackBtn.prop('disabled', true);
        enemies.hide();
        $("#combDefend").show();
      }
      if (combJelly.healthPoints <= 0 && moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        commentary.text("You have defeated all of your enemies!");
      }
      }
    }
  })


  restartBtn.click(function() {
    location.reload();
  })

};