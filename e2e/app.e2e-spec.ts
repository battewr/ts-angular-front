import { TsfrontangularPage } from './app.po';

describe('tsfrontangular App', function() {
  let page: TsfrontangularPage;

  beforeEach(() => {
    page = new TsfrontangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
