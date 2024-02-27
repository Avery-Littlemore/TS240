interface Movable {
  speed: number;
  move(): void;
}

class Van implements Movable {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  move() {
    console.log('Moving');
  }
}