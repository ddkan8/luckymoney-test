# luckymoney-test

拼手气红包结果分布测试

脚本：

```shell
luckymoney.js 总金额 抢的人数 测试次数
```

把结果存入data.json文件

```shell
node luckymoney.js 100 20 6 > data.json
```

然后在浏览器里直接打开charts.html即可查看分布结果

---

其实不同结果只是最大值的取值问题，最小值固定不变

修改luckymoney.js 23到25行即可
