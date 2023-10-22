function readFileAsText(inputFile: File): Promise<string> {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onerror = () => {
      fileReader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };

    fileReader.readAsText(inputFile);
  });
}

export async function readJsonFileAsObject(event: {
  target: { files: any[] };
}): Promise<any> {
  const files = event.target.files;
  if (!files || files.length === 0) {
    console.log("No file selected.");
    return;
  }

  const file = files[0];
  const fileContent = await readFileAsText(file);

  // Proceed with your JSON parsing and other operations
  const o = JSON.parse(fileContent);
  return o;
}
