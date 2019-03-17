// Returns a Promise that resolves after ms second.
export const promiseSimulator = (resolveWithValue: any, ms: number) => new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(resolveWithValue);
    }, ms);
  });