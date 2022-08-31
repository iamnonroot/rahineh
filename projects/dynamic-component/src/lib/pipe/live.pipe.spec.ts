import { LivePipe } from './live.pipe';

describe('LivePipe', () => {
  it('create an instance', () => {
    const pipe = new LivePipe();
    expect(pipe).toBeTruthy();
  });
});
