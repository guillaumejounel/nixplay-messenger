const messages = {
  sent: [
    "Yay, photo envoyée !",
    "J'ai bien transmis la photo !",
    "Photo bien expédiée !",
    "La photo est en route !",
    "La photo vient de partir !",
    "Photo transmise !"
  ],
  error: [
    "Oops, je n'ai pas pu envoyer la photo :/",
    "Désolé, je ne peux pas transmettre la photo",
    "Impossible d'envoyer la photo..."
  ],
  thanks: [
    "De rien :|",
    "Allons bon, c'est normal",
    "Bah oui bah quoi :|",
    ":|",
    "Pr",
    "Pr pr",
    "Prr pr",
    "🐙",
    "🐥",
    "Woumf"
  ]
};

const getMessage = type => {
  return (
    (messages[type] || ":|") &&
    messages[type][Math.floor(Math.random() * messages[type].length)]
  );
};

module.exports = { getMessage };
