const currentStat = document.querySelectorAll(".box-hours");
const previosStat = document.querySelectorAll(".last-week-hours");
const statNum = currentStat.length;

const getText = (tf) => {
  switch (tf) {
    case "daily":
      return "Yesterday";
      break;
    case "weekly":
      return "Last week";
      break;
    default:
      return "Last month";
      break;
  }
};

const renderStats = () => {
  // Selects the current Clicked timeframe
  const timeFrame = document.querySelector(
    `input[name="timeframe"]:checked`
  ).value;

  for (let i = 0; i < statNum; i++) {
    const arr = [
      data[i].timeframes[timeFrame].current,
      data[i].timeframes[timeFrame].previous,
    ];

    currentStat[i].innerHTML = `${arr[0]}hrs`;
    previosStat[i].innerHTML = `${getText(timeFrame)} - ${arr[1]}hrs`;
  }
};

renderStats();
