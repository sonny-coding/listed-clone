import { redirect } from "next/navigation";

const Page = async () => {
  redirect("/regions/all");
};

export default Page;
