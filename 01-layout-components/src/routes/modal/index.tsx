import { createFileRoute } from "@tanstack/react-router";
import { Modal } from "../../components/modal";

export const Route = createFileRoute("/modal/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Modal>ModalContent in here!</Modal>;
}
