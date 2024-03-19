import {
  Editor as MilkdownEditor,
  rootCtx,
  defaultValueCtx,
} from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { useEditor } from '@milkdown/react';
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
          ctx.update(mentionsPluginOptions.key, prev => ({
            ...prev,
            view: MentionsListDropdownView,
          }));
        })
        .use(commonmark)
        .use(mentions),
    [defaultMarkdownValue],
  );

  return editor;
};
