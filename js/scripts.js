function charAbilityCreator(event) {
  event.preventDefault();

  let charName = document.querySelector(`input#char-name`).value;
  let charHeight = parseInt(document.querySelector(`input#char-height`).value);
  let charAge = parseInt(document.querySelector(`input#char-age`).value);
  let favFood = document.getElementById(`fav-food`).value;
  let favActivity = document.querySelector("input[name=activity]:checked").value;

  let charAbility;
  if (charHeight >= 78 && favFood == ` Steak` && favActivity == ` Swimming`) {
    charAbility = ` Super Strength`;
  } else if (charHeight >= 60 && favFood == ` Beans` && favActivity == ` Swimming`) {
    charAbility = ` Super Speed`;
  } else if (favFood == ` Salad` && favActivity == ` Swimming`) {
    charAbility = ` Self Confidence`;
  } else if (favFood == ` Salad` && favActivity == ` Bird Watching`) {
    charAbility = ` Animal Control`;
  } else if (favFood == ` Salad` && favActivity == ` Watching Movies`) {
    charAbility = ` Earth Manipulation`;
  } else if (favFood == ` Steak` && favActivity == ` Swimming`) {
    charAbility = ` Persuasion`;
  } else if (favFood == ` Steak` && favActivity == ` Bird Watching`) {
    charAbility = ` Animal Control`;
  } else if (favFood == ` Steak` && favActivity == ` Watching Movies`) {
    charAbility = ` Possession`;
  } else if (favFood == ` Fried Potatoes` && favActivity == ` Swimming`) {
    charAbility = ` Self-Multiplication`;
  } else if (favFood == ` Fried Potatoes` && favActivity == ` Bird Watching`) {
    charAbility = ` Animal Powers`;
  } else if (favFood == ` Fried Potatoes` && favActivity == ` Watching Movies`) {
    charAbility = ` Detachable Limbs`;
  } else if (favFood == ` Beans` && favActivity == ` Swimming`) {
    charAbility = ` Produce Bouncing Gold Balls`;
  } else if (favFood == ` Beans` && favActivity == ` Bird Watching`) {
    charAbility = ` Phasing`;
  } else if (favFood == ` Beans` && favActivity == ` Watching Movies`) {
    charAbility = ` Converting Sound To Light`;
  } else {
    charAbility = ` Die Instantly`;
  }


  document.getElementById(`output-name`).innerText = charName;
  document.getElementById(`output-height`).innerText = charHeight;
  document.getElementById(`output-age`).innerText = charAge;
  document.getElementById(`output-fav-food`).innerText = favFood;
  document.getElementById(`output-fav-act`).innerText = favActivity;
  document.getElementById(`output-ability`).innerText = charAbility;
}

window.addEventListener(`load`, function() {
  const form = document.getElementById(`character-creation`);
  form.addEventListener(`submit`, charAbilityCreator);
});


// Alternative method for pulling form input inner text.
// let favFd = document.getElementById(`fav-food`);
// let favFood = favFd.options[favFd.selectedIndex].innerText;