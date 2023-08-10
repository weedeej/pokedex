import { PkInfo } from "@/types"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ListViewProps = {
  list: (PkInfo & {img: StaticImport | null})[];
}

export function ListView(props: ListViewProps) {
  const {list} = props;

  return (
    <table className="table-fixed w-full max-w-[1024px] bg-gray-700">
      <thead>
        <tr>
          <th>#</th>
          <th>Pokemon</th>
          <th>Type</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody className="">
        <tr>
          <td></td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  )
}