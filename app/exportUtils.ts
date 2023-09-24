export function saveToJson(data: any, fileName: string) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName+".json";
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
  return json;
}

export async function loadFromJson(file: File): Promise<any> {
  //use await to load json file
  const reader = new FileReader();
  reader.readAsText(file);
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      try {
        resolve(JSON.parse(reader.result as string));
      } catch (e) {
        reject(e);
      }
    };
  });
}
