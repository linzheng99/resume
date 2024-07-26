interface Props {
  details: string
  matchs: string[]
  color?: string
}

function changeColor(str: string, substringsToColor: string[], color: string) {
  const regex = new RegExp(`(${substringsToColor.join('|')})`, 'gi');
  const parts = str.split(regex);

  return parts.map((part) =>
    substringsToColor.some(substring => substring.toLowerCase() === part.toLowerCase()) ? (
      <span style={{ color: color, "font-weight": 'bold' }}>{part}</span>
    ) : (
      part
    )
  );
}

export default function MatchString(props: Props) {
  const { details, matchs, color = '#ff6500' } = props

  return (
    <>
      {changeColor(details, matchs, color)}
    </>
  );
};
