import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const AlertSure = (
  openAlert: boolean,
  setOpenAlert: (value: boolean) => void,
  handleSubmitted: () => void
) => {
  return (
    <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
      <AlertDialogContent className="max-w-[360px] w-72 p-2 border-blood gap-1 rounded-lg">
        <AlertDialogTitle className="text-blood text-xl font-notosansthai px-2 pt-2">
          ยืนยันข้อมูล ?
        </AlertDialogTitle>
        <AlertDialogDescription className="text-sandy text-sm font-notosansthai px-4 mb-2">
          กรุณาตรวจสอบข้อมูลก่อนกดยืนยัน
        </AlertDialogDescription>
        <AlertDialogFooter className="flex flex-row gap-3 justify-end">
          <AlertDialogCancel className="w-20 text-blood hover:bg-sakura hover:text-blood m-0">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmitted}
            className="bg-blood w-20 border-transparent hover:bg-sakura"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export {AlertSure};
