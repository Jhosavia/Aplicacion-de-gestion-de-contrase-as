import { FormEditElement } from "@/components/Shared/FormEditElement";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// ✅ Importa el tipo correcto
import { type Metadata } from "next";

type Props = {
  params: {
    elementId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Elemento ${params.elementId}`,
  };
}

export default async function ElementPage({ params }: Props) {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    redirect("/");
  }

  const element = await db.element.findUnique({
    where: {
      id: params.elementId,
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
