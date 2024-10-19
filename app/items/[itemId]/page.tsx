import TodoDetails from "@/app/components/TodoDetails";

export default function TodoDetailsPage({
  params,
}: {
  params: { itemId: string };
}) {
  return (
    <main className="container mx-auto ">
      <TodoDetails itemId={Number(params.itemId)} />
    </main>
  );
}
