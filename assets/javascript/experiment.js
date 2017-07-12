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

 	$(".hp1").text(moonJelly.healthPoints);
 	$(".hp2").text(blackSeaNettle.healthPoints);
 	$(".hp3").text(combJelly.healthPoints);
 	$(".hp4").text(narcomedusae.healthPoints);
 
 var attackP;
 var counterAP;
 var attackerHealthPoints;
 var defenderHealthPoints;
 var attackerName;
 var defenderName;
 var defenderID;

/*
  var battle = function() {
      $(".words").show();
      attackerHealthPoints -= counterAP;
      defenderHealthPoints -= attackP;
      $(".hp1").text(attackerHealthPoints);
      $(".hp2").text(defenderHealthPoints);
      $("#commentary").text("You attacked the " + defenderName + " for " + attackP + " damage.")
      $("#commentary2").text("The " + defenderName + "attacked you for " + counterAP + " damage.");
      if (attackerHealthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (defenderHealthPoints <= 0) {
        $("#commentary").text("You have defeated the " + defenderName + ". You can choose to fight another enemy.");
        $("#commentary2").text("");
        defenderID.hide();
      }
  }

//moon attack, nettle defend
  $("#attack").click(function() {
    if ($("#moonPick").is(":visible") && $("#nettleDefend").is(":visible")) {
      moonJelly.attackPower += 4;
      attackP = moonJelly.attackPower;
      counterAP = blackSeaNettle.counterAttackPower;
      attackerHealthPoints = moonJelly.healthPoints;
      defenderHealthPoints = blackSeaNettle.healthPoints;
      attackerName = "Moon Jellyfish";
      defenderName = "Black Sea Nettle";
      defenderID = $("#nettleDefend");
      battle();
    }
    if ($("#moonDefend").is(":visible") && $("#nettlePick").is(":visible")) {
      attackP = blackSeaNettle.attackPower += 4;
      counterAP = moonJelly.counterAttackPower;
      attackerHealthPoints = blackSeaNettle.healthPoints;
      defenderHealthPoints = moonJelly.healthPoints;
      attackerName = "Black Sea Nettle";
      defenderName = "Moon Jellyfish";
      defenderID = $("#moonDefend");
      battle();
    }
  })
*/
 var attackP;
 var counterAP;
 var attackerHealthPoints;
 var defenderHealthPoints;
 var attackerName;
 var defenderName;
 var defenderID;
 var defendText;
 var attackText;

var battle = function() {
      $(".words").show();
      attackP += 4;
      attackerHealthPoints -= counterAP;
      defenderHealthPoints -= attackP;
      attackText.text(attackerHealthPoints);
      defendText.text(defenderHealthPoints);
      $("#commentary").html("You attacked the " + defenderName + " for " + attackP + " damage.")
      $("#commentary2").text("The " + defenderName + " attacked you for " + counterAP + " damage.")
      if (attackerHealthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        
      }
      if (defenderHealthPoints <= 0) {
        $("#commentary").text("You have defeated the " + defenderName + ". You can choose to fight another enemy.");
        $("#commentary2").text("");
        defenderID.hide();       
      }
}


//moon attack, comb defend
  $("#attack").click(function() {
    if ($("#moonPick").is(":visible") && $("#combDefend").is(":visible")) {
      attackP = moonJelly.attackPower;
      counterAP = combJelly.counterAttackPower;
      attackerHealthPoints = moonJelly.healthPoints;
      defenderHealthPoints = combJelly.healthPoints;
      defenderName = "Comb Jellyfish";
      defenderID = $("#combDefend");
      attackText = $(".hp1");
      defendText = $(".hp3")
      battle();
    }
  })




