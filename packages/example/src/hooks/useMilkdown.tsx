import {
  Editor as MilkdownEditor,
  rootCtx,
  defaultValueCtx,
  editorViewOptionsCtx,
} from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { useEditor } from '@milkdown/react';
import { nord } from '@milkdown/theme-nord';
import {
  mentionsPlugin,
  mentionsPluginOptions,
} from 'milkdown-mentions-plugin';

import { MentionsListDropdownView } from '../MentionsListDropdownView';

type UseMilkdownProps = {
  defaultMarkdownValue: string;
};

export const useMilkdown = ({ defaultMarkdownValue }: UseMilkdownProps) => {
  const mentions = mentionsPlugin();

  const editor = useEditor(
    root =>
      MilkdownEditor.make()
        .config(ctx => {
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, defaultMarkdownValue);
          ctx.update(editorViewOptionsCtx, prev => ({
            ...prev,
            attributes: {
              class: 'w-full px-2 py-4 box-border max-w-full',
            },
          }));
          ctx.update(mentionsPluginOptions.key, prev => ({
            ...prev,
            view: MentionsListDropdownView,
          }));
        })
        .config(nord)
        .use(commonmark)
        .use(mentions),
    [defaultMarkdownValue],
  );

  return editor;
};
