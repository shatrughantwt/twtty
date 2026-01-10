import { Button } from "@base-ui/react"
import SignInDialog from "../auth/sign-in-dialog";

export default function NewELafda() {
  const signedIn = false;

  if(signedIn){
    return(
      <Button>
        Create New E-lafda
      </Button>
    )
  }

    return <SignInDialog triggerLabel="Create New E-lafda"/>;
}
