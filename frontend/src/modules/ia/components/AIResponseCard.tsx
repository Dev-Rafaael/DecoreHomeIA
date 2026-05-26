import {
  DecorItem
} from "../types/decor-ai";

type Props = {
  item: DecorItem;
}

export function AIResponseCard({
  item
}: Props) {

  return (
    <div>
      <h2>{item.movel}</h2>

      <p>
        Estilo:
        {item.estilo}
      </p>

      <p>
        Material:
        {item.material}
      </p>

      <p>
        Cores:
        {item.cores.join(", ")}
      </p>

      <p>
        {item.dica}
      </p>
    </div>
  );
}