const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js',
        main2: './src/app2.js',
    },
    output: {
        path: path.resolve('./dist'),
        //output 디렉토리 경로 (절대경로 입력) (node - path 모듈 호출) 
        filename: '[name].js'
        // [name] = entry에서 설정한 키값으로 치환된다. -> entry가 여러개인 경우, 여러개의 output 이름을 동적으로 만들 수 있음. 
    }
}