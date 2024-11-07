class FlowCadencePlugin {
  apply(compiler) {
    compiler.options.module.rules.push({
      test: /\.cdc$/i,
      loader: 'raw-loader',
    })
  }
}

module.exports = FlowCadencePlugin