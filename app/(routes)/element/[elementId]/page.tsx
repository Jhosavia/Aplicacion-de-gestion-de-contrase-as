import { FormEditElement } from "@/components/Shared/FormEditElement";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// 👇 En lugar de "params", usamos otra variable
export default async function ElementPage({ params: routeParams }: any) {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/");
  }

  const element = await db.element.findUnique({
    where: {
      id: routeParams.elementId,
    },
  });

  if (!element) {
    redirect("/");
  }

  return (
    <div>
      <h1>Element Page</h1>
      <div>
        <FormEditElement dataElement={element} />
      </div>
    </div>
  );
}
