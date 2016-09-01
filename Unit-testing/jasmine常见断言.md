---
title: 常用jasmine 断言
tags: 前端,测试,Jasmine
grammar_cjkRuby: true
---


__1. 比较x和y是否相等__
```markdown
expect(x).toEqual(y);
```
__2. 比较x和y是否不相等__
```markdown
expect(x).not.toEqual(y);
```
__3. 比较x和y是否是相同的对象__
```markdown 
expect(x).toBe(y);
```
__4. 比较x是否匹配pattern正则__
```markdown 
expect(x).toMatch(pattern);
```
__5. x是否为undefined__
```markdown 
expect(x).toBeDefined();
```
__6. x是否为null__
```markdown 
expect(x).toBeNull();
```
__7. x是否为true__
```markdown 
expect(x).toBeTruthy();
```
__8. x是否为false__
```markdown 
expect(x).toBeFalsy();
```
__9. x是否包含y (x可以是字符串或数组)__
```markdown 
expect(x).toContain(y);
```
__10. x是否比y小__
```markdown 
expect(x).toBeLessThan(y);
```
__11. x是否比y大__
```markdown
expect(x).toBeGreaterThan(y);
```
__12. 函数是否抛出异常__
```markdown 
expect(fn).toThrow(e);
```
