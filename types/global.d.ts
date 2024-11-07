declare module "*.cdc" {
  const content: string;
  export default content;
}

declare module "flow-cadence-plugin" {
  const FlowCadencePlugin: any
  export default FlowCadencePlugin
}