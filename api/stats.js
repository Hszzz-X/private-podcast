// 获取统计数据
module.exports = async (req, res) => {
  // TODO: 从 Vercel KV 读取统计数据
  const stats = [
    {
      topic: 'ai',
      count: 1,
      total_seconds: 2820
    }
  ];

  res.status(200).json({ success: true, data: stats });
};
