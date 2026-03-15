export default function handler(req, res) {
  const stats = [
    {
      topic: 'ai',
      count: 1,
      total_seconds: 2820
    }
  ];

  res.status(200).json({ success: true, data: stats });
}
