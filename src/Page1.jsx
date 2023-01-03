import { Link, useHistory } from "react-router-dom";
export const Page1 = () => {
  // 配列をdetailAのページに画面遷移した際に情報を渡す
  const arr = [...Array(100).keys()];
  console.log(arr);
  const history = useHistory();
  const onClickDetailA = () => {
    // pushの引数にルートを指定してあげることで、JS側からリンクで遷移したような画面遷移をさせる
    history.push("/page1/detail-a");
  };
  return (
    <div>
      <h1>Page1</h1>
      {/* <Link to="/page1/detail-a">詳細A</Link> */}
      <Link to={{ pathname: "/page1/detail-a", state: arr }}>詳細A</Link>
      <br />
      <Link to="/page1/detail-b">詳細B</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
