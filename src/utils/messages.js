const messages = {
  sent: [
    "Yay, photo envoyée !",
    "J'ai bien transmis la photo !",
    "Photo bien expédiée !",
    "La photo est en route !",
    "La photo vient de partir !",
    "Photo transmise !",
    "Ça part ! 🚀",
    "Allez hop, j'envoie ça ! ✉️",
    "J'envoie ça ! ✈️"
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
    "Woumf",
    "T'inquiètes c'est normal 😘",
    "À votre service 🙏"
  ],
  greet: [
    "Yo moi c'est Bobby ! À qui veux-tu envoyer tes photos ? :|",
    "Hey je suis Bobby, dis-moi à qui tu veux envoyer tes photos et je m'occupe de tout ! 👌"
  ],
  email_ok: [
    "Ok, c'est noté, j'envoie tout à cette adresse email maintenant ✨",
    "Ça marche, je transfère tout à cet email à partir de maintenant 🚀",
    "Je retiens, toutes les photos seront envoyées à cette adresse 👍"
  ],
  hi: ["Bonjour :|", "Yo !", "Hey hey hey :)", "Salut !", "Coucou 👾", "Hello!"]
};

const getMessage = type => {
  return (
    (messages[type] || ":|") &&
    messages[type][Math.floor(Math.random() * messages[type].length)]
  );
};

module.exports = { getMessage };
