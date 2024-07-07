// code your solution here
function superbowlWin(record) {
    // Use the find() method to search for an object where result is "W"
    let win = record.find(game => game.result === "W");
    
    // If win is defined (i.e., a win was found), return the year
    // Otherwise, return undefined
    return win ? win.year : undefined;
  }
  const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    // Add more years as needed
  ];
  
  console.log(superbowlWin(record)); // Example output: "2015"