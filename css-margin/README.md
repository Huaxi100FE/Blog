<h3>css之margin</h3>
<hr/>
<ul>
<li><strong>先理解占据尺寸和可视尺寸</strong>
<div>包含margin虚线的部分为占据部分，包含border实线部分为可视部分
</div>
<img src="images/1.png"/><img src="images/2.png"/>
</li>
<li><strong>css改变盒模型尺寸</strong>
<p>margin改变可视尺寸,可适用于没有设定width/height的普通block元素</p>
<del>不适用于float元素，absolute/fixed元素,table-cell元素,</del>
<strong>只适用于水平方向尺寸(margin:设置正值和负值都有作用)</strong>
<pre>
.block2{
    background-color: blue;
    margin: 200px 100px;
}
</pre>
<img src="images/3.png"/>
</li>
<li>
<p>margin改变占据尺寸,可适用于block/inline-block元素都可以</p>
<P>与元素有没有设定width/height值无关</P>
<strong>适用于水平和垂直方向尺寸(margin:设置正值和负值都有作用)</strong>
<br/>
<br/>
<br/>
</li>
<li>
<strong>普通元素的百分比margin都是相对容器的宽度计算的</strong>
<pre>
.block3-in{
    width: 400px;
    height: 400px;
    margin: 10% 10%;
    background-color: blue;
}
</pre>
<img src="images/4.png"/>
</li>
<li>
<strong>定位元素的百分比margin都是相对最近定位的祖先元素(relative/absolute/fixed)的宽度算的</strong>
<pre>
.block3-in{
    width: 400px;
    height: 400px;
    margin: 10% 10%;
    background-color: blue;
}
</pre>
<img src="images/5.png"/>
</li>
<li><strong>父集与子集元素重叠的情况</strong><br/>
<img width=780 height=400 src="images/7.png" alt="图片"/>
</li>
<strong>margin叠时的几种取值情况</strong><br/>
1,<br/><img width=864 height=400 src="images/8.png" alt="图片"/><br/>
2,<br/><img width=921 height=400 src="images/9.png" alt="图片"/><br/>
3,<br/><img width=558 height=400 src="images/10.png" alt="图片"/>
<li><strong>margin在左右布局的地步对齐可以派上用场</strong><br/>
<img width=632 height=300 src="images/11.png" alt="图片"/>
</li>
<li><strong>margin在图文混排的时候</strong><br/>
    <img width=534 height=300 src="images/12.png" alt="图片"/>
</li>
</ul>
<hr/>
<h3>css之padding</h3>
<ul>
<li><strong>padding在box-sizing:border-box时 还是能改变元素的布局</strong><br/>
    <img width=587 height=300 src="images/13.png" alt="图片"/><br/>
</li>
<li><strong>padding在以下的情况系会改变元素的布局</strong><br/>
    <img width=480 height=300 src="images/14.png" alt="图片"/><br/>
</li>
<li><strong>关于form表单中的padding默认情况</strong><br/>
    <img width=404 height=250 src="images/15.png" alt="图片"/><br/>
</li>
<li><strong>button在Firefox浏览器下的padding默认情况</strong><br/>
    <img width=439 height=300 src="images/16.png" alt="图片"/><br/>
    <strong>button在IE浏览器下的padding默认情况</strong><br/>
    <img width=439 height=300 src="images/17.png" alt="图片"/><br/>
    <strong>button在各个浏览器下的padding默认情况</strong><br/>
    <img width=439 height=300 src="images/18.png" alt="图片"/><br/>
    <strong>button解决办法</strong><br/>
    <img width=439 height=300 src="images/19.png" alt="图片"/><br/>
</li>
<li><strong>padding绘制简单的图标</strong><br/>
    <img width=439 height=300 src="images/20.png" alt="图片"/><br/>
</li>
</ul>












