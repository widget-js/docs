# Skills

WidgetJS now provides two AI Skills for desktop widget development:

- `widget-create`: create a desktop widget project
- `widget-new`: create a widget module inside a project

Both skills come from the same install source, so you can install them together in one step.

## Install Skills

Run:

```bash
npx skills@latest add widget-js/create-widget
```

During installation, make sure both `widget-create` and `widget-new` are selected:

```shell
Need to install the following packages:
skills@1.5.20
Ok to proceed? (y) y

Source: `https://github.com/widget-js/create-widget.git`
Repository cloned
Found 2 skills

Select skills to install
● widget-create
● widget-new
```

## `widget-create`

`widget-create` initializes a new widget-js desktop widget project.

It guides you through:

- choosing the target directory
- choosing a template, with React recommended and Vue deprecated
- deciding whether to use `npmmirror`
- confirming overwrite when the target directory is not empty
- copying the template files
- writing `.npmrc` automatically when `npmmirror` is enabled

Example:

```text
Use Skill: widget-create
Create a React desktop widget project in the current folder and use npmmirror
```

Or simply describe it in natural language:

```text
Create a widget-js desktop widget project in ./my-widget with the React template
```

After creation, you can continue with:

```bash
npm install
npm run dev
```

## `widget-new`

`widget-new` creates a concrete widget module inside a React template project.

It generates and wires up:

- `src/widgets/<name>/<name>.widget.ts`
- `src/widgets/<name>/<name>-widget-view.tsx`
- `src/widgets/<name>/<name>-config-view.tsx` (optional)
- `src/widgets/<name>/<name>-widget-routes.ts`
- route registration in `src/widgets/widget-router.ts`

It will ask for:

- the widget name
- whether a config page is needed

Then it handles English naming, route integration, and a responsive base layout automatically.

Example:

```text
Use Skill: widget-new
Create a weather widget with a config page
```

Or:

```text
Use Skill: widget-new
Create a pomodoro widget without a config page
```

## Recommended Flow

1. Install the skills
2. Use `widget-create` to create a project
3. Use `widget-new` to add actual widgets
4. Run `npm install` and `npm run dev` for local development

## Related Pages

- [Create Project](/en/guide/create-project)
- [Create Widget](/en/guide/create-widget)
