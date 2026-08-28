# 准备工作

## 安装软件

### 安装任意一个 AI 编程工具，用于生成代码

- <a href="https://trae.ai/" target="_blank" rel="noreferrer" style="display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;"><img src="/assets/logo/trae.svg" alt="Trae" style="width: 20px; height: 20px;" /> Trae</a>
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


<PromptTypewriter title="发送下面提示词给AI" text="帮我以全局的方式安装Skill widget-js/skills"/>

安装成功后，在 AI 编程工具中输入 `/widget` 即可调用 Skill，辅助你完成桌面组件的开发工作。

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
