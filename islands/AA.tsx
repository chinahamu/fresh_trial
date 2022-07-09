/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const yaruo = `
　     ＿＿＿_
　　　／　　 　 　＼
　 ／　　─　 　 ─＼
／ 　　 （●） 　（●） ＼
|　 　　 　 （__人__）　 　 |
/　　　　 ∩ノ ⊃　　／
(　 ＼　／ ＿ノ　|　 |
.＼　“　　／＿＿|　 |
　　＼ ／＿＿＿ ／
`;
const yaranaio = `
　　　 ＿_　　 ━┓
　　 ／ ―＼ 　┏┛
　 ／ﾉ　(●)＼ ・
　｜(●)　⌒) ＼
　｜　(＿ﾉ￣　 ｜
　 ＼　　　　　/
　　 ＼　　 _ノ
　　　/　　　＼
　　 ｜　　　 ｜
　　 ｜　　　 ｜
`;
export default function AAGen(props) {
  var aa = yaruo;
  if(props.type == "yaranaio"){
    aa = yaranaio;
  }else{
    aa = yaruo;
  }

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`} style="white-space:pre-line">
    {props.type}
    </div>
  );
}
