import { Milkdown as MilkdownEditor } from '@milkdown/react';

import { useMilkdown } from './hooks/useMilkdown';

export const App: React.FC = () => {
  useMilkdown({ defaultMarkdownValue: 'abc' });

  return (
    <div>
      <MilkdownEditor />
    </div>
  );
};
