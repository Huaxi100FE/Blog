##不固定的内容在固定容器中的垂直居中##

###方法一:table-cell###
<pre>
.parent{
	display: table-cell;
	vertical-align: middle;
}
.child{
	line-height: 1.2;
}
</pre>
###方法二:translateY###
<pre>
.parent{
	position: relative;
}
.child{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
</pre>
###方法三：flex###
<pre>
.parent{
	display: flex;
	align-items: center;
}
</pre>

ps:方法一、三注意兼容性问题。
