// 該当するページが存在しない時に表示する404ページのコンポーネントを作成
import { Link } from "react-router-dom";
export const Page404 = () => {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <p>該当するページは存在しません</p>
      <Link to="/">TOPページに戻る</Link>
    </div>
  );
};
