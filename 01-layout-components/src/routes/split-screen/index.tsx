import { createFileRoute } from "@tanstack/react-router";
import { SplitScreen } from "../../components/split-screen";

export const Route = createFileRoute("/split-screen/")({
  component: RouteComponent,
});

const LeftSideComponent = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComponent = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: "brown" }}>{title}</h2>;
};

function RouteComponent() {
  return (
    <SplitScreen leftWidth={5} rightWidth={1}>
      <LeftSideComponent title="Left Component" />
      <RightSideComponent title="Right Component" />
    </SplitScreen>
  );
}
