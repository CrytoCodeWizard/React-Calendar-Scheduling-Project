//@ts-nocheck
/* eslint no-undef: off */
const port = process.env.PORT || 8080;

describe('Basic', () => {
  beforeAll(async () => {
    await page.goto(`http://localhost:${port}/complex-1/index.html`);
  });

  it('should display images inside items', async () => {
    await page.evaluate(function () {
      scrollToFirstItem();
    });
    await expect(page).toMatchElement('.item-image');
  });

  it('should display images inside rows', async () => {
    await expect(page).toMatchElement('.row-image');
  });
});
