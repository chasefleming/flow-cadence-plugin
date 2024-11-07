# Webpack Plugin for Cadence Files on the Flow Blockchain

This plugin allows you to import `.cdc` Cadence files directly into your project, making Flow blockchain scripts and transactions easily accessible in a Webpack-based setup. Additionally, it resolves any TypeScript type errors for `.cdc` imports, providing smooth integration with TypeScript projects.
Let me know if you’d like further adjustments!

## Usage

```javascript
import ReadHelloWorld from '../cadence/scripts/ReadHelloWorld.cdc'

await fcl.query({
  cadence: ReadHelloWorld
})
```

## Adding the Plugin

### Install

```bash
npm install flow-cadence-plugin --save-dev
```

### Webpack

To import `.cdc` files, add the plugin to your Webpack configuration:

```javascript
new FlowCadencePlugin()
```

### Next.js

To use the plugin in a Next.js project, add it to the Webpack configuration in `next.config.js`:

```javascript
import FlowCadencePlugin from 'flow-cadence-plugin'

module.exports = {
  webpack: (config) => {
    config.plugins.push(new FlowCadencePlugin())
    return config
  },
}
```