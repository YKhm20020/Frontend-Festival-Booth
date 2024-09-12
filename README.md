# Frontend-Festival-Booth
Frontend-Festival-Booth

# TanStack Router の導入と使い方

ルーティングに関する設定は、ビルド時に自動でプロジェクトを走査し、設定してくれる。


1. TanStack Router とその開発ツールの導入

以下のコマンドを実行する。下のインストールコマンドは、開発ツールのインストール。

```sh
npm i @tanstack/react-router
npm i -D @tanstack/router-plugin @tanstack/router-devtools
```

また、tsconfig.json に以下の記述を追加する。

```json:
// tsconfig.json
  "routesDirectory": "./src/routes",
  "generatedRouteTree": "./src/routeTree.gen.ts",
  "routeFileIgnorePrefix": "-",
  "quoteStyle": "single"
```

さらに、vite.config.ts の plugins: に、TanStackRouterVite を追加する。

```ts:
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite' // 追加！

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(), // 追加！
],
  optimizeDeps: {
    force: true,
	exclude: ['node_modules/.cache/storybook']
  },
})
```

2. 遷移先・遷移元のページを作成する

各ページに必要なコンポーネントを記述し、どのページにどのコンポーネントがあり、さらにそのコンポーネントではどのページへと遷移する予定なのかを記述する。なお、Linkコンポーネントは、@tanstack/react-router からimportすること。

```tsx
// Header.tsx
import type React from 'react';
import { Link } from '@tanstack/react-router';

export const Header: React.FC = () => {
	return (
		<header className='bg-black'>
			<ul className=''>
				<Link to='/' className=''>
					Home
				</Link>
			</ul>
			<ul className=''>
				<Link to='/write' className=''>
					Write
				</Link>
			</ul>
		</header>
	);
};
```

```tsx
// Write.tsx
import type React from 'react';

export const Write: React.FC = () => {
	return (
		<div>
			<h1>Write Page</h1>
		</div>
	);
};
```

3. routesディレクトリとその直下に __root.tsx ファイルを作成する

```tsx
// routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
```

4. xx.lazy.tsx ファイルを、routesディレクトリに作成する。

xx は、新たに追加するページの名前を入れる。ページを別ディレクトリで作成済みである場合は、それをコンポーネントとしてimport、呼び出しするとよい。
なお、lazyとつけなくてもよいが、lazyとつけることにより、初期のロードから遅延させてロードすることにより、初期ページの表示を高速化することができるため、遷移先のページについては基本lazyをおすすめする。

```tsx
// routes/write.lazy.tsx
import { createLazyFileRoute } from '@tanstack/react-router';
import { Write } from '../pages/Write';

export const Route = createLazyFileRoute('/write')({
	component: () => <Write />,
});
```

5. `npm run dev` コマンドで routeTree.gen.ts を更新する

`npm run dev`コマンドにより、自動でファイルの位置関係を走査し、xx.lazy.tsxの記述をもとに自動でルーティングを作成してくれる。この際、routeTree.gen.ts ファイルが自動で更新される。これにより、最新のルーティング設定が反映される。



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
