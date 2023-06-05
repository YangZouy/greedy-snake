// 食物类
class Food {
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;
  
  // 构造函数
  constructor() {
    // 从页面中获取到food元素将其赋值给element属性
    // 加上！表示该元素不能为空
    this.element = document.getElementById("food")!;
  }

  // 以下两个方法主要是获取到食物的位置
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  // 改变食物的位置 随机变化 且有一个范围 需要是10的倍数 因为蛇是10px的移动距离
  // random取到(0,29) 加上round就能够取到[0,29] *10就是10的倍数
  change() {
    const left = Math.round(Math.random() * 28) * 10;
    const top = Math.round(Math.random() * 30) * 10;
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }


}

// 对自己写好的类进行一个检测
// const food = new Food();
// console.log(food.X,food.Y)
// food.change();
// console.log(food.X,food.Y);

export default Food