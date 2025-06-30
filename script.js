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
        symbol = generateAnimatedCircleSVG();
      } else if (board[index] === "cross") {
        symbol = generateYellowAnimatedXSVG();
      }
      htmltable += `<td>${symbol}</td>`;
    }
    
htmltable +='</tr>'
   
  }
  htmltable += '</table>';
  contenDiv.innerHTML = htmltable;
}

function generateAnimatedCircleSVG() {
  return `
<svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(-90 35 35)">
    <circle 
      cx="35" cy="35" r="30"
      stroke="#00B0EF"
      stroke-width="6"
      fill="none"
      stroke-dasharray="188.4"
      stroke-dashoffset="188.4">
      <animate 
        attributeName="stroke-dashoffset"
        from="188.4"
        to="0"
        dur="0.125s"
        fill="freeze"
        begin="0s"
      />
    </circle>
  </g>
</svg>
  `;
}
function generateYellowAnimatedXSVG() {
  return `
<svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
  <style>
    .line {
      stroke: #FFC000;
      stroke-width: 6;
      stroke-linecap: round;
      stroke-dasharray: 84;
      stroke-dashoffset: 84;
      animation: draw-line 125ms ease-out forwards;
    }

    @keyframes draw-line {
      to {
        stroke-dashoffset: 0;
      }
    }
  </style>

  <!-- Diagonale von oben links nach unten rechts -->
  <line class="line" x1="15" y1="15" x2="55" y2="55" />

  <!-- Diagonale von oben rechts nach unten links -->
  <line class="line" x1="55" y1="15" x2="15" y2="55" />
</svg>
  `;
}