import React from 'react';


const formatTime = (timestamp: string) => {
  const date = new Date(parseInt(timestamp));
  return date.toLocaleString(); // Formatea a una fecha legible
};

const cleanText = (text: string) => {
  // Diccionario de mapeo de etiquetas a estilos
  const tagMap: Record<string, string> = {
      '&nbsp;': ' ',
      '<code>': '<span class="text-sm font-mono bg-gray-200 px-1">',
      '</code>': '</span>',
      '<b>': '<span class="font-bold">',
      '</b>': '</span>',
      '<i>': '<span class="italic">',
      '</i>': '</span>',
      '<ul>': '<ul class="list-disc ml-5 my-2">',
      '</ul>': '</ul>',
      '<li>': '<li class="my-1">',
      '</li>': '</li>',
  };

  // Manejamos etiquetas de encabezado dinámicamente
  for (let i = 1; i <= 6; i++) {
      tagMap[`<h${i}>`] = `<h${i} class="font-bold text-lg my-2">`;
      tagMap[`</h${i}>`] = `</h${i}>`;
  }

  // Reemplazamos las etiquetas dinámicamente usando el diccionario
  return Object.keys(tagMap).reduce((processedText, tag) => {
      const replacement = tagMap[tag];
      return processedText.replace(new RegExp(tag, 'g'), replacement);
  }, text);
};


const Article: React.FC<any> = ({ data }) => {
  const renderBlock = (block: any) => {
    const { type, data: blockData } = block;

    switch (type) {
      case 'header':
        return React.createElement(
          `h${blockData.level}`, // h1, h2, h3, etc.
          {
            key: block.id,
            className: 'text-xl font-bold my-4 text-center',
          },
          blockData.text
        );

      case 'paragraph':
        return (
          <div key={block.id} className="text-base my-4 text-left">
            <div dangerouslySetInnerHTML={{ __html: cleanText(block.data.text || '') }} />
          </div>
        );

      case 'image':
        return (
          <img
            key={block.id}
            src={blockData.file?.url}
            alt={blockData.file?.caption || 'Imagen'}
            className="max-w-full h-auto my-4"
          />
        );

      case 'list':
        return (
          <ul key={block.id} className="list-disc ml-6 my-4">
            {blockData.items?.map((item: any, index: any) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: cleanText(item.content || '') }} />
            ))}
        </ul>
        );

      case 'quote':
        return (
          <blockquote
            key={block.id}
            className="italic text-xl border-l-4 border-gray-500 pl-4 my-4"
          >
            {blockData.text}
          </blockquote>
        );

      case 'link':
        return (
          <a
            key={block.id}
            href={blockData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {blockData.text}
          </a>
        );

      case 'table':
        return (
          <table key={block.id} className="table-auto w-full my-4 border-collapse">
            <thead>
              <tr>
                {blockData.content?.[0].map((cell:any, index:any) => (
                  <th key={index} className="border px-4 py-2">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blockData.content?.slice(1).map((row:any, index:any) => (
                <tr key={index}>
                  {row.map((cell:any, index:any) => (
                    <td key={index} className="border px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );

      default:
        return <div key={block.id} className="my-4 text-center">Bloque no soportado</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="article text-neutral-500">
        <div className="text-center">
          <p className="text-sm text-gray-600">{`Publicado: ${formatTime(data.time)}`}</p>
        </div>
        {data.blocks.map((block:any) => renderBlock(block))}
      </div>
    </div>
  );
};

export default Article;
