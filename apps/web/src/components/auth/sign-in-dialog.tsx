import { Dialog, DialogContent, DiallogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, Button } from "@base-ui/react"
import { DialogHeader } from "../ui/dialog";
import { GoogleLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { XLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function SignInDialog({
    triggerLabel,
}:{
    triggerLabel: string;
}) {
    return(
        <Dialog>
            <DialogTrigger>
                <Button variant={"default"}>{triggerLabel}</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg rounded-none rounded-t-2xl md:rounded-2xl px-0 pb-4 font-poppins">
                <DialogHeader className="px-6 pt-6 text-left">
                    <DialogTitle>
                        Sign In to Continue
                    </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                    Access your account and create new e-lafda
                </DialogDescription>
                </DialogHeader>

                <div className="px-6 py-4">
                    <div className="flex flex-col gap-4">
                        <Button variant={"outline"}
                        className="w-full h-12 justify-center rounded-md border-2 text-base font-semibold"
                        >
                        <GoogleLogoIcon weight="bold" className="size-4"/>
                        Continue with Google
                        </Button>
                        <div className="flex items-center gap-3 px-2 text-xs font-semibold uppercase tracking-tight text-muted-foreground">
                            <span className="h-px flex-1 bg-border"/>
                            or
                            <span className="h-px flex-1 bg-border"/>
                        </div>
                        <Button variant={"outline"}
                        className="w-full h-12 justify-center rounded-md border-2 text-base font-semibold"
                        >
                        <XLogoIcon weight="bold" className="size-4"/>
                        Continue with X
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}