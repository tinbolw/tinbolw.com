import { status } from "../../_lib/enums";
import Page from "../_components/body";

export default async function Home() {
  return (
    <Page title="Current Projects" status={status.Current}/>
  );
}
