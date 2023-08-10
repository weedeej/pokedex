import { PkInfo } from "@/types"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Avatar } from "./components";
import avatar_dummy from "@/assets/images/avatar_dummy.png"
import { toTitleCase } from "@/utilities";

type ListViewProps = {
  list: (PkInfo & { img: StaticImport | null })[];
}

export function ListView(props: ListViewProps) {
  const { list } = props;

  return (
    <table className="table-auto w-full max-w-[1024px] bg-gray-700 divide-y">
      <thead>
        <tr className="">
          <th className="p-2 w-[5%]">#</th>
          <th className="p-2 w-[5%]"></th>
          <th className="p-2 w-[30%] text-start">Pokemon</th>
          <th className="p-2 w-[30%] text-start">Type</th>
          <th className="p-2 w-[30%] text-start">Level</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {
          list.map(({ name, id, level, types, img }, index) => (
            <tr>
              <td className="p-2 w-[5%]" >{index + 1}</td>
              <td className="p-2 w-[5%]">
                <Avatar size={32} alt={`avatar_${id}`} img={img ?? avatar_dummy} className="border-gray-400"/>
              </td>
              <td className="text-start p-2 w-[30%]">
                {name}
              </td>
              <td className="p-2 justify-center w-[30%]">{toTitleCase(types[0])}</td>
              <td className="p-2 justify-center w-[30%]">Level {level}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}