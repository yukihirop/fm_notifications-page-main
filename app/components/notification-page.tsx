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
      <button className="text-white bg-[#0a317b] font-medium rounded-lg text-sm p-2">
        {unreadCount}
      </button>
      <div className="mt-2">
        {items.map((item) => (
          <div className="mb-2">
            <Notification key={item.id} {...item} />
          </div>
        ))}
      </div>
    </h3>
  </div>
);

export default NotificationPage;
