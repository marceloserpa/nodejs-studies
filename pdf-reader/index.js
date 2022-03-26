const fs = require("fs");
const { PdfReader } = require("pdfreader");

fs.readFile("files/2020-02.pdf", (err, pdfBuffer) => {
  // pdfBuffer contains the file content
  new PdfReader().parseBuffer(pdfBuffer, (err, item) => {
    if (err) console.error("error:", err);
    else if (!item) console.warn("end of buffer");
    else if (item.text) console.log(item.text);
  });
});
