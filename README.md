# Calendar

바닐라 자바스크립트로 달력을 만들어봅니다.

## 예시

![예시 이미지](./example.gif)

## 사전 설치 (Setup)

Install dependencies

```sh
yarn
# or yarn install
```

## 작업 방법 (Development)

```sh
yarn start
# Visit http://localhost:1234 from your browser (Chrome)
```

## 요구사항

- [x] 위 이미지의 달력과 기능 및 스타일이 최대한 일치하도록 달력을 만듭니다.
- [x] 과거나 미래의 연도도 보여줄 수 있어야 합니다.
- [x] 날짜를 선택하면 해당 날짜의 스타일이 변경되어 선택됐다는 것을 보여줘야 합니다.
- [ ] 날짜를 선택하면 해당 날짜에 대한 Todo List가 보여져야 합니다.
- [ ] Todo List에 해당 날짜에 대한 Todo Item이 추가하는 기능이 있어야 합니다.
- [ ] Todo List에서 Todo Item을 삭제할 수 있어야 합니다.

## 참고

- 일반적인 사용자 입장에서 테스트해보며 어색한 부분이 없도록 합니다.
- 웹 표준에 맞는 html 태그를 사용합니다.

## 개발 기록

### 1차

![1차](./1.gif)

- [x] yarn berry + TS 설치
- [x] prettier + eslint 설정 (format on save)
- [x] Vanilla SPA 구조 구성
- [x] 달력 완성

## 과제를 마치면서

### 1. 새롭게 배웠던 점

-
-

### 2. 어려웠던 점

- parcel은 yarn berry 환경에서 typescript를 완전히 지원하지 못하는 것 같다.
  - tsconfig을 사용하기 위해서는 몇몇 플러그인을 설치해야 하는데, 플러그인끼리 버전 충돌이 나서 사용할 수 없었다.
-

### 3. 궁금한 점

-
-
