import { useImageContext } from "../contexts/image";

type Props = {
  x: number;
  y: number;
}
export default function Cell({ x, y }: Props) {
  const { getCharForCoordinate } = useImageContext()
  return <>{getCharForCoordinate(x, y)}</>
}