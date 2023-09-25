// code your solution here
function superbowlWin(record) {
    const winningYear = record.find(entry => entry.result === "W");
  
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined;
    }
  }

  // Example usage:
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  const result = superbowlWin(record);
  console.log(result); // Outputs the year of the win (e.g., "2015") or undefined if no win is found 