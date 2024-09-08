import axios from 'axios';

export default async function handler(req, res) {
  const { limit = 6, offset = 0} = req.query;

  try {
    const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${limit}&offset=${offset}`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({error: 'Erro ao obter dados das cartas'})
  }
}