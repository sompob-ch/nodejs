const { createCanvas } = require("canvas");
const QRCode = require("qrcode");
const fs = require("fs");
const bwipjs = require("bwip-js");

const decodeBase64Image = (base64String, version) => {
  outputPath = `./img/qrcode/output-image-version-${version}.png`;
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

const tokenToQrCode = (url) => {
  const canvas = createCanvas(100, 100);
  QRCode.toCanvas(canvas, url);
  return canvas.toDataURL();
};

const tokenToQrCodeV2 = async (url) => {
  return bwipjs
    .toBuffer({
      bcid: "qrcode", // กำหนดประเภทเป็น QR code
      text: url, // ข้อความที่จะเข้ารหัสใน QR code
      scale: 1, // ขนาดของ QR code
      version: 2, // ระดับความซับซ้อนของ QR code
      includetext: false, // ไม่ต้องแสดงข้อความ
      backgroundcolor: "FFFFFF", // สีพื้นหลังเป็นสีขาว
      width: 44,
      height: 44,
      paddingwidth: 10,
      paddingheight: 10,
    })
    .then((pngBuffer) => {
      return `data:image/png;base64,${pngBuffer.toString("base64")}`;
    })
    .catch((err) => {
      console.error("Error generating QR code:", err);
    });
};

const run = async () => {
  const v1 = tokenToQrCode("https://google.com");
  const v2 =  await tokenToQrCodeV2("https://google.com");
  decodeBase64Image(v1, 1);
  decodeBase64Image(v2, 2);
};

run();
