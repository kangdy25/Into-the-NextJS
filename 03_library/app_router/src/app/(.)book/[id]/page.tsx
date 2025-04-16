import BookPage from "@/app/book/[id]/page";
import Modal from "@/components/modal";

const Page = (props: any) => {
  return (
    <div>
      <Modal>
        <BookPage {...props} />
      </Modal>
    </div>
  );
};

export default Page;
