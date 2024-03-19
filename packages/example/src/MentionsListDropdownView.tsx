import { MentionsListDropdownProps } from 'milkdown-mentions-plugin';

const names = [
  'John',
  'Emma',
  'Michael',
  'Sophia',
  'William',
  'Olivia',
  'James',
  'Ava',
  'Alexander',
  'Isabella',
  'Daniel',
  'Mia',
  'Matthew',
  'Krzysztof',
  'Charlotte',
  'David',
  'Amelia',
  'Joseph',
  'Emily',
  'Jackson',
  'Addison',
];

export const MentionsListDropdownView: React.FC<MentionsListDropdownProps> = ({
  onMentionItemClick,
  queryText,
}) => {
  const options = names.filter(name => name.includes(queryText));

  if (!options.length) {
    return (
      <div
        style={{
          padding: '5px',
          background: 'red',
        }}
      >
        Found nothing
      </div>
    );
  }
  return (
    <ul
      data-testid="mentioning-dropdown-list"
      style={{
        minWidth: '100px',
        padding: '5px',
        marginTop: 0,
        background: 'red',
        listStyleType: 'none',
      }}
    >
      {options.map(option => (
        <li key={option}>
          <button
            data-testid="mentioning-dropdown-list-item"
            style={{ padding: '4px' }}
            onClick={e => {
              e.stopPropagation();
              onMentionItemClick(option, 'https://test/user/' + option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
