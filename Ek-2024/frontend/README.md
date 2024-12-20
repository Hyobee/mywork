# 쇼핑몰 Pani

Vite (vue) mpa 기반 쇼핑몰 페이지 입니다.

## 개발 환경 설정

프로젝트 clone 후 로컬(node 실행) or docker 환경으로 실행 가능합니다.

### 실행 전

.env를 아래와 같이 생성한 후 값을 입력합니다.

```.env
bash> cp .env.example .env
```

### 로컬 실행

`node:20.11.0` 을 설치한 후 아래 명령어를 이용해 실행합니다.

```bash
> npm install && npm run dev
```

#### 사용 예시

| Url                                  | 설명                 |
| ------------------------------------ | -------------------- |
| <http://localhost:3000/pages/>       | 메인 페이지 접속     |
| <http://localhost:3000/pages/goods/> | 상품상세 페이지 접속 |

### docker 실행

본 프로젝트는 docker 기반 개발 환경이 설정되어 있으며 아래 명령어를 이용해 실행 가능합니다.

```bash
> docker compose -f docker-compose-local.yml up -d
```

실행 시 `<http://localhost:12085접속하여> 사용가능합니다.

#### 사용 예시

| Url                                   |                      |
| ------------------------------------- | -------------------- |
| <http://localhost:12085/pages/>       | 메인 페이지 접속     |
| <http://localhost:12085/pages/goods/> | 상품상세 페이지 접속 |

#### Container 종료

```bash
> docker compose -f docker-compose-local.yml down -v
```

## 페이지 생성 & 구현

아래 순서대로 페이지를 생성한 후 구현 진행이 가능합니다.
(예시: 카테고리별 상품 출력 페이지 생성)

### 1. page 생성

웹 사이트에 출력될 페이지를 생성합니다.

`/pages` 폴더 내 `_example` 폴더를 복사한 후 `category` 폴더라는 이름으로 생성합니다.

### 2. vue 파일 생성

실제 페이지가 구현될 vue 파일을 생성합니다.

`/src/views` 폴더 내 `_example` 폴더를 복사한 후 `Category` 폴더라는 이름으로 변경한 후 해당 폴더 내 `index.vue` 파일에 페이지 구현을 진행합니다.

### 3. page와 vue 파일 연결

`/pages/category/index.ts` 파일 내 vue 파일 경로를 `/src/views/Category/IndexView.vue` 경로로 수정합니다.

```ts
import { createApp } from "vue";
import App from "@/views/Category/IndexView.vue";
import "@/index.scss";

createApp(App).mount("#app");
```

### 4. 실행

`http://localhost:3000/pages/category/` 를 브라우저 주소창에 입력하면 생성한 category 페이지를 볼 수 있습니다.

## 빌드

구현 결과를 운영서버에 배포하기 위해서는 아래와 같은 절차로 진행합니다.

### 1. 배포 대상 파일 설정

`vite.config.ts` 파일 `input` 항목에 빌드 후 배포할 html 파일 정보를 입력합니다. `category`를 추가할 경우 예시는 아래와 같습니다.

```vite.config.ts

export default defineConfig({

    build: {
        rollupOptions: {
            input: {
                // 상품 카테고리 페이지
                category: path.resolve(__dirname, "pages/category/index.html"),
            },
        },
    },
});

```

자세한 내용은 `vite.config.ts` 내 설정 정보를 참조해주시기 바랍니다.

### 2. build

`npm run build` 명령어를 입력하면 `/dist` 폴더 내 `assets`, `pages` 폴더가 생성됩니다. 해당 폴더들을 쇼핑몰 Root의 `pani` 폴더 내 업로드 하여 적용합니다.

-   배포 프로세스는 구축되어 사용될 예정이니 수동 배포는 가급적이면 진행해주시 마시기 바라며 담당자에게 먼저 문의 부탁드립니다.

## 개발 규칙

본 개발환경에는 commit 시 코드 / commit 메시지 검수를 진행하기 위해 husky를 이용한 ESLint, commitlint, lint-staged, prettier 가 적용되어 있습니다.

관련 파일 목록은 아래와 같습니다.

-   .eslintrc.cjs
-   commitlint.config.js
-   .lintstagerc.cjs
-   .husky/commit-msg, .husky/pre-commit

Clone 후 `npm install`를 하여 관련 패키지를 설치해야 git commit이 가능합니다.

```bash
> npm install
```
