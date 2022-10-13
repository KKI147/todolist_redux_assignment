import React from "react";
import Router from "./shared/Router";

const App = () => {
  return <Router />;
};

export default App;

1.추가하기 버튼을 클릭해도 추가한 아이템이 화면에 표시되지 않음. 
2.추가하기 버튼 클릭 후 기존에 존재하던 아이템들이 사라짐.  
3.삭제 기능이 동작하지 않음. 
4.상세 페이지에 진입 하였을 때 데이터가 업데이트 되지 않음. 
5.완료된 카드의 상세 페이지에 진입 하였을 때 올바른 데이터를 불러오지 못함. 
6.취소 버튼 클릭시 기능이 작동하지 않음. 