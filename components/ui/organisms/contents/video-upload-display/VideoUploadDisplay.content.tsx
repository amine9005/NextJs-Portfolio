import { motion } from "framer-motion";
import { Controller, UseFormReturn } from "react-hook-form";
import SelectField from "@/components/ui/molecules/select-field/SelectField.molecule";

import UploadVideoFieldInstant from "@/components/ui/molecules/upload-video-instant/UploadVideoInstant.molecule";
import { videoSource } from "@/validations/hero.zod";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { VideoFormType } from "@/validations/video.zod";

const videoInputValues = {
  name: "videoUrl",
  labelTitle: "Video Source",
  type: "text",
  placeholder: "Video Url",
  autoComplete: "off",
};

interface Props {
  form: UseFormReturn<VideoFormType>;
  uploadRoute: "HERO VIDEO" | "PROJECT VIDEO";
}

const VideoUploadDisplayContent = ({ form, uploadRoute }: Props) => {
  const videoSourceInputValues = {
    name: "videoSource",
    labelTitle: "Video Source",
    options: videoSource,
    placeholder: form.watch("videoSource"),
    form: form,
  };
  return (
    <div className="w-full space-y-3">
      <Controller
        name="videoSource"
        control={form.control}
        render={({ field, fieldState }) => (
          <SelectField
            item={videoSourceInputValues}
            field={field}
            fieldState={fieldState}
          />
        )}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: form.watch("videoSource") != "Upload" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`sticky top-0 w-full space-y-4  ${
          form.watch("videoSource") != "Upload" ? "block" : "hidden"
        }
            `}
      >
        <Controller
          name="videoUrl"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={videoInputValues}
            />
          )}
        />{" "}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: form.watch("videoSource") === "Upload" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`sticky top-0 w-full space-y-4  ${
          form.watch("videoSource") === "Upload" ? "block" : "hidden"
        }
            `}
      >
        <Controller
          name="videoFileName"
          control={form?.control}
          render={({ field, fieldState }) => (
            <UploadVideoFieldInstant
              field={field}
              fieldState={fieldState}
              text="Upload Video"
              limit={1}
              form={form}
              name="videoFileName"
              videoRoute={uploadRoute}
            />
          )}
        />{" "}
      </motion.div>
    </div>
  );
};

export default VideoUploadDisplayContent;
