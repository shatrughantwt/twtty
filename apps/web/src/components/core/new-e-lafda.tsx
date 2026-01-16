import { Button } from "@/components/ui/button";
import { SignInDialog } from "../auth/sign-in-dialog";

function NewELafda() {
  const signedIn = false;

  if (signedIn) {
    return (
      <Button>
        Create New E-lafda
      </Button>
    );
  }

  return <SignInDialog triggerLabel="Create New E-lafda" />;
}

export { NewELafda };