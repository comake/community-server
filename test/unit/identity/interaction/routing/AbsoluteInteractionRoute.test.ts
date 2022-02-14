import { AbsoluteInteractionRoute } from '../../../../../src/identity/interaction/routing/AbsoluteInteractionRoute';

describe('An AbsoluteInteractionRoute', (): void => {
  const path = 'http://example.com/idp/path/';
  const route = new AbsoluteInteractionRoute(path);

  it('returns the given path.', async(): Promise<void> => {
    expect(route.getPath()).toBe('http://example.com/idp/path/');
  });
});
