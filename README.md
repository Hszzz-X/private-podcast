# 🎙️ 私人播客生成器

## 工作流

1. **发送视频链接**到Nova（iMessage）
2. 说：`做成播客`
3. Nova自动：
   - 下载视频
   - 提取音频（1.25倍速）
   - 生成精讲稿（100%核心洞察）
   - 上传到播客RSS
4. 你收到：精讲稿 + 播客链接

## 文件结构

```
~/Podcasts/
├── audio/           # 音频文件（m4a）
├── scripts/         # 处理脚本
│   ├── process-video.sh    # 视频处理
│   ├── generate-script.sh  # 精讲稿生成
│   └── make-podcast.sh     # 主入口
├── rss/             # RSS feed
│   └── feed.xml
└── workspace/       # 临时文件
```

## 手动测试

```bash
# 测试工作流
bash ~/Podcasts/scripts/make-podcast.sh "https://www.youtube.com/watch?v=xxx" "测试标题"
```

## AI精讲稿要求

**不是总结！是精华提取！**

精讲稿必须包含：
1. **核心洞察**：完整保留视频的核心观点
2. **逻辑链条**：保留论证过程，不只是结论
3. **关键细节**：支持论据的重要信息
4. **可读性**：用中文，流畅表达
5. **结构化**：分章节，有小标题

输出格式：
```markdown
# [视频标题] 精讲稿

## 核心观点
[核心洞察]

## 详细内容
### 1. [章节1]
[完整内容，保留逻辑]

### 2. [章节2]
...

## 金句/要点
- 要点1
- 要点2

## 关键概念
- 概念1：解释
- 概念2：解释
```

## RSS部署

**方案A：GitHub Pages（推荐）**
1. 创建GitHub仓库
2. 启用GitHub Pages
3. 上传audio/和rss/
4. 修改RSS中的domain

**方案B：个人服务器**
- 用nginx托管
- 配置HTTPS

**方案C：第三方托管**
- Radiopublic
- Anchor.fm
- Buzzsprout

## 小宇宙订阅

小宇宙通过RSS订阅：
1. 复制你的RSS链接
2. 小宇宙 → "订阅" → "通过RSS订阅"
3. 粘贴链接

## 工具依赖

- `yt-dlp`：视频下载
- `ffmpeg`：音频处理
- `openclaw`：AI精讲稿生成

安装：
```bash
brew install yt-dlp ffmpeg
```
