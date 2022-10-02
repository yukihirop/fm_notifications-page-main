import Image from "next/image";
import { INotification, TActionType } from "../interfaces";

type Props = INotification;

const Notification = ({
  icon,
  name,
  message: { actionType, content },
  createdAt,
  isUnread,
}: Props) => {
  // convert to `yyyy-mm-dd hh:mm:ss` to `n *** ago` as hypothesis
  const formatCreatedAt = createdAt;

  const isDisplayContentInline = () => {
    const { sentYouAPrivateMessage, commentedOnYourPicture } = TActionType;
    return (
      content != "" &&
      ![sentYouAPrivateMessage, commentedOnYourPicture].includes(
        actionType as any
      )
    );
  };

  const isDisplayPicureInline = () => {
    return content != "" && actionType === TActionType.commentedOnYourPicture;
  };

  return (
    <div
      className={`flex flex-col space-x-4 ${
        isUnread && "bg-[#F7FAFD] rounded-md"
      }`}
    >
      <div className="flex flex-row">
        {/* profile and main */}
        <div className="flex px-4 pt-4 pb-2 space-x-4">
          {/* profile icon */}
          <div className="w-10 rounded-full min-w-[40px]">
            <Image src={icon} className="rounded-full" width={40} height={40} />
          </div>
          {/* main */}
          <div className="-mt-2">
            <span>
              <strong className="font-bold text-sm">{name}</strong>
              <span className="font-normal text-sm ml-2">{actionType}</span>
              {isDisplayContentInline() && (
                <span className="font-bold text-sm ml-2">{content}</span>
              )}
              {isUnread && (
                <div className="bg-[#f65351] rounded-full w-2 h-2 ml-1.5 inline-block" />
              )}
            </span>
            {/* createdAt */}
            <p className="text-[14px] font-thin text-slate-400 mt-0">
              {formatCreatedAt}
            </p>
            {actionType === TActionType.sentYouAPrivateMessage && content && (
              <div className="my-2 mr-1 p-2 border-solid border-[0.1px] border-[#dde7ee] rounded-sm">
                <p className="whitespace-normal text-xs font-normal">
                  {content}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* your picture */}
      {isDisplayPicureInline() && (
        <div className="float-right ml-auto">
          <Image
            src={content || ""}
            className="font-bold text-sm ml-2 rounded-md float-right"
            width={40}
            height={40}
          />
        </div>
      )}
    </div>
  );
};

export default Notification;
