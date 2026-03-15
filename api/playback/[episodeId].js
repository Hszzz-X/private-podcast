export default function handler(req, res) {
  const { episodeId } = req.query;

  if (req.method === 'GET') {
    res.status(200).json({ success: true, data: { position_seconds: 0, completed: false } });
  } else if (req.method === 'POST') {
    res.status(200).json({ success: true });
  }
}
