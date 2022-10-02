import Image from "next/image";
import { INotification } from "../interfaces";

type Props = INotification

const Notification = ({
  icon,
  name,
  message: { description, content },
  createdAt,
  isUnread,
}: Props) => {
  // convert to `yyyy-mm-dd hh:mm:ss` to `n *** ago` as hypothesis
  const formatCreatedAt = createdAt;

  return (
    <div
      className={`flex flex-col space-x-4 ${
        isUnread && "bg-[#F7FAFD] rounded-md"
      }`}
    >
      <div className="flex px-4 pt-4 pb-2 space-x-4">
        <div className="w-10 rounded-full min-w-[40px]">
          <Image src={icon} className="rounded-full" width={40} height={40} />
        </div>
        <div>
          <div className="flex">
            <span className="font-bold text-sm">{name}</span>{" "}
            <div className="flex items-center">
              <span className="font-normal text-sm ml-2">{description}</span>{" "}
              {isUnread && (
                <span className="bg-[#f65351] rounded-full w-1.5 h-1.5 m-1.5" />
              )}
            </div>
          </div>
          <div className="text-[14px] font-thin text-slate-400">
            {formatCreatedAt}
          </div>
          {content && (
            <div className="my-2 mr-1 p-2 border-solid border-[0.1px] border-[#dde7ee] rounded-sm">
              <p className="whitespace-normal text-xs font-normal">{content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
