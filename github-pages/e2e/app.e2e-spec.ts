import { GithubPagesPage } from './app.po';

describe('github-pages App', function() {
  let page: GithubPagesPage;

  beforeEach(() => {
    page = new GithubPagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
