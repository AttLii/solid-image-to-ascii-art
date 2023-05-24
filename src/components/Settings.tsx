import { For, createEffect } from "solid-js"
import { useImageContext } from "../contexts/image"

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
        {key => (
          <li class="flex align-middle justify-between gap-1">
            <div class="w-8 aspect-square rounded-sm" style={{
              background: key
            }} />
            <input
              class="text-black rounded-sm p-1"
              type="text"
              maxlength="1"
              data-hex={key}
              value={hexToCharMap().get(key)}
              onInput={onInput}
            />
          </li>
        )}
      </For>
    </ul>
  )
} 