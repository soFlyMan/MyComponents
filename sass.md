# sass

不支持中文

```
ul {
  li {
    a {
      display: block;
      &: hover
    }
  }
}
==>

ul li a { display:  block; }
a:hover:{}


```

#### 定义变量
$color: #ccc

**SASS提供四个编译风格的选项：**

- nested：嵌套缩进的css代码，它是默认值。
- expanded：没有缩进的、扩展的css代码。
- compact：简洁格式的css代码。
- compressed：压缩后的css代码。

生产环境当中，一般使用最后一个选项。

`sass --style compressed test.sass test.css`

你也可以让SASS监听某个文件或目录，一旦源文件有变动，就自动生成编译后的版本。
```
　　// watch a file
	sass --watch input.scss:output.css
　　
　　// watch a directory
　　
　　sass --watch app/sass:public/stylesheets
```

**运算符两边要有空格**

## @mixin fn($arguments)定义函数
引入函数
@include fn(1)
