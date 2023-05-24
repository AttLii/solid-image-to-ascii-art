import { createEffect } from "solid-js";
import { useImageContext } from "../contexts/image";

type Props = {
  hex: string;
}
export default function Cell({ hex }: Props) {
  const { hexToCharMap } = useImageContext()
  return <>{hexToCharMap().get(hex)}</>
}