import { plugin } from './plugin';

describe('my-plugin', () => {
  it('should export plugin', () => {
    expect(plugin).toBeDefined();
  });
});
