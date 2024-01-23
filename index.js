function createBall(canvas, radius) {
  const x = Math.random() * (canvas.width - 2 * radius) + radius;
  const y = Math.random() * (canvas.height - 2 * radius) + radius;
  const dx = (Math.random() - 0.5) * 5;
  const dy = (Math.random() - 0.5) * 5;
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return { x, y, radius, color, dx, dy };
}

function drawBall(context, ball) {
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fillStyle = ball.color;
  context.fill();
  context.closePath();
}

function updateBall(ball, canvas) {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
    ball.dx = -ball.dx;
    ball.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.dy = -ball.dy;
    ball.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

function resizeCanvas(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initEventListeners(canvas, balls) {
  canvas.addEventListener("click", (event) =>
    balls.push(createBall(canvas, 30))
  );
}

function animate(context, canvas, balls) {
  requestAnimationFrame(() => animate(context, canvas, balls));
  const { width, height } = canvas;
  context.clearRect(0, 0, width, height);
  balls.forEach((ball) => {
    updateBall(ball, canvas);
    drawBall(context, ball);
  });
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
resizeCanvas(canvas);

const balls = Array.from({ length: 3 }, () => createBall(canvas, 30));

initEventListeners(canvas, balls);

animate(context, canvas, balls);
