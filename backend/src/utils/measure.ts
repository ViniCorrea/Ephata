import { performance } from 'perf_hooks';

export default function () {
  const started = performance.now();
  function elapsed() {
    return Math.ceil(performance.now() - started);
  }
  return elapsed;
}
