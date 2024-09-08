export default function handler(req, res) {
  const questions = [
    {
      id: 1,
      question: "Qual é a carta mais rara de Yu-Gi-Oh?",
      options: ["Dragão Branco de Olhos Azuis", "Dragão Negro de Olhos Vermelhos", "Mago Negro", "Exodia, o Proibido"],
      answer: "Exodia, o Proibido"
    },
    
    {
      "id": 2,
      "question": "Qual é o nome do protagonista da série Yu-Gi-Oh! Duel Monsters?",
      "options": ["Yugi Muto", "Seto Kaiba", "Joey Wheeler", "Bakura"],
      "answer": "Yugi Muto"
  },
  {
      "id": 3,
      "question": "Qual é o nome do dragão branco de Seto Kaiba?",
      "options": ["Dragão Negro de Olhos Vermelhos", "Dragão Branco de Olhos Azuis", "Dragão do Caos", "Dragão Meteoro"],
      "answer": "Dragão Branco de Olhos Azuis"
  },
  {
      "id": 4,
      "question": "Quantas cartas Exodia existem no jogo original?",
      "options": ["3", "4", "5", "6"],
      "answer": "5"
  },
  {
      "id": 5,
      "question": "Qual o nome da cidade onde ocorre o Battle City Tournament?",
      "options": ["Cidade Domino", "Cidade Pegasus", "Cidade Kaiba", "Cidade Millennium"],
      "answer": "Cidade Domino"
  },
  {
      "id": 6,
      "question": "Quem é o criador do card game Magic and Wizards na série Yu-Gi-Oh!?",
      "options": ["Maximillion Pegasus", "Seto Kaiba", "Solomon Muto", "Mokuba Kaiba"],
      "answer": "Maximillion Pegasus"
  },
  {
      "id": 7,
      "question": "Qual é o monstro mais forte que Yugi Muto controla?",
      "options": ["Dark Magician", "Dark Magician Girl", "Slifer, the Sky Dragon", "Obelisk, the Tormentor"],
      "answer": "Slifer, the Sky Dragon"
  }
]
  res.status(200).json(questions);
}