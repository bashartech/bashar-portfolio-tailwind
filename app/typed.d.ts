declare module "typed.js" {
    class Typed {
      constructor(selector: string | Element, options: Record<string, any>);
      destroy(): void;
    }
    export default Typed;
  }