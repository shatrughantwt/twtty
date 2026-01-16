"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GoogleLogoIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface SignInDialogProps {
  triggerLabel: string;
}

function SignInDialog({ triggerLabel }: SignInDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants({ variant: "default" }))}>
        {triggerLabel}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg rounded-none rounded-t-2xl md:rounded-2xl px-0 font-poppins">
        <DialogHeader className="px-6 pt-6 text-left">
          <DialogTitle className="tracking-tight font-semibold">
            Sign In to Continue
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Access your account and create new e-lafda
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 py-4">
          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="w-full h-12 gap-2 rounded-md border-2 text-base font-semibold"
            >
              <GoogleLogoIcon weight="bold" className="size-4" />
              Continue with Google
            </Button>

            <div className="flex items-center gap-3 px-2 text-xs font-semibold uppercase text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              or
              <span className="h-px flex-1 bg-border" />
            </div>

            <Button
              variant="outline"
              className="w-full h-12 gap-2 rounded-md border-2 text-base font-semibold"
            >
              <XLogoIcon weight="bold" className="size-4" />
              Continue with X
            </Button>
          </div>
        </div>

        <DialogFooter className="border-t border-border/60 px-6 pt-4 text-center text-sm text-muted-foreground">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="font-medium underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-medium underline">
            Privacy Policy
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export {SignInDialog};