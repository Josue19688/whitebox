import React from 'react';




  


const formatTime = (timestamp: string) => {
  const date = new Date(parseInt(timestamp));
  return date.toLocaleString(); // Formatea a una fecha legible
};

const cleanText = (text: string) => {
    // Reemplaza &nbsp; por un espacio regular
    // Convierte las etiquetas <code> y <b> en su formato adecuado
    return text
      .replace(/&nbsp;/g, ' ')  // Reemplaza &nbsp; por un espacio regular
      .replace(/<code>/g, '<span class="text-sm font-mono bg-gray-200 px-1">')  // Código con estilo
      .replace(/<\/code>/g, '</span>')  // Cierre de la etiqueta <code>
      .replace(/<b>/g, '<span class="font-bold">')  // <b> se convierte en <span class="font-bold">
      .replace(/<\/b>/g, '</span>') // Cierre de la etiqueta <b>
      .replace(/<li data-empty="false">/g, '<span>')  // <b> se convierte en <span class="font-bold">
      .replace(/<\/li>/g, '</span>');  // Cierre de la etiqueta <b>
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
            {blockData.items?.map((item:any, index:any) => (
              <li key={index}>{item.content}</li>
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
      <div className="article">
        <div className="text-center">
          <p className="text-sm text-gray-600">{`Publicado: ${formatTime(data.time)}`}</p>
        </div>
        {data.blocks.map((block:any) => renderBlock(block))}
      </div>
    </div>
  );
};

export default Article;
