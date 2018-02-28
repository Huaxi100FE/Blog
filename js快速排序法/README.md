<h3>JavaScript快速排序</h3>
<div>快速排序的过程，需要三步实现</div>
<hr/>
<ul>
<li>第一，在数组中，选择一个元素作为'基准(pivot)'。</li>
<li>第二，所有小于'基准'的元素，都移到'基准'的左边；所有大于'基准'的元素，都移到'基准'右边。</li>
<li>对'基准'左边和右边的两个子集，不断重复第一步和第二步，直到所有的子集只剩下一个元素为止。</li>
</ul>
<div>举一个栗子：对数组<strong>[ 23, 3, 5, 1, 6, 7, 9, 10, 0]</strong>;进行排序</div>
<div>
 第一步，选取中间元素作为<strong style="color:blue;">6</strong>基数<br/>
 [ 23, 3, 5, 1, <strong style="color:blue;">6</strong>, 7, 9, 10, 0]<br/>
 第二步，按照顺序，将每个元素与"基准"进行比较，形成两个子集，一个"小于6"，另一个"大于等于6"。<br/>
  [3, 5, 1, 0, <strong style="color:blue;">6</strong>, 23, 7, 9, 10]<br/>
 第三步，对两个子集不断重复第一步和第二步，直到所有子集只剩下一个元素为止。<br/>
 ...<br/>
 ...<br/>
 ...<br/>
 [0, 1, 3, 5, 6, 7, 9, 10, 23]
</div>
<pre>
function quickSort(arr){
        /*如果数组长度只有一个，返回arr*/
        if(arr.length<=1){return arr;}
        /*第一步：找到基数(pivot)*/
        var pivotIndex=Math.ceil(arr.length/2);
        var pivot=arr[pivotIndex];
        var left=[],right=[];
        /*第二步：开始比较，如果小于基数，移到基准左边，若大于基数，移到基准右边*/
        for(var i=0; i<arr.length; i++){
            if(arr[i]<arr[pivotIndex]){
                left.push(arr[i]);
            }
            else if(arr[i]>arr[pivotIndex]){
                right.push(arr[i]);
            }
        }
        /*第三步：不断重复前面两步*/
        return quickSort(left).concat([pivot],quickSort(right));
    }
    console.log(quickSort([99,7,6,5,4,66,44,3,2,45]));//[2, 3, 4, 5, 6, 7, 44, 45, 66, 99]
</pre>
