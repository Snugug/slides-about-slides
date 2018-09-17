import StageFright from 'stage-fright';

window.addEventListener('DOMContentLoaded', () => {
  const stage = new StageFright('._stage');
  window.stage = stage;
});

window.addEventListener('load', async () => {
  await import('prismjs');
  await import('prismjs/components/prism-javascript');
});
