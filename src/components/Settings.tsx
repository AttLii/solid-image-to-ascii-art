import { For, createEffect } from "solid-js"
import { useImageContext } from "../contexts/image"
import ColorSetting from "./ColorSetting";

export default function Settings() {
  const { hexToCharMap, setHexToChar } = useImageContext()

  const onInput = (e: InputEvent & {
    currentTarget: HTMLInputElement;
    target: Element;
  }) => {
    if (!e.data) return
    const hex = e.currentTarget.getAttribute("data-hex")
    if (!hex) return
    setHexToChar(hex, e.data)
  }
  return (
    <ul class="p-4 bg-slate-600 flex flex-col gap-2 rounded-md">
      <For each={Array.from(hexToCharMap().keys())}>
        {hex => (
          <li>
            <ColorSetting hex={hex} />
          </li>
        )}
      </For>
    </ul>
  )
} 