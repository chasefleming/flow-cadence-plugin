Webpack plugin for Cadence files on the Flow blockchain.

- Load .cdc files
- Optional deploy on change

## Usage

```
import ReadHelloWorld from '../cadence/scripts/ReadHelloWorld.cdc'

await fcl.query({
  cadence: ReadHelloWorld
})
```

## Adding the Plugin

### Install

```
npm install flow-cadence-plugin --save-dev
```

### Webpack

If you just want to import cdc files:

```
new FlowCadencePlugin()
```

If you want to deploy on change: 

```
new FlowCadencePlugin({ 
  network: process.env.FLOW_NETWORK,
  deployOnChange: true,
  update: true 
}
```

### Next.js

```
const FlowCadencePlugin = require('flow-cadence-plugin')

module.exports = {
  webpack: (config) => {
    config.plugins.push(new FlowCadencePlugin({ 
      network: process.env.FLOW_NETWORK,
      deployOnChange: true,
      update: true 
    }))

    return config;
  },
}
```