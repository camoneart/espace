## ディレクトリ構成のルール

### /app

/app 配下には、

- 「ルート」となるファイル（例：about/page.tsx）
- favicon.ico
- layout.tsx
- page.tsx
  のみを配置。

### /features

/features 配下には、

- 各ルート専用のコンポーネントや機能（他の箇所で一切使用しない、1箇所のみでしか使用されないもの）を配置。

例：

- hero/components/hero-section/HeroSection.tsx

### /features内に配置するコンポーネントの命名規則

- コンポーネントの先頭は必ず必ず必ず必ずフォルダ名から開始する

例：

- features/lexicon/components/lexicon-category-filter/LexiconCategoryFilter.tsx
- features/lexicon/components/lexicon-client/LexiconClient.tsx

#### /features内のコンポーネントのimport/exportルール

各コンポーネントは、features/〇〇/components/index.tsにimportしてから、名前付きエクスポート（**barrel export**）するようにし、import時には**namespace import**（名前空間インポート）パターンを使用する。

このパターンの利点：

- 名前の衝突を避けやすい
- どのモジュール由来かが明確になる
- 複数のコンポーネントをまとめて管理しやすい

例：

- hero/components/index.ts

export側：

```ts
import HeroSection from './hero-section/HeroSection';

export { HeroSection };
```

import側：

```ts
import * as HeroSection from '@/features/hero/components';

export default function Home() {
  return <HeroSection.HeroSection />;
}
```

### /components

/components 配下には、

- 複数の場所で再利用される共通コンポーネントを配置。

例：

- /auth：認証関連のコンポーネントや機能など。
  - account-button/AccountButton.tsx
- /common：汎用的な共通コンポーネント。
- /layout：レイアウト関連のコンポーネント（Header, Footer, Gnavなど）。
  - header/Header.tsx
  - footer/Footer.tsx
  - gnav/Gnav.tsx

#### /componentsと/featuresの使い分け

- **/components**：複数の場所で使用される共通コンポーネント
- **/features**：特定のルート専用のコンポーネント（1箇所のみで使用されるもの）