//comb attack, moon defend
  $("#attack").click(function() {
    if ($("#moonDefend").is(":visible") && $("#combPick").is(":visible")) {
      $(".words").show();
      combJelly.attackPower += 8;
      moonJelly.healthPoints -= combJelly.attackPower;
      combJelly.healthPoints -= moonJelly.counterAttackPower;
      $(".hp1").text(moonJelly.healthPoints);
      $(".hp3").text(combJelly.healthPoints);
      $("#commentary").text("You attacked the Moon Jellyfish for " + combJelly.attackPower + " damage.")
      $("#commentary2").text("The Moon Jellyfish attacked you for " + moonJelly.counterAttackPower + " damage.")
      if (combJelly.healthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (moonJelly.healthPoints <= 0) {
        $("#commentary").text("You have defeated the Moon Jellyfish. You can choose to fight another enemy.");
        $("#commentary2").text("");
        $("#moonDefend").hide();
       
      }
    }
  })

//moon attack, narco defend
  $("#attack").click(function() {
    if ($("#moonPick").is(":visible") && $("#narcoDefend").is(":visible")) {
      $(".words").show();
      moonJelly.attackPower += 4;
      moonJelly.healthPoints -= narcomedusae.counterAttackPower;
      narcomedusae.healthPoints -= moonJelly.attackPower;
      $(".hp1").text(moonJelly.healthPoints);
      $(".hp4").text(narcomedusae.healthPoints);
      $("#commentary").html("You attacked the Narcomedusae for " + moonJelly.attackPower + " damage.")
      $("#commentary2").text("The Narcomedusae attacked you for " + narcomedusae.counterAttackPower + " damage.")
      if (moonJelly.healthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (narcomedusae.healthPoints <= 0) {
        $("#commentary").text("You have defeated the Narcomedusae. You can choose to fight another enemy.");
        $("#commentary2").text("");
        $("#narcoDefend").hide();
        
      }
    }
  })

//narco attack, moon defend
  $("#attack").click(function() {
    if ($("#moonDefend").is(":visible") && $("#narcoPick").is(":visible")) {
      $(".words").show();
      narcomedusae.attackPower += 10;
      moonJelly.healthPoints -= narcomedusae.attackPower;
      narcomedusae.healthPoints -= moonJelly.counterAttackPower;
      $(".hp1").text(moonJelly.healthPoints);
      $(".hp4").text(narcomedusae.healthPoints);
      $("#commentary").text("You attacked the Moon Jellyfish for " + narcomedusae.attackPower + " damage.")
      $("#commentary2").text("The Moon Jellyfish attacked you for " + moonJelly.counterAttackPower + " damage.")
      if (narcomedusae.healthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (moonJelly.healthPoints <= 0) {
        $("#commentary").text("You have defeated the Moon Jellyfish. You can choose to fight another enemy.");
        $("#commentary2").text("");
        $("#moonDefend").hide();
      if (combJelly.healthPoints <= 0 && moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        $("#commentary").text("You have defeated all of your enemies!");
      }  
      }
    }
  })

//nettle attack, comb defend
  $("#attack").click(function() {
    if ($("#nettlePick").is(":visible") && $("#combDefend").is(":visible")) {
      $(".words").show();
      blackSeaNettle.attackPower += 6;
      blackSeaNettle.healthPoints -= combJelly.counterAttackPower;
      combJelly.healthPoints -= blackSeaNettle.attackPower;
      $(".hp2").text(blackSeaNettle.healthPoints);
      $(".hp3").text(combJelly.healthPoints);
      $("#commentary").html("You attacked the Comb Jellyfish for " + blackSeaNettle.attackPower + " damage.")
      $("#commentary2").text("The Comb Jellyfish attacked you for " + combJelly.counterAttackPower + " damage.")
      if (blackSeaNettle.healthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (combJelly.healthPoints <= 0) {
        $("#commentary").text("You have defeated the Comb Jellyfish. You can choose to fight another enemy.");
        $("#commentary2").text("");
        $("#combDefend").hide();
       
      }
    }
  })

//comb attack, nettle defend
  $("#attack").click(function() {
    if ($("#nettleDefend").is(":visible") && $("#combPick").is(":visible")) {
      $(".words").show();
      combJelly.attackPower += 8;
      blackSeaNettle.healthPoints -= combJelly.attackPower;
      combJelly.healthPoints -= blackSeaNettle.counterAttackPower;
      $(".hp2").text(blackSeaNettle.healthPoints);
      $(".hp3").text(combJelly.healthPoints);
      $("#commentary").text("You attacked the Black Sea Nettle for " + combJelly.attackPower + " damage.")
      $("#commentary2").text("The Black Sea Nettle attacked you for " + blackSeaNettle.counterAttackPower + " damage.")
      if (combJelly.healthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (blackSeaNettle.healthPoints <= 0) {
        $("#commentary").text("You have defeated the Black Sea Nettle. You can choose to fight another enemy.");
        $("#commentary2").text("");
        $("#nettleDefend").hide();
        
      }
    }
  })

//nettle attacks, narco defends
  $("#attack").click(function() {
    if ($("#nettlePick").is(":visible") && $("#narcoDefend").is(":visible")) {
      $(".words").show();
      blackSeaNettle.attackPower += 6;
      blackSeaNettle.healthPoints -= narcomedusae.counterAttackPower;
      narcomedusae.healthPoints -= blackSeaNettle.attackPower;
      $(".hp2").text(blackSeaNettle.healthPoints);
      $(".hp4").text(narcomedusae.healthPoints);
      $("#commentary").html("You attacked the Narcomedusae for " + blackSeaNettle.attackPower + " damage.")
      $("#commentary2").text("The Narcomedusae attacked you for " + narcomedusae.counterAttackPower + " damage.")
      if (blackSeaNettle.healthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (narcomedusae.healthPoints <= 0) {
        $("#commentary").text("You have defeated the Narcomedusae. You can choose to fight another enemy.");
        $("#commentary2").text("");
        $("#narcoDefend").hide();
        
      }
    }
  })

//narco attacks, nettle defends
  $("#attack").click(function() {
    if ($("#nettleDefend").is(":visible") && $("#narcoPick").is(":visible")) {
      $(".words").show();
      narcomedusae.attackPower += 10;
      blackSeaNettle.healthPoints -= narcomedusae.attackPower;
      narcomedusae.healthPoints -= blackSeaNettle.counterAttackPower;
      $(".hp2").text(blackSeaNettle.healthPoints);
      $(".hp4").text(narcomedusae.healthPoints);
      $("#commentary").text("You attacked the Black Sea Nettle for " + narcomedusae.attackPower + " damage.")
      $("#commentary2").text("The Black Sea Nettle attacked you for " + blackSeaNettle.counterAttackPower + " damage.")
      if (narcomedusae.healthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (blackSeaNettle.healthPoints <= 0) {
        $("#commentary").text("You have defeated the Black Sea Nettle. You can choose to fight another enemy.");
        $("#commentary2").text("");
        $("#nettleDefend").hide();
      if (combJelly.healthPoints <= 0 && moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        $("#commentary").text("You have defeated all of your enemies!");
      }
      }
    }
  })

//comb attacks, narco defends
  $("#attack").click(function() {
    if ($("#combPick").is(":visible") && $("#narcoDefend").is(":visible")) {
      $(".words").show();
      combJelly.attackPower += 8;
      combJelly.healthPoints -= narcomedusae.counterAttackPower;
      narcomedusae.healthPoints -= combJelly.attackPower;
      $(".hp3").text(combJelly.healthPoints);
      $(".hp4").text(narcomedusae.healthPoints);
      $("#commentary").html("You attacked the Narcomedusae for " + combJelly.attackPower + " damage.")
      $("#commentary2").text("The Narcomedusae attacked you for " + narcomedusae.counterAttackPower + " damage.")
      if (combJelly.healthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (narcomedusae.healthPoints <= 0) {
        $("#commentary").text("You have defeated the Narcomedusae. You can choose to fight another enemy.");
        $("#commentary2").text("");
        $("#narcoDefend").hide();
      if (narcomedusae.healthPoints <= 0 && moonJelly.healthPoints <= 0 &&blackSeaNettle.healthPoints <= 0) {
        $("#commentary").text("You have defeated all of your enemies!");
      }
      }
    }
  })

//narco attacks, comb defends
  $("#attack").click(function() {
    if ($("#combDefend").is(":visible") && $("#narcoPick").is(":visible")) {
      $(".words").show();
      narcomedusae.attackPower += 10;
      combJelly.healthPoints -= narcomedusae.attackPower;
      narcomedusae.healthPoints -= combJelly.counterAttackPower;
      $(".hp3").text(combJelly.healthPoints);
      $(".hp4").text(narcomedusae.healthPoints);
      $("#commentary").html("You attacked the Comb Jellyfish for " + narcomedusae.attackPower + " damage.")
      $("#commentary2").text("The Comb Jellyfish attacked you for " + combJelly.counterAttackPower + " damage.")
      if (narcomedusae.healthPoints <= 0) {
        $("#restart").show();
        $("#commentary").text("You have been defeated. Game over!")
        $("#commentary2").text("");
        $("#attack").prop('disabled', true);
      }
      if (combJelly.healthPoints <= 0) {
        $("#commentary").text("You have defeated the Comb Jellyfish. You can choose to fight another enemy.");
        $("#commentary2").text("");
        $("#combDefend").hide();
      if (combJelly.healthPoints <= 0 && moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
        $("#commentary").text("You have defeated all of your enemies!");
      }
      }
    }
  })

  if (narcomedusae.healthPoints <= 0 && moonJelly.healthPoints <= 0 && blackSeaNettle.healthPoints <= 0) {
    $("#commentary").text("You have defeated all of your enemies!");
  }

  $("#restart").click(function() {
    location.reload();
  })

};