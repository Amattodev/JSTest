/* eslint-disable no-unused-vars */
// 問6:**人の名前を表示してチェックできるようにしよう**
//    propsとして渡ってくるuserName:人の名前(文字列)を表示するコンポーネントを完成させてください。
//    また、このコンポーネントには以下のような機能をつけてください。
// 1. 親のタグはliタグにしてください。
// 2. 名前を表示する部分のタグはspanタグにしましょう。
// 3. spanタグの横(左右どちらでも)にbuttonを配置しましょう。
// 4. buttonには完了という文字が表示されるようにしましょう・
// 5. buttonをクリックしたら、spanタグに打ち消し線が入るようにしてbuttonは完了取消という文字に変更しましょう
// 6. 再度buttonをクリックしたら、spanタグの打消線が消え、buttonの文字は完了に戻しましょう。
// 7. styleの付け方はインラインスタイルを適応してください。

import { useState } from "react";

/**
 * @param {{userName:string}} props
 * @returns {ReactNode}
 */
const TestComponent1 = ({ userName }) => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone(!isDone);
  };

  return (
    <li>
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {userName}
      </span>
      <button onClick={handleClick}>{isDone ? "完了取り消し" : "完了"}</button>
    </li>
  );
};

export default TestComponent1;
