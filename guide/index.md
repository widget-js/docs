---
next:
  text: '创建第一个组件'
  link: '/guide/create-project'
---

# 准备工作

## 简介
:::tip
开发一个桌面组件，其实就是开发一个前端网页
  :::

<span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/assets/logo/qq.png" alt="QQ" style="width: 20px; height: 20px; object-fit: contain; object-position: center;" /> QQ群：701784679</span>

<span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/assets/logo/gmail.svg" alt="Gmail" style="width: 20px; height: 20px; object-fit: contain; object-position: center;" /> 邮箱：rtugeek@gmail.com</span>


## 安装软件

### 安装任意一个 AI 编程工具，用于生成代码

- <a href="https://trae.ai/" target="_blank" rel="noreferrer" style="display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;"><img src="/assets/logo/trae.svg" alt="Trae" style="width: 20px; height: 20px;" /> Trae国际版（大陆用户推荐使用）</a>
- <a href="https://chatgpt.com" target="_blank" rel="noreferrer" style="display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;"><img src="/assets/logo/openai.svg" alt="ChatGPT" style="width: 20px; height: 20px;" /> ChatGPT</a>
- <a href="https://cursor.ai/" target="_blank" rel="noreferrer" style="display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;"><img src="/assets/logo/cursor.svg" alt="Cursor" style="width: 20px; height: 20px;" /> Cursor</a>
- <a href="https://claude.ai/" target="_blank" rel="noreferrer" style="display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;"><img src="/assets/logo/claudecode.svg" alt="Claude Code" style="width: 20px; height: 20px;" /> Claude Code</a>

### 安装 Node.js

- <a href="https://nodejs.org" target="_blank" rel="noreferrer" style="display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;"><img src="/assets/logo/nodejs.svg" alt="Node.js" style="width: 20px; height: 20px;" /> Node.js</a>（建议 v22 及以上版本）

## 安装桌面组件客户端

#### 从本站下载

[![Download](https://img.shields.io/badge/Installer-000000?style=plastic&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzI4MTA5MDY3MTMwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyNTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxwYXRoIGQ9Ik0wIDBoNDg2LjU5MnY0ODYuNTkySDB6IiBmaWxsPSIjRjI1MDIyIiBwLWlkPSI0MjUxIj48L3BhdGg+PHBhdGggZD0iTTUzNy40MDggMEgxMDI0djQ4Ni41OTJINTM3LjQwOHoiIGZpbGw9IiM3RkJBMDAiIHAtaWQ9IjQyNTIiPjwvcGF0aD48cGF0aCBkPSJNMCA1MzcuNDA4aDQ4Ni41OTJWMTAyNEgweiIgZmlsbD0iIzAwQTRFRiIgcC1pZD0iNDI1MyI+PC9wYXRoPjxwYXRoIGQ9Ik01MzcuNDA4IDUzNy40MDhIMTAyNFYxMDI0SDUzNy40MDh6IiBmaWxsPSIjRkZCOTAwIiBwLWlkPSI0MjU0Ij48L3BhdGg+PC9zdmc+)](https://pdd.schoolyun.com/widget.exe)

#### 从 GitHub 下载

[![Download](https://img.shields.io/badge/GitHub-EXE-blue?logo=github)](https://widgetjs.cn)

## 安装 Skill

### 方式一：通过 AI 提示词安装（推荐）

<PromptTypewriter title="发送下面提示词给AI" text="帮我以全局的方式安装Skill widget-js/skills"/>

### 方式二：手动安装（访问不了GitHub时使用）

1. 下载 Skill 压缩包：[skills.zip](http://widgetjs.cn/skills.zip)

2. 解压到全局 Skill 目录：
   - **Windows**：`C:\Users\<你的用户名>\.agents\skills\`
   - **macOS / Linux**：`~/.agents/skills/`

3. 解压完成后，确保目录结构如下：
   ```
   .agents/
   └── skills/
       └── widget/
           └── ... Skill 文件
   ```

安装成功后，重启下AI开发工具，在 AI 编程工具中输入 `/widget` 即可调用 Skill，辅助你完成桌面组件的开发工作。

## 配置MCP Server

<PromptTypewriter title="发送下面提示词给AI" speed=20 text="帮我配置下这个mcp服务
{
  &quot;mcpServers&quot;: {
    &quot;widgetjs&quot;: {
      &quot;transport&quot;: &quot;streamableHttp&quot;,
      &quot;url&quot;: &quot;http://127.0.0.1:3606/mcp&quot;
    }
  }
}" />
