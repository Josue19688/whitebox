export const validateData = (data) => {
  if (!data.blocks || !Array.isArray(data.blocks)) {
    throw new Error("Invalid data format: Blocks must be an array.");
  }

  data.blocks.forEach((block) => {
    if (!block.type || !block.data || typeof block.data.text !== "string") {
      throw new Error(`Invalid block: ${JSON.stringify(block)}`);
    }
  });
};
