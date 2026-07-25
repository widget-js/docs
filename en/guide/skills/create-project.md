# Create Project (AI)

Use the `widget-create` skill to quickly scaffold a widget-js desktop widget project via your AI assistant.

## Install

```bash
npx skills@latest add widget-js/create-widget
```

During installation, make sure both `widget-create` and `widget-new` are selected.

## Usage

Tell your AI assistant:

```text
Use Skill: widget-create
Create a React desktop widget project in the current folder and use npmmirror
```

`widget-create` will ask:

- current folder or a target folder (absolute/relative path)
- template type (React recommended, Vue deprecated)
- whether to use npmmirror
- overwrite confirmation when the target folder is not empty

After the project is created, run in the project root:

```bash
npm install
npm run dev
```
