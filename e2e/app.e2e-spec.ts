import { LionsArchLtdPage } from './app.po';

describe('lions-arch-ltd App', function() {
  let page: LionsArchLtdPage;

  beforeEach(() => {
    page = new LionsArchLtdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
