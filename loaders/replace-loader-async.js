// 主函数不能使用箭头函数
// 接收模块内容
// 返回内容
// query 可以接收参数的配置
// callbakck 返回多个参数
// async 返回 callback 处理异步逻辑
// 多个loader 执行顺序
// 路径自定义
module.exports = function (source) {
    // console.log(this.query);
    // return source.replace('webpack4.x', this.query.name)

    // const result = source.replace('webpack4.x', this.query.name)
    // this.callback(null, result)

    const callback = this.async()
    setTimeout(() => {
        // return source.replace('webpack4.x', this.query.name) // 报错
        const result = source.replace('webpack4.x', this.query.name)
        callback(null, result)
    }, 100);
}