/**
 * Build du site avec esbuild (React + TypeScript).
 *
 *   node build.mjs           → dist/            site statique classique
 *                              dist-artifact/   variante « une page » (JS et CSS
 *                                               inline) pour un hébergement qui
 *                                               n'accepte pas de scripts externes
 *   node build.mjs --serve   → serveur local avec recompilation (port 5173)
 */
import { build, context } from 'esbuild';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const serve = process.argv.includes('--serve');
const head = readFileSync('head.html', 'utf8').trim();
const template = readFileSync('index.html', 'utf8');

const options = {
  entryPoints: { app: 'src/main.tsx' },
  bundle: true,
  format: 'iife',
  target: ['es2020', 'safari15', 'chrome100', 'firefox100'],
  jsx: 'automatic',
  loader: { '.json': 'json' },
  define: { 'process.env.NODE_ENV': serve ? '"development"' : '"production"' },
  minify: !serve,
  sourcemap: serve,
  legalComments: 'none',
  logLevel: 'info',
};

function page({ css, js, inline }) {
  const body = inline
    ? `<div id="root"></div>\n<script>${js.replace(/<\/script/gi, '<\\/script')}</script>`
    : `<div id="root"></div>\n<script src="assets/app.js" defer></script>`;
  const style = inline ? `<style>${css}</style>` : `<link rel="stylesheet" href="assets/app.css">`;
  return { head: `${head}\n${style}`, body };
}

if (serve) {
  mkdirSync('dev', { recursive: true });
  cpSync('public', 'dev', { recursive: true });
  const { head: h, body } = page({ inline: false });
  writeFileSync('dev/index.html', template.replace('<!--HEAD-->', h).replace('<!--BODY-->', body));
  const ctx = await context({ ...options, outdir: 'dev/assets' });
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: 'dev', port: 5173 });
  console.log(`\n  SMAL & CO × Run Aventure → http://localhost:${port}\n`);
} else {
  rmSync('dist', { recursive: true, force: true });
  rmSync('dist-artifact', { recursive: true, force: true });

  const result = await build({ ...options, outdir: 'dist/assets', write: true, metafile: true });
  const js = readFileSync('dist/assets/app.js', 'utf8');
  const css = readFileSync('dist/assets/app.css', 'utf8');

  // 1) Site statique classique
  cpSync('public', 'dist', { recursive: true });
  const std = page({ inline: false });
  writeFileSync('dist/index.html', template.replace('<!--HEAD-->', std.head).replace('<!--BODY-->', std.body));

  // 2) Variante une page : sans doctype/head/body (ajoutés par l'hébergeur)
  mkdirSync('dist-artifact', { recursive: true });
  cpSync('public', 'dist-artifact', { recursive: true });
  const one = page({ css, js, inline: true });
  writeFileSync('dist-artifact/index.html', `${one.head}\n${one.body}\n`);

  const kb = (n) => `${(n / 1024).toFixed(1)} kB`;
  console.log(`JS ${kb(js.length)} · CSS ${kb(css.length)} · ${Object.keys(result.metafile.inputs).length} modules`);
}
