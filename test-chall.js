// A memory game uses a HTML table where each table cell contains a letter character (A-Z). Each click on a table cell should append the cell's character to the game.result string until the player clicks a cell that contains a character that is already in the string. That click, and all subsequent clicks, should not change the string. The goal of the game is to create the longest possible string before hitting a letter that has already occured. Implement the function setup which when passed the id of the HTML table, registers the click handlers and implements the logic of the game. For example, after clicking on cells [0,0], [1,1], [0,1] and [1,0] on the table below (the 1st index indicates the row, and the 2nd indicates the column).

var game = {
    result: "",
    getResult: function () {
        return this.result;
    },
    setup: function (id) {
        // Your code goes here
    }
};

// Example case
document.body.innerHTML = `
  <table id="game-matrix">
    <tbody>
      <tr><td>A</td><td>J</td></tr>
      <tr><td>A</td><td>B</td></tr>
    </tbody>
  </table>`;

let gameObj = Object.assign({}, game);
gameObj.setup("game-matrix");
document.getElementsByTagName('td')[0].click();
document.getElementsByTagName('td')[3].click();
document.getElementsByTagName('td')[1].click();
document.getElementsByTagName('td')[2].click();
console.log(gameObj.result); // prints "ABJ"