This is a webpack plugin for watching and deploying Cadence files on the Flow blockchain.

## Adding the Plugin

### Install

```
npm install flow-cadence-plugin --save-dev
```

### Webpack

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