---
title: 常用jasmine 断言
tags: 前端,测试,Jasmine
grammar_cjkRuby: true
---


__1.比较x和y是否相等__
```markdown
 expect(x).toEqual(y);
```
__2. expect(x).not.toEqual(y);__

//比较x和y是否不相等

__3. expect(x).toBe(y);__

//比较x和y是否是相同的对象

__4. expect(x).toMatch(pattern);__

//比较x是否匹配pattern正则

__5. expect(x).toBeDefined();__

//x是否为undefined

__6. expect(x).toBeNull();__

//x是否为null

__7. expect(x).toBeTruthy();__

//x是否为true

__8. expect(x).toBeFalsy();__

//x是否为false

__9. expect(x).toContain(y);__

//x是否包含y (x可以是字符串或数组)

__10. expect(x).toBeLessThan(y);__

//x是否比y小

__11.expect(x).toBeGreaterThan(y);__

//x是否比y大

__12. expect(fn).toThrow(e);__

//函数是否抛出异常
