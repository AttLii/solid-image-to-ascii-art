import { For } from "solid-js"
import { useImageContext } from "../contexts/image"
import Cell from "./Cell"

export default function Ascii() {
  let pre: HTMLPreElement | undefined
  const { coordinates } = useImageContext()
  const copyToClipBoard = async () => {
    if (!pre) return
    try {
      await navigator.clipboard.writeText(pre.innerText);
      alert("ascii saved to clipboard");
    } catch {
      alert("Couldn't save ascii to clipboard, do it manually :/");
    }
  }
  return (
    <div class="mx-auto w-full">
      <div class="flex justify-center">
        <pre ref={pre} class="font-mono leading-3 mt-4 overflow-x-scroll overflow-y-hidden">
          <For each={coordinates()}>{(row) =>
            <>
              <For each={row}>{(hex) => <Cell hex={hex} />}</For>
              {"\n"}
            </>
          }</For>
        </pre>
      </div>
      <button class="p-4 w-full text-center uppercase border-white border-2 mt-4" onClick={copyToClipBoard}>Copy ascii to clipboard</button>
    </div>
  )
}