import { RegistroycontrolPage } from './app.po';

describe('registroycontrol App', function() {
  let page: RegistroycontrolPage;

  beforeEach(() => {
    page = new RegistroycontrolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
