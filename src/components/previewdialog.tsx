import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Preview from './main/preview'
import { Button } from './ui/button';
import { MdPreview } from 'react-icons/md';
import { ScrollArea } from './ui/scroll-area';
export default function PreviewDialogBtn() {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant={"outline"} className="gap-2">
        <MdPreview className="h-6 w-6" />
        Preview
      </Button>
    </DialogTrigger>
    <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0 mt-14">
      <div className="px-4 py-2 border-b">
        <p className="text-lg font-bold text-muted-foreground">Form preview</p>
        <p className="text-sm text-muted-foreground">This is how your form will look like to your users.</p>
      </div>
      <div className="bg-accent flex flex-col flex-grow items-center justify-center p-6 bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)] overflow-y-auto">
        <div className="max-w-[620px] flex flex-col gap-6 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">

       <Preview/>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

  
}
