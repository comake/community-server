import type { InteractionRoute } from '../../../../../src/identity/interaction/routing/InteractionRoute';
import { RelativeInteractionRoute } from '../../../../../src/identity/interaction/routing/RelativeInteractionRoute';

describe('A RelativeInteractionRoute', (): void => {
  const relativePath = '/relative/';
  let route: jest.Mocked<InteractionRoute>;
  let relativeRoute: RelativeInteractionRoute;

  beforeEach(async(): Promise<void> => {
    route = {
      getPath: jest.fn().mockReturnValue('http://example.com/'),
    } as any;
  });

  it('returns the joined path.', async(): Promise<void> => {
    relativeRoute = new RelativeInteractionRoute(route, relativePath);
    expect(relativeRoute.getPath()).toBe('http://example.com/relative/');

    relativeRoute = new RelativeInteractionRoute('http://example.com/test/', relativePath);
    expect(relativeRoute.getPath()).toBe('http://example.com/test/relative/');
  });
});
