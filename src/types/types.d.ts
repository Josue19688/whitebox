declare module '@editorjs/checklist' {
    const Checklist: any;
    export default Checklist;
  }
  
  declare module '@editorjs/paragraph' {
    import { ToolConstructable } from '@editorjs/editorjs';
  
    const Paragraph: ToolConstructable;
  
    export default Paragraph;
  }
  


  // src/types/editorjs-text-alignment-blocktune.d.ts

declare module 'editorjs-text-alignment-blocktune' {
  const editorjsTextAlignmentBlocktune: any;
  export = editorjsTextAlignmentBlocktune;
}
// src/types/editorjs-simple-image.d.ts

declare module '@editorjs/simple-image' {
  const SimpleImage: any;
  export = SimpleImage;
}
// src/types/editorjs-marker.d.ts

declare module '@editorjs/marker' {
  const Marker: any;
  export = Marker;
}
// src/types/editorjs-embed.d.ts

declare module '@editorjs/embed' {
  const Embed: any;
  export = Embed;
}
// src/types/sotaproject-strikethrough.d.ts

declare module '@sotaproject/strikethrough' {
  const Strikethrough: any;  // o el tipo adecuado si lo conoces
  export = Strikethrough;
}
// src/types/editorjs-change-case.d.ts

declare module 'editorjs-change-case' {
  const ChangeCase: any;  // Puedes usar 'any' si no conoces el tipo exacto
  export = ChangeCase;
}
// src/types/editorjs-text-color-plugin.d.ts

declare module 'editorjs-text-color-plugin' {
  const TextColorPlugin: any;  // Puedes usar 'any' si no conoces el tipo exacto
  export = TextColorPlugin;
}
