module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    before(app) {
      app.get('/data/m/publicity/subjectCategory/list', (req, res) => {
        res.json({test:'ceshiyix'})
      })
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "~@/assets/style/common.scss";`
      }
    }
  }
}