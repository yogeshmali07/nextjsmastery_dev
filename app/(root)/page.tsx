import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

const Home = async () => {
  const session = await auth()

  console.log({session});
  return (
    <>
      <h1 className="h1-bold">Hello world!</h1>

      <form className="px-10 mt-[100px]" action={async () => {
        "use server";

        await signOut({redirectTo: ROUTES.SIGN_IN})
      }}>
        <Button className="cursor-pointer" type="submit" >Log out</Button>
      </form>
    </>
  );
}

export default Home;
