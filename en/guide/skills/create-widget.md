# Create Widget (AI)

Use the `widget-new` skill to generate a new widget module in a React template project and wire it into routing automatically.

## Prerequisites

Make sure you have installed the skills and you already have a project (you can create one via [Create Project (AI)](/en/guide/skills/create-project)).

## Install

```bash
npx skills@latest add widget-js/create-widget
```

During installation, make sure both `widget-create` and `widget-new` are selected.

## Usage

Tell your AI assistant:

```text
Use Skill: widget-new
Create a weather widget with a config page
```

Or:

```text
Use Skill: widget-new
Create a pomodoro widget without a config page
```

`widget-new` will ask:

- the widget name
- whether a config page is needed

Then it generates and wires up:

- `src/widgets/<name>/<name>.widget.ts`
- `src/widgets/<name>/<name>-widget-view.tsx`
- `src/widgets/<name>/<name>-config-view.tsx` (optional)
- `src/widgets/<name>/<name>-widget-routes.ts`
- `src/widgets/widget-router.ts` (auto-updated)
