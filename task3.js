function sortArray() {
  const input = document.getElementById("numbers").value;
  const arr = input.split(",").map(Number);

  const ascendingArr = arr.slice().sort((a, b) => a - b);
  const descendingArr = arr.slice().sort((a, b) => b - a);

  const output = `You have entered values of ${arr},<br>and your values after being sorted descending ${descendingArr},<br>and your values after being sorted ascending ${ascendingArr}`;

  document.getElementById("output").innerHTML = `<h2>${output}</h2>`;
}