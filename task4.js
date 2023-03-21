function calculate() {
    const radius = document.getElementById("radius").value;
    const area = Math.PI * radius ** 2;

    const sqrt = document.getElementById("sqrt").value;
    const sqrtResult = Math.sqrt(sqrt);

    const cos = document.getElementById("cos").value;
    const cosResult = Math.cos(cos * Math.PI / 180);

    const output = `The area of the circle with radius ${radius} is ${area.toFixed(2)}.<br>The square root of ${sqrt} is ${sqrtResult.toFixed(2)}.<br>The cosine of ${cos} degrees is ${cosResult.toFixed(2)}.`;

    document.getElementById("output").innerHTML = output;
  }