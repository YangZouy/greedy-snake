# greedy-snake
this is repo for typescript practise( create a game using typescript,less,webpack)

这个小练习是跟着b站上typescript教程（尚硅谷 李立超老师）做的
主要练习typescript语法，发现就是面向对象的思维，如果以前经常写c++或者java应该很快上手
说一下简要流程
1、项目搭建
npm i -y初始化项目 得到package.json文件
自建tsconfig.jon文件、webpack.config.js文件
需要对这三个文件进行配置 以及根据配置的依赖进行安装
安装全部依赖命令：npm i 
安装指定依赖命令：npm i -D less less-loader css-loader 
上述三个依赖主要是对css样式进行解析

2、创建重要文件
src/index.ts 在里面写ts代码 主要进行页面交互（如果要修改样式的话，引入import './style/index.less'文件）
src/style/index.less 在里面写具体的样式
src/index.html 样式对应的html模板

完成之后 有关webpack的指令调用：
npm run build 重新编译（在webpack.config.json文件中的scripts项进行了配置）
npm start 在谷歌浏览器中渲染

之后下载了依赖或者其它都需要进行重新编译

3、搭建静态界面
写html和less文件得到大致的框架和需要的元素信息

1）创建主容器 main
2) 创建游戏的界面stage
3) 创建计分的面板等等
...
ps:这里的搭建样式需要仔细一点，我之前把蛇的相对位置写错了，后面蛇移动的时候移不动，找了好久的bug...真的需要写的仔细一点

4、完成各个类
这一步就是面向对象的思维了，食物建成一个类，蛇是一个类...
在每个类中写相应的逻辑代码就行



