import  { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./EditorTools";


const Editor = ({ data, onChange, editorblock }:any) => {
  const ref = useRef<any>(null);
  

  //Initialize editorjs
  useEffect(() => {
    //Initialize editorjs if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorblock,

        tools: EDITOR_JS_TOOLS as any,
        data: data,
        async onChange(api) {
          
          const data = await api.saver.save();
          onChange(data);
        },
      });
      (ref.current as any) = editor;
    }

    //Add a return function to handle cleanup
    return () => {
      if (ref.current && ref.current.destroy ) {
        ref.current.destroy();
      }
    };
  }, []);
  return <div id={editorblock} />;
};

export default memo(Editor);