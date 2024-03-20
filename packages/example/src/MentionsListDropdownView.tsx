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
  queryText,
  onMentionItemClick,
}) => {
  const options = names.filter(name => name.includes(queryText));

  if (!options.length) {
    return <div>Found nothing</div>;
  }
  return (
    <ul data-testid="mentioning-dropdown-list">
      {options.map(option => (
        <li key={option}>
          <button
            data-testid="mentioning-dropdown-list-item"
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
