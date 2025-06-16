import { getServerSession } from "next-auth";
import { HeaderMain } from "./components/HeaderMain";
import { redirect } from "next/dist/server/api-utils";
import { db } from "@/lib/db";
import { DataTable } from "./components/TableData/data-table";
import { TableData } from "./components/TableData/TableData";

export default async function Home() {
  const session = await getServerSession();
  if(!session || !session.user?.email){
    return redirect("/");
  }
  const user = await db.user.findUnique({
    where: {
      email: session?.user.email
    },
    include: {
      elements:{
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  })
  if(!user){
    return redirect("/");
  }
  console.log(user)
  return (
    <div>
      <HeaderMain userId={user.id}/>
      <TableData elements={user.elements}/>
    </div>
  );
}
