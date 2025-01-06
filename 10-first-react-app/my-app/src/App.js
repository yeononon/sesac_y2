// import logo from './logo.svg';
import './App.css';
import image from './assets/img.jpeg';

// src/assets 폴더 생성
// REact 컴포넌트 내부에서 사용되는 이미지, 아이콘 등 정적 파일 저장
// Ex. 배경 이미지, 버튼 아이콘, 프로필 이미지 등등
// -import 키워드로 불러와야 함

// /public
//  :HTMl 파일에 직접 삽입되거나 빌드 과정 없이 원본 파일 그대로 사용되어야 하는 파일 저장,
//  = index.html 에 직접 사용하는 파일들
// - 폰트, 웹폰트, 로고, 파비콘 등

// function App() {
//     const name = 'pop';
//     const animal = 'dog';

//     return (
//         <div className="App">
//             <h2>
//                 제 반려 동물의 이름은 {name} 입니다.
//                 <br />
//                 {name}은 {animal} 입니다.
//             </h2>
//         </div>
//     );
// }
// function App() {
//     return (
//         <div className="App">
//             <h2>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</h2>
//         </div>
//     );
// }
function App() {
    const a = 1;
    const b = 2;
    return (
        <div className="App">
            <h2>{a > b && 'a가 b보다 큽니다'}</h2>
        </div>
    );
}

export default App;
