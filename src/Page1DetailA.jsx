// useLocationでstateを取得する
import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  // 前ページから受け取ったstateを表示
  const { state } = useLocation();
  console.log(state);

  // 戻るボタン
  const history = useHistory();
  const onClickBack = () => {
    // バニラのhistory.back()と同じ
    history.goBack();
  };

  return (
    <>
      <h1>Page1の詳細ページAです</h1>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};
