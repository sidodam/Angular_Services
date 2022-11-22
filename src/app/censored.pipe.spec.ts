import { CensoredPipe } from './censored.pipe';

describe('CensoredPipe', () => {
  it('create an instance', () => {
    const pipe = new CensoredPipe();
    expect(pipe).toBeTruthy();
  });
});
