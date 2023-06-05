// 添加游戏控制类 用来控制游戏的进程
import Food from "./Food";
import ScorePanel from "./scorePanel";
import Snake from "./Snake";

class GameControl {
  
  food :Food;
  snake :Snake;
  scorePanel :ScorePanel;
  direction :string = '';
  isLive = true;

  constructor() {
    // 进行初始化 
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel(10,1);

    this.init();

  }
  
  init() {
    // 因为在js中this的指向非常的恶心
    // 这里是给document绑定的事件，所以this指向的是document
    // 但是在index.ts中需要显示的是gc中direction的值，this需要指向gc，所以需要使用bind来绑定当前的对象
    document.addEventListener('keydown',this.keydownHandler.bind(this));

    // 让蛇动起来
    this.run();
  }

  // 处理键盘按下的响应事件
  keydownHandler(event :KeyboardEvent) {
    this.direction = event.key;
  }

  // 使蛇能够运行起来
  run() {
    // 先获取到蛇的位置
    let x = this.snake.X;
    let y = this.snake.Y;

    // 蛇的运行方向是根据direction来确定的
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        x -= 10;
        break;
      case "ArrowRight":
      case "Right":
        x += 10;
        break;
    }
    // 将变换后的位置赋值给蛇
    // 因为判断蛇的位置是在snake里面的
    // 如果撞墙了的话不能直接throw error出来 而是需要进行捕获然后在
    // 界面显示原因
    try{
      this.snake.X = x;
      this.snake.Y = y;
    } catch (e) {
      alert(e);
      this.isLive = false;
    }
    
    // 判断在移动的过程中是否吃到了食物
      this.checkEat(x,y);

    // 开始一个定时调用（定时器调用自身）
    this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1)*30);
  }

  // 检测是否吃到了食物
  checkEat(x:number,y:number) {
    // 如果当前的蛇的位置与食物的位置重合 则吃到了
    if(x === this.food.X && y === this.food.Y) {
      // 蛇的身体增加一节
      this.snake.addBody();
      this.snake.moveBody();
      // 分数多一分
      this.scorePanel.addScore();
      // 食物的位置变化
      this.food.change();
    }
  }
}

export default GameControl;
