import { performance } from 'perf_hooks';

interface TrackInfo {
  time?: number;
  count?: number;
}
interface TrackOptions<TArgs extends Array<any> = unknown[], TReturn = any> {
  time: boolean;
  count: boolean;
  beforeExecute?: (...args: TArgs) => TReturn;
  afterExecute?: (info: TrackInfo) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const AsyncFunction = (async () => {}).constructor;

export function Track(options?: TrackOptions) {
  // TODO: Continuar
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    if (target instanceof AsyncFunction) {
      descriptor.value = async function (...args: any[]): Promise<any> {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const finish = performance.now();
        console.log(
          `Execution time: ${Math.ceil(finish - start)} milliseconds`,
        );
        return result;
      };
    } else {
      descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const finish = performance.now();
        console.log(
          `Execution time: ${Math.ceil(finish - start)} milliseconds`,
        );
        return result;
      };
    }

    return descriptor;
  };
}
