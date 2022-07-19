export default function HighlightWord(props) {
  const { searchWords, textToHighlight } = props;
  const highLightWords = searchWords.filter((keyword) => {
    return keyword !== "";
  });
  console.log(searchWords);
  const color = [
    "#f3ff33",
    "#e285f5",
    "#c8fae9",
    "#f5e385",
    "#fe4164",
    "#fcf7c2",
    "#9cff33",
    "#dffac8",
    "#ff33e9",
    "#fefce5",
    "#33fffc",
    "#33e0ff",
    "#c8d9fa",
    "#fac8e9",
    "#c0f7a7",
    "#a7f3f7",
    "#85f5d8",
    "#85aaf5",
  ];
  let tempArray = [];
  let keyValue = 0;
  for (let i = 0; i < highLightWords.length; i++) {
    tempArray[i] = [highLightWords[i], color[i]];
  }

  return textToHighlight && searchWords.length ? (
    <div>
      {textToHighlight
        .toLowerCase()
        .split(
          new RegExp(
            `(?<=${highLightWords.join("|")})|(?=${highLightWords.join("|")})`
          )
        )
        .map((str) => {
          if (highLightWords.includes(str)) {
            let colorIndex = 0;
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i][0] == str) {
                colorIndex = i;
              }
            }
            return (
              <span
                key={`${str}` + `${keyValue++}`}
                style={{ backgroundColor: color[colorIndex] }}
              >
                {str}
              </span>
            );
          } else {
            return str;
          }
        })}
    </div>
  ) : (
    <>{textToHighlight || ""}</>
  );
}
