let board = [null, 'circle', 'cross', null, null, null, null, null, null];

function init() {
  render();
}
function render() {
  const contenDiv = document.getElementById("content");

  let htmltable = '<table>';
  for (let i = 0; i < 3; i++) {
    htmltable += '<tr>';
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      let symbol = '';
      if (board[index] === "circle") {
        symbol = "o";
      } else if (board[index] === "cross") {
        symbol = "x";
      }
      htmltable += `<td>${symbol}</td>`;
    }
    
htmltable +='</tr>'
   
  }
  htmltable += '</table>';
  contenDiv.innerHTML = htmltable;
}
