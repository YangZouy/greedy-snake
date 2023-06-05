// 创建ScorePanel类
class ScorePanel {
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 表示分数
  score = 0;
  // 表示等级
  level = 1;
  // 等级上限
  MaxLevel :number;
  // 分数上涨多少等级就加1级
  add :number;

  // 构造函数 进行初始化
  constructor(maxlevel :number = 10,add :number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.MaxLevel = maxlevel;
    this.add = add;
  }

  // 加分函数
  addScore() {
    // 需要一个字符串 所以使用拼接
    this.scoreEle.innerHTML = ++this.score + '';
    // 逻辑是加到多少分了就需要提升一个等级
    if(this.score % this.add == 0) {
      this.levelUp();
    }
  }

  // 提升等级
  // 等级有上限
  levelUp() {
    if(this.level < this.MaxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }

}

// 对ScorePanel类进行一次检测
// const sp = new ScorePanel(10,10);
// for(let i = 0;i<200;i++) {
//   sp.addScore();
// }

// 将当前模块中的类暴露出去
export default ScorePanel

