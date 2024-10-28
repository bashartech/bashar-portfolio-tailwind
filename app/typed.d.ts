// declare module "typed.js" {
//     class Typed {
//       constructor(selector: string | Element, options: Record<string, any>);
//       destroy(): void;
//     }
//     export default Typed;
//   }
// declare module "typed.js" {
//   interface TypedOptions {
//     strings?: string[];         // An array of strings to be typed
//     typeSpeed?: number;        // Speed of typing (in milliseconds)
//     backSpeed?: number;        // Speed of backspacing (in milliseconds)
//     backDelay?: number;        // Delay before starting to backspace (in milliseconds)
//     loop?: boolean;            // Whether to loop the typing
//     // Add more options as needed
//   }

//   class Typed {
//     constructor(selector: string | Element, options: TypedOptions);
//     destroy(): void;
//   }
  
//   export default Typed;
// }

declare module "typed.js" {
  interface TypedOptions {
    strings?: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
    loopCount?: number;
    showCursor?: boolean;
    cursorChar?: string;
    smartBackspace?: boolean;
    attr?: string;
    bindInputFocusEvents?: boolean;
    startDelay?: number;
    fadeOut?: boolean;
    fadeOutClass?: string;
    fadeOutDelay?: number;
    onComplete?: (self: Typed) => void;
    preStringTyped?: (arrayPos: number, self: Typed) => void;
    onStringTyped?: (arrayPos: number, self: Typed) => void;
    onLastStringBackspaced?: (self: Typed) => void;
    onTypingPaused?: (arrayPos: number, self: Typed) => void;
    onTypingResumed?: (arrayPos: number, self: Typed) => void;
    onReset?: (self: Typed) => void;
    onStop?: (arrayPos: number, self: Typed) => void;
    onStart?: (arrayPos: number, self: Typed) => void;
    onDestroy?: (self: Typed) => void;
  }

  class Typed {
    constructor(element: string | Element, options: TypedOptions);
    toggle(): void;
    stop(): void;
    start(): void;
    destroy(): void;
    reset(restart?: boolean): void;
  }

  export default Typed;
}