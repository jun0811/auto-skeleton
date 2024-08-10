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

## basic Skeleton usage

```jsx
import React from 'react';
import { Skeleton } from 'react-skeleton-component';

function MyComponent() {
  return <Skeleton width="200px" height="20px" />;
}
```

## AsyncSkeleton usage

```jsx
import React from 'react';
import { AsyncSkeleton } from '../src/components/AsyncSkeleton';

.....

const BeerList: React.FC = () => {
  const fetchBeers = async (): Promise<Beer[]> => {
    const response = await fetch('https://api.sampleapis.com/beers/ale');
    if (!response.ok) {
      throw new Error('Failed to fetch beers');
    }
    return response.json();
  };

  return (
    <div>
      <h1>Beer List</h1>
      <AsyncSkeleton asyncFunction={fetchBeers} width="100%" height="400px">
        {(beers) => (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {beers.slice(0, 10).map((beer) => (
              <li
                key={beer.id}
                style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}
              >
                <h3>{beer.name}</h3>
                <p>Price: {beer.price}</p>
                <p>
                  Rating: {beer.rating.average.toFixed(1)} ({beer.rating.reviews} reviews)
                </p>
              </li>
            ))}
          </ul>
        )}
      </AsyncSkeleton>
    </div>
  );
};

export default BeerList;
```

### 애니메이션

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
