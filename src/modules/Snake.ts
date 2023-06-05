// 创建蛇类
class Snake{
  // 因为蛇包含两个部分：蛇头+蛇身体
  head: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;

  // 构造函数
  constructor() {
    this.element = document.getElementById('snake')!;
    // 这里选择的是id为snake里面的div标签 因为只返回一个，所以返回的肯定是蛇头
    // querySelectorAll才是返回多个
    this.head = document.querySelector("#snake > div") as HTMLElement;
    // 下面为什么不用querySelectorAll是因为它每次获取到的元素都是固定的
    // 如果蛇身体增加了。。。这里没太清楚
    this.bodies = this.element.getElementsByTagName('div');
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    // 需要判断是否撞墙了
    if(value === this.X) {
      return;
    }
    if(value < 0 || value > 290) {
      throw new Error('蛇撞墙了！');
    }

    // 1、先左右掉头 如果存在第二个头且要变化的坐标位置与蛇头的第二个节点位置相同 则说明要掉头了
    if(this.bodies[1] && value === (this.bodies[1] as HTMLElement).offsetLeft) {
      // 判断是右掉头
      if(value > this.X) {
        // 使得掉头无效
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
      
    }
  
    // 先移动身体，再移动蛇头
    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }

  set Y(value: number) {
    if(value === this.Y) {
      return;
    } 
    if(value < 0 || value > 310) {
      throw new Error('蛇撞墙了!');
    }

    // 解决蛇掉头的问题
    // 2、后上下掉头 如果存在第二个头且要变化的坐标位置与蛇头的第二个节点位置相同 则说明要掉头了
    if(this.bodies[1] && value === (this.bodies[1] as HTMLElement).offsetTop) {
      // 判断是右掉头
      if(value > this.Y) {
        // 使得掉头无效
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
      
    }
    
    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
    
  }

  // 增加蛇的身体
  addBody() {
    // 向蛇的容器中添加一个div标签
    // beforeend:结束标签之前的位置
    this.element.insertAdjacentHTML('beforeend','<div></div>');
  }
  // 移动蛇的身体 后面一个div需要移动到前一个div的位置 蛇头是不需要移动的
  // 因为在按下按键的时候蛇头的位置就已经发生了变化
  // 位置变化是需要从最后一个开始 到倒数第二个结束
  moveBody() {
    for(let i = this.bodies.length - 1;i>0;i--) {
      let x = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i-1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = x + 'px';
      (this.bodies[i] as HTMLElement).style.top = y + 'px';
    }
  }

  // 判断是否会撞到自己
  checkHeadBody() {
    // 如果蛇头的位置与蛇身的任何一个位置重合，就是相撞了
    for(let i = 1; i<this.bodies.length - 1;i++) {
      let bd = this.bodies[i] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('撞到自己啦！！！');
      }
    }
    
  }
}

export default Snake;