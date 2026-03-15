// 获取/更新播放进度
module.exports = async (req, res) => {
  const { episodeId } = req.query;

  if (req.method === 'GET') {
    // TODO: 从 Vercel KV 读取播放进度
    res.status(200).json({ success: true, data: { position_seconds: 0, completed: false } });
  } else if (req.method === 'POST') {
    // 保存播放进度
    const { position_seconds, completed } = req.body;

    // TODO: 保存到 Vercel KV

    res.status(200).json({ success: true });
  }
};
