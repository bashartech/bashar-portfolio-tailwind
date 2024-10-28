// declare module "typed.js" {
//     class Typed {
//       constructor(selector: string | Element, options: Record<string, any>);
//       destroy(): void;
//     }
//     export default Typed;
//   }
declare module "typed.js" {
  interface TypedOptions {
    strings?: string[];         // An array of strings to be typed
    typeSpeed?: number;        // Speed of typing (in milliseconds)
    backSpeed?: number;        // Speed of backspacing (in milliseconds)
    backDelay?: number;        // Delay before starting to backspace (in milliseconds)
    loop?: boolean;            // Whether to loop the typing
    // Add more options as needed
  }

  class Typed {
    constructor(selector: string | Element, options: TypedOptions);
    destroy(): void;
  }
  
  export default Typed;
}