## Workflow

- Create component folder e.g. Button in respective file (atoms, molecules, organisms)
- Create Button.tsx
- Create Button.stories.ts/tsx
- Create index.ts
  - export as below:
    - export { Button, default } from "./Button";
    - export type { ButtonProps } from "./Button";
- Update parent-folder/index.ts (e.g atoms/index.ts)
  - export { Button, default } from "./Button/Button";
    export type { ButtonProps } from "./Button/Button";
