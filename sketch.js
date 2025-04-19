let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(30, 30, 50);

  for (let b of bubbles) {
    b.move();
    b.show();
  }

  fill(255);
  textAlign(CENTER);
  textSize(36);
  text("你好，我是湯硯哲", width / 2, height / 2 - 40);

  textSize(20);
  text("我熱愛創作、喜歡寫程式，也對教育科技充滿興趣。", width / 2, height / 2 + 10);
  text("希望未來能結合科技與教育，幫助更多人學習！", width / 2, height / 2 + 40);
}

// 泡泡動畫
class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(5, 15);
    this.speed = random(0.5, 2);
  }

  move() {
    this.y -= this.speed;
    if (this.y < -this.r) {
      this.y = height + this.r;
      this.x = random(width);
    }
  }

  show() {
    noStroke();
    fill(135, 206, 250, 150);
    ellipse(this.x, this.y, this.r * 2);
  }
}
