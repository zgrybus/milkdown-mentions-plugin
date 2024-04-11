[![GitHub license](https://img.shields.io/github/license/zgrybus/milkdown-mentions-plugin)](https://github.com/zgrybus/milkdown-mentions-plugin/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/milkdown-mentions-plugin)](https://www.npmjs.com/package/milkdown-mentions-plugin)

- [Overview](#overview)
- [Using library](#using-library)

## Overview

This library wraps [Milkdown](https://milkdown.dev/) and allows you to tag people, for example. **Of course, you can tag anything or anyone you want, because the library provides options to render a list of people or things you want to tag**, as well as the page to which the user will be redirected after clicking on the tag. 
**Additionally, the library transforms the tag into a link.**

![Demo](https://github.com/zgrybus/milkdown-mentions-plugin/blob/master/assets/plugin_demo.gif)

## Using library

Using `npm`
```bash
npm i --save milkdown-mentions-plugin
```
Using `yarn`
```bash
yarn add  milkdown-mentions-plugin
```

and then import the given components as shown below ( **of course you need to setup Milkdown** )
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

export const MyMentionsPluginDropdownView: React.FC<MentionsListDropdownProps> = ({ 
  queryText, // current query text ( if we type @Name, then queryText is Name )
  onMentionItemClick // function that converts @Name text into link with appropriate url
}) => {
    return (
      [...my list]
        .filter(text => text.includes(queryText))
        .map(text => (
          <button 
            key={text} 
            onClick={() => onMentionItemClick(text, `https://facebook.com/user/${text}`)}
          >
            {text}
          </button>
        ))
    )
}
```

## Troubleshoots


### After selecting the thing I want to tag, each subsequent word is a link

![Demo](https://github.com/zgrybus/milkdown-mentions-plugin/blob/master/assets/subsequent_word_troubleshoot.gif)
This is a problem that many people who use Milkdown struggle with. To fix this, just add the following plugin mentioned in this issue: https://github.com/orgs/Milkdown/discussions/1114