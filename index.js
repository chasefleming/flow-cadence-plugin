const util = require('util')
const {exec} = require('child_process')
const execAsync = util.promisify(exec)

const cleanNetwork = network => network?.toLowerCase() === 'local' ? 'emulator' : network?.toLowerCase()

class FlowCadencePlugin {
  constructor({ network, deployOnChange, update }) {
    this.network = network
    this.deployOnChange = deployOnChange
    this.update = update
  }
  
  apply(compiler) {
    compiler.options.module.rules.push({
      test: /\.cdc$/i,
      loader: 'raw-loader',
    })

    compiler.hooks.afterEmit.tapAsync(
      {
       name: 'FlowCadencePlugin',
      },
      async (compilation, callback) => {
        const cleanedNetwork = cleanNetwork(this.network)
        let command = `flow project deploy --network=${cleanedNetwork}`

        if (this.update && cleanedNetwork !== 'mainnet') {
          command = `${command} --update`
        }

        if (this.deployOnChange) {
          await execAsync(command)
        }
    
        callback()
      }
     )
  }
}

module.exports = FlowCadencePlugin