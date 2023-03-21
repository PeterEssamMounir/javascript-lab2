function sortArray() {
  const input = document.getElementById("numbers").value;
  const arr = input.split(",").map(Number);

  const descendingArr = arr.slice().sort((a, b) => b - a);
  const ascendingArr = arr.slice().sort((a, b) => a - b);

  const output = `You have entered values of ${arr.join(", ")},<br>and your values after being sorted descending ${descendingArr.join(", ")},<br>and your values after being sorted ascending ${ascendingArr.join(", ")}`;

  document.getElementById("output").innerHTML = `<h2>${output}</h2>`;
}