/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import AAGen from "../../islands/AA.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Home(props: PageProps) {
  return (
    <AAGen type={props.params.name} />
  );
}
