// 获取所有 episodes（支持主题筛选）
module.exports = async (req, res) => {
  const { topic } = req.query;

  // TODO: 从 Vercel KV 读取数据
  // 这里暂时返回示例数据
  const episodes = [
    {
      id: 1,
      title: '设计师在AI时代出路很清晰：远离Figma，尽早写代码',
      url: 'https://hszzz-x.github.io/private-podcast/audio/20260315_014557_.m4a',
      description: 'Cursor设计负责人Ryo Lu深度对话：设计师如何转型为独立构建者（Builder）。从Figma到代码，从分工到独立创造。',
      topic: 'ai',
      source_type: 'podcast',
      duration_seconds: 2820,
      publish_date: '2026-03-15',
      created_at: new Date().toISOString()
    }
  ];

  let filtered = episodes;
  if (topic) {
    filtered = episodes.filter(ep => ep.topic === topic);
  }

  res.status(200).json({ success: true, data: filtered });
};

// 添加新 episode
module.exports.post = async (req, res) => {
  const { title, url, description, topic, source_type, duration_seconds, publish_date } = req.body;

  // TODO: 保存到 Vercel KV

  res.status(200).json({ success: true, data: { id: Math.floor(Math.random() * 1000) } });
};
