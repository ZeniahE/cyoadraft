const storyText = document.getElementById("story-text");

function choosePath(choice) {
  // first choice
  if (choice === "trail") {
    storyText.textContent =
      "You step onto the trail, feeling the crunch of leaves underfoot. The deeper you go, the darker it gets, until you see a faint light ahead. Do you approach the light or turn back?";
    createChoices(["Approach the light", "Turn back"], ["light", "back"]);
  } else if (choice === "stay") {
    storyText.textContent =
      "You decide to stay put, feeling the breeze and listening to the forest's sounds. After a while, you notice a small creature peeking at you from the trees. Do you try to approach it or remain still?";
    createChoices(
      ["Approach the creature", "Remain still"],
      ["creature", "still"]
    );
  }

  // second choice set

  // choice trail
  if (choice === "light") {
    storyText.textContent =
      "As you approach the light you hear a child's voice call out to you. 'Mom? Is that you?', she says. She sounds freightened. Do you go towards her voice or do you leave?";
    createChoices(["Make sure she is okay", "Go home"], ["checkin", "home"]);
  } else if (choice === "back") {
    storyText.textContent =
      "You decide to return to the edge of the forest. The sounds of the child made you feel uneasy. They made you.. fearful. As you are walking back a boulder drops in front of you. Barely missing your face. You gasp.";
    createChoices(
      ["Climb over the rock", "Go around it"],
      ["climb", "goAround"]
      // as you climb an eagle swoops down to steal your backback, if you walk around the log you step in quicksand
    );
  }
  // choice stay
  if (choice === "creature") {
    storyText.textContent =
      "You approached the creature. It is small, cute, and covered in dirt. It has soft beady eyes and looks soft. Do you try to pet it?";
    createChoices(["Pet the creature", "Keep walking"], ["pet", "walk"]);
  } else if (choice === "still") {
    storyText.textContent =
      "You remain still. The creature stares at you for a few seconds and then scurries away. You are bored now. Do you want to go home?";
    createChoices(
      ["Go home", "Change your mind and go down the trail"],
      ["home", "trail"]
    );
  }

  // third choice set

  // choice light
  if (choice === "checkin") {
    storyText.textContent =
      "Now why would you decide to be a risk taker? Did no one teach you to not go towards creepy voices in the forest?? It was a demon child. She took your soul. You are dead now.";
    createChoices(["Restart"], ["refresh"]);
  } else if (choice === "home") {
    storyText.textContent =
      "You decide to return home. You have common sense. High 5 for being awesome sauce!";
    createChoices(["High 5!!"], ["refresh"]);
  }

  // choice back
  if (choice === "climb") {
    storyText.textContent =
      "Of course you would try to climb the rock. Ha, lesbians. As you were climbing an eagle swooped down and snatched your backpack. He was in fact not an #ally.";
    createChoices(["Restart"], ["refresh"]);
  } else if (choice === "goAround") {
    storyText.textContent = "You got pooped on. Idiot.";
    createChoices(["Walk of SHAME."], ["refresh"]);
  }

  // choice creature
  if (choice === "pet") {
    storyText.textContent =
      "I am in mourning for your parents because they had to raise such an IDIOT. The creature bit you. You cried and called your mom because you're a pussy.";
    createChoices(["Silence. The entire ride home."], ["refresh"]);
  } else if (choice === "walk") {
    storyText.textContent = "You have common sense. Hooray! You Win!!";
    createChoices(["Serve cunt"], ["cunt"]);
  }
  // choice still
  if (choice === "home") {
    storyText.textContent =
      "You arrive home. You look at the time, it is nearly 8pm. You hop on twitch because it is Wednesday. ";
    createChoices(["Keep Slaying!!"], ["refresh"]);
  }
  if (choice === "refresh") {
    location.reload();
  }
}
function createChoices(choices, actions) {
  const storybook = document.querySelector(".storybook");

  // Remove old buttons
  document.querySelectorAll(".choice").forEach((button) => button.remove());

  // Add new choices
  choices.forEach((choiceText, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choiceText;
    button.onclick = () => choosePath(actions[index]);
    storybook.appendChild(button);
  });
}
