import { AngularCliRawPage } from './app.po';

describe('angular-cli-raw App', function() {
  let page: AngularCliRawPage;

  beforeEach(() => {
    page = new AngularCliRawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});