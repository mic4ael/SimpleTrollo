import { SimpleTrolloPage } from './app.po';

describe('simple-trollo App', function() {
  let page: SimpleTrolloPage;

  beforeEach(() => {
    page = new SimpleTrolloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
