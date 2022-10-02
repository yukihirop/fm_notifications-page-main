import Notification from "./notification";
import { INotification  } from "../interfaces";

export type Props = {
  items: INotification[];
  unreadCount: number;
};

const NotificationPage = ({ items, unreadCount }: Props) => (
  <div className="flex justify-between items-start p-4 bg-[#ffffff]">
    <h3 className="text-xl font-semibold text-gray-900">
      <span>Notifications</span>
      <button className="t4ext-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">
        {unreadCount}
      </button>
      {items.map((item) => (
        <div className="mb-2">
          <Notification {...item} />
        </div>
      ))}
    </h3>
  </div>
);

export default NotificationPage;
