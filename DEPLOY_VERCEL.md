# 一键部署到 Vercel

## 步骤 1：安装并登录 Vercel

```bash
npm install -g vercel
vercel login
```

## 步骤 2：部署后端 API

在 `private-podcast` 目录运行：

```bash
vercel deploy --prod
```

根据提示操作：
- 选择 "Link to existing project" -> 选择或创建项目
- Root Directory: `.` (默认)
- Build Command: 留空
- Output Directory: `.` (默认)
- Install Command: `npm install`

完成后会得到一个 URL，比如：
```
https://private-podcast-api.vercel.app
```

**记住这个 URL！**

## 步骤 3：更新前端 API 地址

打开 `index.html`，找到第 237 行左右：

```javascript
const API_BASE = 'http://localhost:3000/api';
```

改为（**替换成你实际的 Vercel URL**）：

```javascript
const API_BASE = 'https://private-podcast-api.vercel.app/api';
```

## 步骤 4：重新提交到 GitHub

```bash
git add index.html DEPLOY.md package.json vercel.json api/
git commit -m "添加 Vercel 部署配置"
git push
```

GitHub Pages 会自动更新。

## 步骤 5：测试

打开浏览器访问：
```
https://hszzz-x.github.io/private-podcast/
```

试试播放、筛选、保存进度功能！

---

## 注意事项

### 当前限制
- 数据存储使用硬编码（不会持久化）
- 重启服务器后数据会丢失

### 持久化存储（后续）
要实现真正的数据持久化，需要：
1. 在 Vercel 项目中添加 **KV 存储**
2. 修改 API 代码使用 KV

### 本地开发
启动本地开发服务器：

```bash
vercel dev
```

访问：http://localhost:3000

---

## API 端点

部署后，你的 API 将在这些地址可用：

- `GET /api/episodes` - 获取所有内容
- `GET /api/episodes?topic=ai` - 按主题筛选
- `POST /api/episodes` - 添加新内容
- `GET /api/playback/:episodeId` - 获取播放进度
- `POST /api/playback/:episodeId` - 保存播放进度
- `GET /api/stats` - 获取统计数据
