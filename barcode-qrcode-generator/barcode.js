const { createCanvas } = require("canvas");
const JsBarcode = require("jsbarcode");
const fs = require("fs");
const bwipjs = require("bwip-js");

const textToBase64Barcode = (text) => {
  const canvas = createCanvas(150, 28);
  JsBarcode(canvas, text, { format: "CODE128", displayValue: false });
  return canvas.toDataURL();
};

const textToBase64BarcodeV2 = async (text) => {
  return bwipjs
    .toBuffer({
      bcid: "code128",
      text: text,
      scale: 1,
      width: 100,
      height: 35,
      includetext: false,
      backgroundcolor: "FFFFFF",
      paddingwidth: 10,
      paddingheight: 10,
    })
    .then((pngBuffer) => {
      return `data:image/png;base64,${pngBuffer.toString("base64")}`;
    })
    .catch((err) => {
      console.error("Error generating barcode:", err);
    });
};

const decodeBase64Image = (base64String, version) => {
  outputPath = `./img/barcode/output-image-version-${version}.png`;
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
  const imageBuffer = Buffer.from(base64Data, "base64");
  fs.writeFile(outputPath, imageBuffer, (err) => {
    if (err) {
      console.error("Error saving image:", err);
    } else {
      console.log("Image saved to", outputPath);
    }
  });
};

const run = async () => {
  const v1 = textToBase64Barcode("123456789");
  const v2 = await textToBase64BarcodeV2("123456789");
  decodeBase64Image(v1, 1);
  decodeBase64Image(v2, 2);
};

run();
