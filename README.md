# Cloning tutorial

To proceed you have to install `nodejs` and `yarn`. You don't need to install yarn, it's just the standard I use.

### Installing dependencies

To install the necessary dependencies, in your terminal, run `yarn` or `npm install` (if you didn't install yarn on your machine).

Afterwards you add the following in the `tsconfig.json` file after the "extends":
```
{
 "extends": "@upleveled/eslint-config-upleveled/tsconfig.base.json",
 "compilerOptions": {
   "jsxImportSource": "@emotion/react"
 }
}
```

If you want to use `@emotion` in your files, you have to import it at the top in the following way:
```
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
```


### Start the dev server

When working on your project you can already view the changes you make live in the browser. To accomplish that, while being in the correct folder type in your folder either `yarn start` or `npm run start`.

Happy hacking!
