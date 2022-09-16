# Discord frontend
Discord Clone 3D using React, Spline, reactjs, webpack, ESLint, boilerplate and tailwind.
<br/>
Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass, with HMR and an optimized production build.
<br/>

boilerplate : 별 수정 없이 반복적으로 사용되는 코드, 모든 코드를 작성하기 위해 필요한 부분.
 ┕ Import : 필요한 코드를 불러들이는 부분
 ┕ component : 현 페이지를 구현하는 코드
 ┕ StyleSheet : 페이지의 객체를 꾸미기 위한 style
 ┕ Export : 현 JavaScript 코드를 타 JavaScript에서 접근하기 위한 부분

webpack : 여러개 파일을 하나의 파일로 합쳐주는 모듈 번들러(Module Bundler).
┕ Entry : entry를 통해서 모듈을 로딩하고 하나의 파일로 묶음
┕ Output : entry로 찾은 모듈을 하나로 묶은 결과물을 반환할 위치
┕ Loader : JavaScript가 아닌 다른 자원(HTML, CSS, Image)를 빌드할 수 있도록 도와주는 속성
┕ Plugin : 파일을 해석하고 변환하는 과정에 관여하고, 결과물의 형태를 바꾸는 역할

HMR : 브라우저 리로드 없이 모듈을 바꿔치기 해주는 기능, webpack에서 지원.
babelrc : JavaScript se6 문법을 es5로 변환해주는 트렌스파일러(transpiler), React를 일반 브라우저에서 실행시킬 수 있다.
ESLint : JavaScript 문법을 검토해주는 도구.


<br/>
<br/>

## Setup Frontend

Install the dependencies:

```bash
yarn install

or

npm install
```

then blow command:
```bash
yarn start

or

npm start
```
