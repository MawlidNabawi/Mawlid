function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Change 'Sheet1' to your sheet name
  const dataRange = sheet.getDataRange().getValues();
  const data = dataRange.map(row => ({
    c: row[2], // Column C (Button text)
    details: [row[0], row[1], row[3], row[4], row[5], row[6], row[7], row[8]] // Columns A, B, D, E, F, G, H, I
  }));
  const json = JSON.stringify(data);

  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
