import { Button } from "@/components/ui/atoms/button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/atoms/dialog/dialog";
import { UseFormReturn } from "react-hook-form";
import { VideoFormType } from "@/validations/video.zod";
import VideoUploadDisplayContent from "@/components/ui/organisms/contents/video-upload-display/VideoUploadDisplay.content";

interface Props {
  title: string;
  form: UseFormReturn<VideoFormType>;
  uploadRoute: "HERO VIDEO" | "PROJECT VIDEO";
}

const VideoUploadDisplayDialog = ({ title, form, uploadRoute }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Upload A Video</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center my-4">
          <VideoUploadDisplayContent form={form} uploadRoute={uploadRoute} />
        </div>
        <DialogFooter>
          <DialogClose
            className="flex w-full justify-center items-center"
            asChild
          >
            <Button width={"fit"} variant={"outline"}>
              Done
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VideoUploadDisplayDialog;
