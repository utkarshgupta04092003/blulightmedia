import { COMPANY_NAME } from "../../_lib/configs/global";
import { getDate } from "../../_lib/utils/global";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <h2>Welcome to {COMPANY_NAME}</h2>
      <p>Current date is {getDate()} in UTC</p>
    </div>
  );
}
