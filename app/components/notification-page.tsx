import Notification from "./notification";
import { INotification } from "../interfaces";

export type Props = {
  items: INotification[];
  unreadCount: number;
};

const NotificationPage = ({ items, unreadCount }: Props) => (
  <div className="ip-4 bg-[#ffffff] rounded-lg p-6">
    <div className="flex flex-row justify-between mb-6">
      <h3 className="text-xl font-semibold text-gray-900">
        <div className="flex flex-row">
          <span className="font-bold text-[color:var(--very-dark-blue)]">Notifications</span>
          <span className="text-white bg-[#0a317b] font-medium rounded-md text-sm px-2 h-5 ml-2 my-auto hover:cursor-pointer">
            {unreadCount}
          </span>
        </div>
      </h3>
      <a
        className="text-sm text-[#5e6778] hover:underline hover:cursor-pointer"
        onClick={() => console.log("Mark all as read")}
      >
        Mark all as read
      </a>
    </div>
    {items.map((item) => (
      <div className="mb-2">
        <Notification key={item.id} {...item} />
      </div>
    ))}
  </div>
);

export default NotificationPage;
