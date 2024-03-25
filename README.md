- [Overview](#overview)
- [Using library](#using-library)

## Overview

This library allows you to tag people, for example. **Of course, you can tag anything or anyone you want, because the library provides options to render a list of people or things you want to tag**, as well as the page to which the user will be redirected after clicking on the tag. 
**Additionally, the library transforms the tag into a link.**

![Demo](https://github.com/zgrybus/milkdown-mentions-plugin/blob/master/plugin_demo.gif)

## Using library

Using `npm`
```bash
npm i --save milkdown-mentions-plugin
```
Using `yarn`
```bash
yarn add  milkdown-mentions-plugin
```

and then import the given components as shown below
```typescript
import { Editor as MilkdownEditor, rootCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { useEditor } from '@milkdown/react';
import {
  mentionsPlugin,
  mentionsPluginOptions,
} from 'milkdown-mentions-plugin';

import { YourComponent } from '../YourComponent';

export const useMilkdown = () => {
  const mentions = mentionsPlugin();

  const editor = useEditor(
    root =>
      MilkdownEditor.make()
        .config(ctx => {
          ctx.set(rootCtx, root);
          ctx.update(mentionsPluginOptions.key, prev => ({
            ...prev,
            view: MyMentionsPluginDropdownView, 
          }));
        })
        .use(commonmark)
        .use(mentions),
    [],
  );

  return editor;
};
```

```typescript
import { MentionsListDropdownProps } from 'milkdown-mentions-plugin'

export const MyMentionsPluginDropdownView: React.FC<MentionsListDropdownProps> = ({ queryText, onMentionItemClick }) => {
    return [...my list].filter(text => text.includes(queryText)).map(text => (
      <button key={text} onClick={() => onMentionItemClick(text, `https://facebook.com/user/${text}`)}>{text}</button>
    ))
}
```
