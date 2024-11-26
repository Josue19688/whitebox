// src/components/EditorTools.ts

import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import AlignmentBlockTune from "editorjs-text-alignment-blocktune"
import Checklist from "@editorjs/checklist";
import ImageTool from "@editorjs/image"
import Embed from "@editorjs/embed"
import Underline from "@editorjs/underline"
import Strikethrough from "@sotaproject/strikethrough"
import Marker from "@editorjs/marker"
import InlineCode from "@editorjs/inline-code"
import ChangeCase from "editorjs-change-case"
import ColorPlugin from "editorjs-text-color-plugin"


const customUploader = async (file:any) => {
  const formData = new FormData();
  formData.append('files', file); // Asegúrate de usar el campo esperado

  const response = await fetch("https://backendpagina-production.up.railway.app/files/uploads/editor", {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  const data = await response.json();
  return {
    success: 1,
    file: {
      url: data.file.url, // Cambia según el formato de tu backend
    },
  };
};

export const EDITOR_JS_TOOLS = {
 
  
    textAlignment: {
      class: AlignmentBlockTune,
      config: {
        default: "left",
        blocks: {
          header: "center"
        }
      }
    },
    paragraph: {
      class: Paragraph,
      tunes: ["textAlignment"]
    },
    header: {
      class: Header,
      inlineToolbar: true,
      tunes: ["textAlignment"],
      config: {
        placeholder: "Enter a Header",
        levels: [1, 2, 3, 4, 5],
        defaultLevel: 2,
      }
    },
    list: {
      class: List,
      config: {
        defaultStyle: "unordered"
      }
    },
    checklist: {
      class: Checklist,
      
    },
    image: {
      class: ImageTool,
      config: {
        uploader: {
          uploadByFile: customUploader, // Usa el adaptador personalizado
        },
      },
    },
    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          codepen: true,
        }
      }
    },
    underline: {
      class: Underline,
    },
    strikethrough: {
      class: Strikethrough,
    },
    Marker: {
      class: Marker,
    },
    inlineCode: {
      class: InlineCode,
    },
    changeCase: {
      class: ChangeCase,
    },
    Color: {
      class: ColorPlugin,
      config: {
        colorCollections: [
          '#EC7878', 
          '#9C27B0', 
          '#673AB7', 
          '#3F51B5', 
          '#0070FF', 
          '#03A9F4', 
          '#00BCD4', 
          '#4CAF50', 
          '#8BC34A', 
          '#CDDC39', 
          '#FFF', 
        ],
        defaultColor: "#FF1300",
        customPicker: true,
      }
    }
  

  // paragraph: {
  //   class: Paragraph,
  //   inlineToolbar: true,
  // },
  // checkList: CheckList,
  // list: List,
  // header: Header,

};
