import { Link } from "react-router-dom";
export const Page1 = () => {
  // 配列をdetailAのページに画面遷移した際に情報を渡す
  const arr = [...Array(100).keys()];
  console.log(arr);
  return (
    <div>
      <h1>Page1</h1>
      {/* <Link to="/page1/detail-a">詳細A</Link> */}
      <Link to={{ pathname: "/page1/detail-a", state: arr }}>詳細A</Link>
      <br />
      <Link to="/page1/detail-b">詳細B</Link>
      <br />
    </div>
  );
};
