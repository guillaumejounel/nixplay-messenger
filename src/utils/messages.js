const messages = {
  sent: [
    "Yay, photo envoyée !",
    "J'ai bien transmis la photo !",
    "Photo bien expédiée !",
    "La photo est en route !",
    "La photo vient de partir !",
    "Photo transmise !",
    "Ça part ! 🚀",
    "Allez hop, j'envoie ça ! ✉️"
  ],
  error: [
    "Oops, je n'ai pas pu envoyer la photo :/",
    "Désolé, je ne peux pas transmettre la photo",
    "Impossible d'envoyer la photo...",
    "Quelque chose ne fonctionne pas... 😔",
    "On m'a mal conçu, j'arrive pas à envoyer la photo 😢",
    "Je crois que je viens de buguer, pas moyen d'envoyer ça 🤯"
  ],
  welcome: [
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
  ],
  greet: ["Yo moi c'est Bobby ! À qui veux-tu envoyer tes photos ? :|"],
  email_ok: [
    "Ok, c'est noté, j'envoie tout à cette adresse email maintenant ✨",
    "Ça marche, je transfère tout à cet email à partir de maintenant 🚀"
  ],
  hi: ["Bonjour :|", "Yo !", "Hey hey hey :)", "Salut !"]
};

const getMessage = type => {
  return (
    (messages[type] || ":|") &&
    messages[type][Math.floor(Math.random() * messages[type].length)]
  );
};

module.exports = { getMessage };
