/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
// import moment from 'https://cdn.skypack.dev/moment';
import moment from 'moment';


const thistime = moment().format('MMMM Do YYYY, h:mm:ss a');


export default function Home() {
    return (
    <div class={tw`p-4 mx-auto max-w-screen-md`} style="white-space:pre-line">
      {thistime}
    </div>
    );
  }
  