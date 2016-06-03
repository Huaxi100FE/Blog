<h1><strong>canvas�����ٲ��</strong></h1>
<hr>
<ul>
  <li>
    <strong style='font-size:16px;'>HTML5����(Canvas)Ԫ��</strong>
    <hr/>
    <pre>&lt;canvas id="myCanvas" width="500" height="300"&gt;</pre>
    <strong>�������֧�ֻ���(canvas)ʱ�ı���</strong>
    <pre>&lt;canvas id="myCanvas" width="500" height="300"&gt;
        your browser doesn't support canvas!
    &lt;/canvas&gt;</pre>
    <strong>2d context</strong>
    <pre>var context = canvas.getContext('2d');</pre>
    <strong>Webgl context (3d)</strong>
    <pre>var context = canvas.getContext('webgl');</pre>
  </li>
  <li>
    <strong style='font-size:16px;'>ͼ��</strong>
    <hr/>
    <strong>���Ʒ���</strong>
    <pre>context.rect(x, y, width, height);
      context.fill();   //������ 
      context.stroke(); //�ʴ�����
    </pre>
    <strong>�������</strong>
    <pre>context.fillRect(x, y, width, height);
    </pre>
    <strong>���Ʒ��εı߿�</strong>
    <pre>context.strokeRect(x, y, width, height);
    </pre>
    <strong>����Բ��</strong>
    <pre>
         context.arc(x, y, radius, 0, Math.PI * 2,false); //���沼�������ǹ涨���Ƶķ���false��Ĭ�ϵ�˳ʱ����� true����ʱ����ơ�
         context.fill(); 
         context.stroke();
    </pre>
  </li>
  <li>
    <strong style='font-size:16px;'>���</strong>
    <hr/>
    <strong>�����ʽ</strong>
    <pre>context.fillStyle = 'red'; //Ҳ�������ַ�����16���ƣ�16���Ƽ�д��RGB��RGBA
          context.fill();
    </pre>   
    <strong>����(�ʴ�)��ʽ</strong>
    <pre>context.strokeStyle = 'red';//Ҳ�������ַ�����16���ƣ�16���Ƽ�д��RGB��RGBA
         context.stroke();
    </pre>
    <strong>���Խ���</strong>
    <pre>
          var grd = context.createLinearGradient(x1, y1, x2, y2); //�涨����ķ��� ���ȡ�
          grd.addColorStop(0, 'red');   //�涨���Խ�������λ�� 0-1֮�䣬����ɫ��
          grd.addColorStop(1, 'blue');  //�涨���Խ���ĵڶ�����ɫ�����λ�� before��λ��-1֮�䣬����ɫ����������������������
          grd.addColorStop(1, 'blue');  //�涨���Խ���Ľ���λ�ã�����ɫ��
          context.fillStyle = grd;
          context.fill();
    </pre>
    <strong>���򽥱�</strong>
    <pre>
          var grd = context.createRadialGradient(x1, y1, radius1, x2, y2, radius2); //һ��Բ����һ��Բ�ľ��򽥱�
          grd.addColorStop(0, 'red');  //�����Խ���ԭ������
          grd.addColorStop(1, 'blue');
          context.fillStyle = grd;
          context.fill();
    </pre>
    <strong>ͼ��</strong>
    <pre>
          var imageObj = new Image();
          imageObj.onload = function() {
          var pattern = context.createPattern(imageObj, 'repeat'); //ʹ��ͼƬ���canvas�ı���
          context.fillStyle = pattern;
           context.fill();
          };
          imageObj.src = 'path/to/my/image.jpg';
    </pre>
    <strong>����</strong>
    <pre>context.lineJoin = 'miter|round|bevel';</pre> //�涨�߶ν������ʽ Ĭ����miter
    <strong>��ͷ</strong>
    <pre class="prettyprint">context.lineCap = 'butt|round|square';
    </pre>
    <strong>��Ӱ</strong>
    <pre>
        context.shadowColor = 'black'; //��Ӱ����ɫ
        context.shadowBlur = 20;       //��Ӱ��ģ���̶�
        context.shadowOffsetX = 10;    //��Ӱ��X��ƫ��λ��
        context.shadowOffsetY = 10;    //��Ӱ��Y��ƫ��λ��
    </pre> 
    <strong>Alpha(͸��)��ȫ��������ɫ͸���� Ĭ����1��͸����</strong>
    <pre>context.globalAlpha = 0.5; // between 0 and 1
    </pre>
  </li>
  <li>
    <strong style='font-size:16px;'>��ɫ��ʽ�����������е��õ���ɫ�ĳ�����</strong>
    <hr/>
    <strong>�ַ���</strong>
    <pre>context.fillStyle = 'red';
    </pre>
    <strong>16����</strong>
    <pre>context.fillStyle = '#ff0000';
    </pre>
    <strong>16���Ƽ�д</strong>
    <pre>context.fillStyle = '#f00';
    </pre>
    <strong>RGB</strong>
    <pre>context.fillStyle = 'rgb(255,0,0)';
    </pre>
    <strong>RGBA</strong>
    <pre>context.fillStyle = 'rgba(255,0,0,1)';
    </pre>
  </li>
  <li>
    <strong style='font-size:16px;'>·��</strong>
    <hr/>
    <strong>��ʼ·��</strong>
    <pre>context.beginPath(); //��ʼһ���µ�·��
    </pre>
    <strong>����</strong>
    <pre>context.lineTo(x, y);
    </pre> 
    <strong>����</strong>
    <pre>context.arc(x, y, radius, startAngle//��ʼ����ֵ, endAngle//��������ֵ, counterClockwise//���Ƶķ��� ����ֵ);
    </pre>
    <strong>����ؐ��������</strong>
    <pre>context.quadraticCurveTo(cx//���Ƶ��X������, cy//���Ƶ��Y������, x//�������X������, y//�������Y������);
    </pre>  
    <strong>����ؐ��������</strong>
    <pre>context.bezierCurveTo(cx1//��һ�����Ƶ��X������, cy1//��һ�����Ƶ��Y������, cx2//�ڶ������Ƶ��X������, cy2//�ڶ������Ƶ��Y������, x//�������X������, y//�������Y������);
    </pre>
    <strong>�ر�·��(�պ�·��)</strong>
    <pre>context.closePath();
    </pre>
  </li>
  <li>
    <strong style='font-size:16px;'>ͼƬ</strong>
    <hr/>
    <strong>��ͼ</strong>
    <pre>
        var imageObj = new Image();
        imageObj.onload = function() {
        context.drawImage(imageObj, x, y);
        };
        imageObj.src = 'path/to/my/image.jpg';
        </pre>
    <strong>ָ���ߴ续ͼ</strong>
    <pre>
          var imageObj = new Image();
          imageObj.onload = function() {
          context.drawImage(imageObj, x, y, width, height);
          };
          imageObj.src = 'path/to/my/image.jpg';
    </pre>
    <strong>�ü�ͼƬ</strong>
    <pre>
          var imageObj = new Image();
          imageObj.onload = function() {
          context.drawImage(imageObj, sx, sy, sw, sh, dx, dy, dw, dh);
          };
          imageObj.src = 'path/to/my/image.jpg';
    </pre>
  </li>
  <li>
    <strong style='font-size:16px;'>�ı�</strong>
    <hr/>
    <strong>д����</strong>
    <pre>
        context.font = ' bold 40px Arial'; //�����������ʽ �������õ���ʽ��font-size,font-family,font-weight,font-variant,font-style.
        context.fillStyle = 'red';         //���û����������ɫ
        context.fillText('Hello World!', x, y); //������
    </pre>
    <strong>д�ο�����</strong>
    <pre>
          context.font = '40pt Arial'; //�����������ʽ �������õ���ʽ��font-size,font-family,font-weight,font-variant,font-style.
          context.strokeStyle = 'red'; //���û����������ɫ
          context.strokeText('Hello World!', x, y);   //�ʴ�����
    </pre>
    <strong>����</strong>
    <pre>context.font = 'bold 40px Arial';
    </pre>
    <strong>б��</strong>
    <pre>context.font = 'italic 40px Arial';
    </pre>
    <strong>���뷽ʽ</strong>
    <pre>context.textAlign = 'start|end|left|center|right';  //ˮƽ���뷽ʽ
    </pre>
    <strong>���ֻ���</strong>
    <pre>context.textBaseline = 'top|hanging|middle|alphabetic|ideographic|bottom';  //��ֱ���뷽ʽ
    </pre>
    <strong>��ȡ�ı����</strong>
    <pre>var width = context.measureText('Hello world').width;  //��ȡ���ֵĿ��
    </pre>
  </li>
  <li>
    <strong style='font-size:16px;'>����</strong>
    <hr/>
    <strong>�ƶ�</strong>
    <pre>context.translate(x, y);
    </pre>
    <strong>������С</strong>
    <pre>context.scale(x, y);
    </pre>
    <strong>��ת</strong>
    <pre>context.rotate(radians);
    </pre>
    <strong>ˮƽ��ת</strong>
    <pre>context.scale(-1, 1);
    </pre>
    <strong>���·�ת</strong>
    <pre>context.scale(1, -1);
    </pre>
    <strong>�Զ���任</strong>
    <pre>context.transform(a, b, c, d ,e, f);
    </pre>
    <strong>���ñ任</strong>
    <pre>context.setTransform(a, b, c, d ,e, f);
    </pre>
    <strong>�и�</strong>
    <pre>context.transform(1, sy, sx, 1, 0, 0);
    </pre>
    <strong>����</strong>
    <pre>context.setTransform(1, 0, 0, 1, 0, 0);
    </pre>
  </li>
  <li>
    <strong style='font-size:16px;'>״̬�洢����Ҫ��</strong>
    <hr/>
    <strong>�洢</strong>
    <pre>context.save(); //һ�������restore()�ɶԳ���
    </pre>
    <strong>�ָ�</strong>
    <pre>context.restore();
    </pre>
  </li>    
  <li>
    <strong style='font-size:16px;'>�ü�(��·���ü�)</strong>
    <hr/>
    <strong>�ü�</strong>
    <pre>// draw path here//����·��
          context.clip();
    </pre>
  </li> 
  <li>
    <strong style='font-size:16px;'>ͼ������</strong>
    <hr/>
    <strong>�ڻ����ϻ���ͼ��(������ͬʵ�ֵĹ���Ҳ��ͬ)</strong>
    <pre>
        context.drawImage(img,x,y); //�ڻ����϶�λͼ��
        context.drawImage(img,x,y,width,height);//�ڻ����϶�λͼ�񣬲��涨ͼ��Ŀ�Ⱥ͸߶ȣ�
        context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);//(����sx,sy��ʾ��ͼƬ��ʲôλ�ÿ�ʼ,swidth,sheight�Ĵ�С����Ⱦ��x,y��λ�ã�������Ⱦ�Ŀ����wight,height)����ͼ�񣬲��ڻ����϶�λ�����еĲ��֣�
        context.drawImage(canvas,x,y);//����Ҳ������canvas���Ƶ�context�ϡ�����Ҳ���������֣���������һ����
    </pre>
    <strong>��ȡͼ������</strong>
    <pre>
          var imageData = context.getImageData(x, y, width, height);
          //����imageData����data��width��height��Ϣ
          var data = imageData.data; //��ȡdata��Ϣ
    </pre>
    <strong>�������ص�</strong>
    <pre>
        var imageData = context.getImageData(x, y, width, height);
        var data = imageData.data;
        var len = data.length;
        var i, red, green, blue, alpha;
        for(i = 0; i &lt; len; i += 4) {
          red = data[i];
          green = data[i + 1];
          blue = data[i + 2];
          alpha = data[i + 3];
        }
    </pre>
    <strong>������������ص�</strong>
    <pre>
          var imageData = context.getImageData(x, y, width, height);
          var data = imageData.data;
          var x, y, red, green, blue, alpha;
          for(y = 0; y &lt; imageHeight; y++) {
            for(x = 0; x &lt; imageWidth; x++) {
              red = data[((imageWidth * y) + x) * 4];
              green = data[((imageWidth * y) + x) * 4 + 1];
              blue = data[((imageWidth * y) + x) * 4 + 2];
              alpha = data[((imageWidth * y) + x) * 4 + 3];
            }
          }
    </pre>
    <strong>����ͼ������</strong>
    <pre>
         context.putImageData(imageData, x, y);//��һ����֪��imageData�Żش�canvas�����е�x,y��λ�á�
         context.putImageData(imageData,x,y,dirtyX,dirtyY,dirtyW,dirtyH);//��imageData�е�dirtyX,dirtyYλ�ÿ�ʼ��dirtyW,dirtyH��С�����ݻ��Ƶ�������x+dx,y+dy��λ��
         //��drawImage�����е����Ǻ���dirtyX,dirtyY��λ�ƻ��ۼ�ǰ���x��y��
         ����ͼʾ����<br/>
         <img src='images/put.png'>
    </pre>
    <strong>����imageData</strong>
    <pre>
        var imgData=context.getImageData();//��ȡimageDa
        var imgData=context.createImageData(width,height);//����imageD
    </pre>
  </li> 
  <li>
    <strong style='font-size:16px;'>Data URLs</strong>
    <hr/>
    <h5>��ȡData URL</h5>
    <pre>var dataURL = canvas.toDataURL();
    </pre>
    <h5>ʹ��Data URL����ͼ��</h5>
    <pre>
         var imageObj = new Image();
         imageObj.onload = function() {
         context.drawImage(imageObj, 0, 0);
         };
         imageObj.src = dataURL;
    </pre>
  </li> 
  <li>
    <strong style='font-size:16px;'>�ϳ�(ȫ������)</strong>
    <hr/>
    <strong>�ϳɲ���</strong> //Ҳ���ǵ�������Ƶ�ͼ�ε�ѹ��ǰ����Ƶ�ͼ�����ǳ��ֵ�״̬
    <pre>context.globalCompositeOperation = 'source-atop|source-in|source-out|source-over|destination-atop|destination-in|destination-out|destination-over|lighter|xor|copy';
    </pre>
    <img src="images/canvas-composite-operations.png" alt="HTML5 Canvas Composite Operations">
  </li>
  <li>
      <strong style='font-size:16px;'>����ĳ���λ���Ƿ��ڻ��Ƶ�������</strong>
      <hr/>
      <strong>����ĳ��</strong> //Ҳ���ǲ���ĳ���λ���Ƿ��ڻ��Ƶ�������
      <pre>cxt.isPointInPath(x,y); //���ز���ֵ
      </pre>
    </li>       
</ul>