import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />,
  },
  {
    path: "/:id", // コロンと受け取る識別子を設定
    exact: false,
    children: <UrlParameter />,
  },
];
