class My {
    constructor(opt) {
        console.log(opt, 123)
    }
    apply(compiler) {
        // compiler.hooks.afterPlugins.tap('my', () => {
        //     console.log('这个是afterPlugins...')
        // })
        // compiler.hooks.compile.tap('my', () => {
        //     console.log('这个是compile...')
        // })
        // compiler.hooks.compilation.tap('my', () => {
        //     console.log('这个是compilation...')
        // })
        // compiler.hooks.emit.tap('my', (compilation) => {
        //     console.log('这个是emit...')
        // })
        // compiler.hooks.afterEmit.tap('my', () => {
        //     console.log('这个是afterEmit...')
        // })
        // compiler.hooks.done.tap('my', () => {
        //     console.log('这个是done...')
        // })
        compiler.hooks.emit.tapAsync('my', (compilation, cb) => {
            const manifest = {};
            for(const name of Object.keys(compilation.assets)) {
                manifest[name] = compilation.assets[name].size();
            }
            console.log(JSON.stringify(manifest), 123456)
            compilation.assets['manifest.json'] = {
                source() {
                    return JSON.stringify(manifest)
                },
                size() {
                    return this.source().length;
                }
            }
            cb()
        })
    }
}

module.exports = My;