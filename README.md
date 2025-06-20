# React Localization - Internationalize with i18next

- https://www.locize.com/blog/react-i18next

## create app

```shell
npx create-react-app my-app
```

## install packages

```shell
npm install i18next react-i18next i18next-browser-languagedetector
```

## NOTE:

- The tag <1> in this context is not a standard HTML or JSX tag. It's a placeholder used in internationalization (i18n) libraries, such as react-i18next or formatjs/react-intl, to mark up parts of a string for dynamic rendering, typically with React components.
- <1> is a placeholder for a React component or tag to be inserted into a translatable string.

It’s used in libraries like react-i18next for safe interpolation of components inside translated text.

```js
//i18n.js
const resources = {
  en: {
    translation: {
      part1: "Edit <1>src/App.js</1> and save to reload.",
    },
  },
};
```

### then in react

- Here, `<1>` and `</1>` correspond to the second child element (index 1) passed to <Trans> (React children are zero-indexed). So <1> might render as a <code> tag or some other React element.

```js
import { Trans } from "react-i18next";

//...

<Trans i18nKey="part1">
  Edit <code>src/App.js</code> and save to reload.
</Trans>;
```

## Separate translations from code

- move locals to public
- moved to `public/locales/en` etc
- use json call it `translation.json`

- install `i18next-http-backend`

```shell
npm install i18next-http-backend
```

- Adapt the i18n.js file to use the i18next-http-backend:

```js
i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend);
```

- Now the translations are loaded asynchronously, so make sure you wrap your app with a Suspense component to prevent this error: Uncaught Error: App suspended while rendering, but no fallback UI was specified.

```js
<Suspense fallback="...is loading">
  <App />
</Suspense>
```
