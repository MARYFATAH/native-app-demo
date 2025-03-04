import { Redirect } from "expo-router";
export default function Index() {
  console.log("Index has been rendered");
  return <Redirect href="animation" />;
}
