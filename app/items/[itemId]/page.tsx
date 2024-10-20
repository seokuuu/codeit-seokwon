import TodoDetails from "@/app/components/TodoDetails";

/**
 *
 * @description TodoDetailsPage 컴포넌트는 할 일 상세 페이지를 보여주는 컴포넌트입니다.
 * @param {object} { params } - params를 받아옵니다.
 * @param {object} { params.itemId } - itemId를 받아옵니다.
 * @returns {JSX.Element} TodoDetailsPage 컴포넌트를 반환합니다.
 *
 */

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
