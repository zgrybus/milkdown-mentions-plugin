import { Milkdown as MilkdownEditor } from '@milkdown/react';

import { useMilkdown } from './hooks/useMilkdown';

const defaultValue = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum orci, vehicula sit amet nisi at, semper congue enim. Nunc porta sapien eu arcu faucibus, a suscipit lorem dictum. Aenean molestie, sem vitae imperdiet aliquam, erat leo volutpat augue, sed consectetur nunc felis a tellus. Sed lobortis erat turpis, quis tincidunt ligula faucibus nec. In eget turpis a ipsum venenatis molestie. Etiam fermentum tortor nibh, non aliquam dolor rhoncus a. Duis pellentesque finibus sapien, sed ultricies magna congue in. Morbi vitae viverra libero. Integer tristique facilisis tortor in ultricies. Praesent id congue augue. Aliquam laoreet nulla sed viverra maximus. Praesent feugiat turpis magna, vitae sollicitudin purus sodales in.

Ut sagittis nisi eget ligula hendrerit, id placerat nisl tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sagittis in magna sit amet placerat. Vivamus rutrum risus ante, et maximus turpis tempor vulputate. Praesent lorem urna, rhoncus fringilla congue non, malesuada nec nibh. Duis aliquam orci ut consequat elementum. Aliquam erat volutpat. Morbi sed leo imperdiet, scelerisque metus nec, pretium felis. Aenean eu congue metus, sit amet imperdiet orci.

Vestibulum sed venenatis dui, et ornare lorem. Aliquam sed purus bibendum nunc efficitur eleifend. Mauris mi mauris, consectetur a magna vitae, ullamcorper ullamcorper tellus. Donec sollicitudin nisl vitae orci cursus accumsan. Nulla in maximus felis. Nam vel turpis elit. Sed tempor eu dui at faucibus. Quisque vitae lobortis magna. Nulla vitae lectus at metus tristique condimentum in at urna. Sed porttitor nibh consectetur nisl blandit lobortis. Praesent ex tortor, congue eu leo eu, ornare mattis augue.

Integer sed massa ullamcorper, commodo lorem non, pretium leo. Nam in nisi rutrum, rhoncus tellus ut, molestie urna. Aenean auctor risus leo, eu faucibus urna gravida sollicitudin. Pellentesque at mollis lorem. Nullam dui lacus, laoreet vel bibendum non, ullamcorper sit amet ipsum. In et leo ac nisi facilisis tempus. Praesent purus tellus, ornare non felis et, ornare posuere tortor. Morbi semper ornare suscipit. Ut cursus et felis vel cursus. Pellentesque et ultricies odio, quis pulvinar lectus. Quisque posuere a nunc quis interdum. Fusce et nulla dui. Nullam ac elit vel lectus ultricies imperdiet vitae non augue. Aenean hendrerit leo quis pharetra eleifend.

Integer vel euismod sapien. Praesent fringilla non nisl sed aliquam. Nam vitae mollis metus, id mattis arcu. Nam ut mi id tortor posuere varius. Sed eu libero non turpis malesuada lacinia. Maecenas iaculis mollis feugiat. Nulla facilisi. Nunc ac posuere libero.


`;

export const App: React.FC = () => {
  useMilkdown({ defaultMarkdownValue: defaultValue });

  return (
    <div className="mx-auto mt-32 w-11/12">
      <h1 className="mb-2 text-center">Type @a to see dropdown</h1>
      <h2 className="mb-10 text-center">
        then click on any name and you will see that plugin transforms it to the
        hyperlink
      </h2>
      <MilkdownEditor />
    </div>
  );
};
