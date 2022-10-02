import Image from "next/image";
import { INotification, TActionType, TContentFormat } from "../interfaces";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = INotification;

const Notification = ({
  icon,
  name,
  message: { actionType, content, contentFormat },
  createdAt,
  isUnread,
}: Props) => {
  // convert to `yyyy-mm-dd hh:mm:ss` to `n *** ago` as hypothesis
  const formatCreatedAt = createdAt;

  const isDisplayContentInline = () => {
    const { sentYouAPrivateMessage, commentedOnYourPicture } = TActionType;
    return (
      content != undefined &&
      ![sentYouAPrivateMessage, commentedOnYourPicture].includes(
        actionType as any
      )
    );
  };

  const isDisplayPicureInline = () => {
    return (
      content != undefined && actionType === TActionType.commentedOnYourPicture
    );
  };

  const isDisplayPrivateMessage = () => {
    return (
      content != undefined && actionType === TActionType.sentYouAPrivateMessage
    );
  };

  const isMarkdown = () => {
    return content != undefined && contentFormat === TContentFormat.markdown;
  };

  return (
    <div
      className={`flex flex-row justify-between rounded-md ${
        isUnread && "bg-[#F7FAFD] shadow-sm"
      } hover:bg-[#e5effa] hover:cursor-pointer`}
    >
      <div className="flex flex-row w-full">
        {/* profile and main */}
        <div className="flex px-4 pt-4 pb-2 space-x-4 w-full">
          {/* profile icon */}
          <div className="rounded-full min-w-[40px] max-h-[40px]">
            <Image src={icon} className="rounded-full" width={40} height={40} />
          </div>
          {/* main */}
          <div className="flex flex-row justify-between w-full">
            <div className="-mt-2">
              {/* reaction */}
              <span>
                <strong className="font-bold text-sm">{name}</strong>
                <span className="font-normal text-sm ml-2">{actionType}</span>
                {isDisplayContentInline() &&
                  (isMarkdown() ? (
                    <span className="font-bold text-sm ml-2">
                      <ReactMarkdown
                        children={content || ""}
                        remarkPlugins={[remarkGfm]}
                        className="inline-block"
                        components={{
                          a: ({ node, ...props }) => (
                            <a
                              className="hover:underline text-[color:var(--blue)]"
                              {...props}
                              target={"_blank"}
                            />
                          ),
                        }}
                      />
                    </span>
                  ) : (
                    <span className="font-bold text-sm ml-2">{content}</span>
                  ))}
                {isUnread && (
                  <div className="bg-[#f65351] rounded-full w-2 h-2 ml-1.5 inline-block" />
                )}
              </span>
              {/* createdAt */}
              <p className="text-[14px] font-thin text-slate-400 mt-0">
                {formatCreatedAt}
              </p>
              {/* private message */}
              {isDisplayPrivateMessage() && (
                <div className="my-2 p-3 border-solid border-[0.1px] border-[#dde7ee] rounded-sm">
                  <p className="whitespace-normal text-[14px] font-normal">
                    {content}
                  </p>
                </div>
              )}
            </div>
            {/* your picture */}
            {isDisplayPicureInline() && (
              <div className="ml-100">
                <Image
                  src={content || ""}
                  className="font-bold text-sm rounded-md"
                  width={40}
                  height={40}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
