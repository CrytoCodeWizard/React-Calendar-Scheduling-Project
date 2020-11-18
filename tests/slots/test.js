//@ts-nocheck
/* eslint no-undef: off */
const port = process.env.PORT || 8080;

describe('Basic', () => {
  beforeAll(async () => {
    await page.goto(`http://localhost:${port}/examples/slots/index.html`);
  });

  it('should display slots', async () => {
    await expect(page).toMatchElement('.my-items-slot', {
      text: 'My items slot!',
    });
    await expect(page).toMatchElement('.my-date-slot');
  });
});
