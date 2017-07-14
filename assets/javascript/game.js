window.onload = function() {
  
//removing hidden class from these elements, it was set originally so that they wouldn't flash upon reloading the page
//hiding all jellyfish but the first row upon page loading
var setUp = function() {
  $(".jellyPick, .jellyEnemy, .jellyDefend, #restart").removeClass("hidden");
  $(".jellyPick, .jellyEnemy, .jellyDefend, #restart").hide();
  $(".jellyFirst").show();
}
setUp();

//if you click on a jellyfish in the top row, hides and its "Your Jellyfish" version shows, and the others hide and their "Enemies Available to Attack" versions show
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

//when you click on a potential enemy, its enemy version hides and its defender version shows, also clears commentary for the next battle
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

//calling the above functions
firstPick();
secondPick();


// jellyfish objects with data to be used in battle function
var moonJelly = {
  healthPoints: 110,
  attackPower: 0,
  counterAttackPower: 15,
  increasePower: 4,
  name: "Moon Jellyfish",
  healthPointsLocation: $(".hp1"),
  defendID: $("#moonDefend")
};

var blackSeaNettle = {
  healthPoints: 90,
  attackPower: 0,
  counterAttackPower: 10,
  increasePower: 6,
  name: "Black Sea Nettle",
  healthPointsLocation: $(".hp2"),
  defendID: $("#nettleDefend")
};

var combJelly = {
  healthPoints: 115,
  attackPower: 0,
  counterAttackPower: 12,
  increasePower: 8,
  name: "Comb Jellyfish",
  healthPointsLocation: $(".hp3"),
  defendID: $("#combDefend")
};

var narcomedusae = {
  healthPoints: 130,
  attackPower: 0,
  counterAttackPower: 19,
  increasePower: 10,
  name: "Narcomedusae",
  healthPointsLocation: $(".hp4"),
  defendID: $("#narcoDefend")
};

//setting variables for html selectors
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

var attacker;
var defender;
var extra;
var other;

//battle pairings - if these two jellyfish are visible, set them as attacker and defender in the battle function
attackBtn.click(function() { 
  if ($("#moonPick").is(":visible") && $("#nettleDefend").is(":visible")) {
    battle(moonJelly, blackSeaNettle, combJelly, narcomedusae);
  } else if ($("#nettlePick").is(":visible") && $("#moonDefend").is(":visible")) {
    battle(blackSeaNettle, moonJelly, combJelly, narcomedusae);
  } else if ($("#moonPick").is(":visible") && $("#combDefend").is(":visible")) {
    battle(moonJelly, combJelly, blackSeaNettle, narcomedusae);
  } else if ($("#combPick").is(":visible") && $("#moonDefend").is(":visible")) {
    battle(combJelly, moonJelly, blackSeaNettle, narcomedusae);
  } else if ($("#moonPick").is(":visible") && $("#narcoDefend").is(":visible")) {
    battle(moonJelly, narcomedusae, blackSeaNettle, combJelly);
  } else if ($("#narcoPick").is(":visible") && $("#moonDefend").is(":visible")) {
    battle(narcomedusae, moonJelly, blackSeaNettle, combJelly);
  } else if ($("#nettlePick").is(":visible") && $("#combDefend").is(":visible")) {
    battle(blackSeaNettle, combJelly, moonJelly, narcomedusae);
  } else if ($("#combPick").is(":visible") && $("#nettleDefend").is(":visible")) {
    battle(combJelly, blackSeaNettle, moonJelly, narcomedusae);
  } else if ($("#nettlePick").is(":visible") && $("#narcoDefend").is(":visible")) {
    battle(blackSeaNettle, narcomedusae, moonJelly, combJelly);
  } else if ($("#narcoPick").is(":visible") && $("#nettleDefend").is(":visible")) {
    battle(narcomedusae, blackSeaNettle, moonJelly, combJelly);
  } else if ($("#combPick").is(":visible") && $("#narcoDefend").is(":visible")) {
    battle(combJelly, narcomedusae, moonJelly, blackSeaNettle);
  } else if ($("#narcoPick").is(":visible") && $("#combDefend").is(":visible")) {
    battle(narcomedusae, combJelly, moonJelly, blackSeaNettle);
  }
})

  var battle = function(attacker, defender, extra, other) {
    //attack power increases
    attacker.attackPower += attacker.increasePower;
    //health points deductions are taken and counts are updated
    attacker.healthPoints -= defender.counterAttackPower;
    defender.healthPoints -= attacker.attackPower;
    attacker.healthPointsLocation.text(attacker.healthPoints);
    defender.healthPointsLocation.text(defender.healthPoints);
    //commentary lines underneath the battle telling what's happening
    commentary.html("You attacked the " + defender.name + " for " + attacker.attackPower + " damage.");
    commentary2.text("The " + defender.name + " attacked you for " + defender.counterAttackPower + " damage.");
    //if the attacker loses
    if (attacker.healthPoints <= 0) {
      restartBtn.show();
      commentary.text("You have been defeated. Game over!");
      commentary2.text("");
      attackBtn.prop('disabled', true);
      enemies.hide();
    }
    //if the attacker wins
    if (defender.healthPoints <= 0) {
      commentary.text("You have defeated the " + defender.name + ". You can choose to fight another enemy.");
      commentary2.text("");
      defender.defendID.hide();
    //if both attacker and defender lose
    if (attacker.healthPoints <= 0 && defender.healthPoints <= 0) {
      restartBtn.show();
      commentary.text("You have defeated the " + defender.name + ", but you have no Health Points remaining. Game over!")
      commentary2.text("");
      attackBtn.prop('disabled', true);
      enemies.hide();
      defender.defendID.show();
    }
    //if attacker defeats all enemies
    if (defender.healthPoints <= 0 && extra.healthPoints <= 0 && other.healthPoints <= 0) {
      commentary.text("You have defeated all of your enemies!");
      restartBtn.show();
    }  
  }

//restart the game
$("#restart").click(function() {
  location.reload();
  })

}

};