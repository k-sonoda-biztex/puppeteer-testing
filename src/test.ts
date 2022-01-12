import pptrTestingLibrary = require("pptr-testing-library");
const {
  getDocument,
  queries: { getByText },
} = pptrTestingLibrary;
describe("Exampleページは", () => {
  beforeAll(async () => {
    await page.goto("https://example.com");
  });

  it("IANAの画面を開く", async () => {
    const $document = await getDocument(page);
    const link = await getByText($document, "More information...");
    await Promise.all([
      page.waitForNavigation({ waitUntil: ["load", "networkidle2"] }),
      link.click(),
    ]);

    await expect(page).toMatch("Certain domains are set aside");
  });
});
