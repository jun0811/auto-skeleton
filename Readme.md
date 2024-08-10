# React Skeleton Component

React Skeleton Component는 React 애플리케이션에서 사용할 수 있는 유연하고 커스터마이징 가능한 스켈레톤 로딩 컴포넌트입니다. 다양한 테마와 애니메이션 기능을 제공합니다.

## 특징

- 커스터마이징 가능한 크기
- 애니메이션 옵션
- 테마 시스템 지원
- TypeScript로 작성되어 타입 안정성 제공

## 설치 방법

npm을 사용하여 패키지를 설치할 수 있습니다:

```bash
npm install react-skeleton-component
```

or

```bash
yarn add react-skeleton-component
```

## 사용 방법

```jsx
import React from 'react';
import { Skeleton } from 'react-skeleton-component';

function MyComponent() {
  return <Skeleton width="200px" height="20px" />;
}
```

## 애니메이션

```jsx
import React from 'react';
import { Skeleton } from 'react-skeleton-component';

function MyComponent() {
  return <Skeleton width="200px" height="20px" animated={true} />;
}
```

### theme

```jsx
import React from 'react';
import { Skeleton, ThemeProvider } from 'react-skeleton-component';

const customTheme = {
  skeleton: {
    backgroundColor: '#f0f0f0',
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Skeleton width="200px" height="20px" />
    </ThemeProvider>
  );
}
```
