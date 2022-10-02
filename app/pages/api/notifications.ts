import { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";
import { INotification, TActionType } from "../../interfaces";

const icon = () => {
  const id = Math.random()
  return `https://picsum.photos/60/60?random=${id}`
};
const notifications: INotification[] = [
  {
    id: uuid(),
    icon: icon(),
    name: "Mark Webber",
    createdAt: "1m ago", // formatted
    isUnread: true,
    message: {
      actionType: TActionType.reactToYourRecentPost,
      content: "My first tournament today!",
    },
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Angela Gray",
    createdAt: "1m ago",
    isUnread: true,
    message: {
      actionType: TActionType.followedYou
    },
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Jacob Thompson",
    createdAt: "1day ago",
    isUnread: true,
    message: {
      actionType: TActionType.hasJoinedYourGroup,
      content: 'Chess Club'
    }
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Rizky HasanuddIn",
    createdAt: "5 day ago",
    isUnread: false,
    message: {
      actionType: TActionType.sentYouAPrivateMessage,
      content: "Hello,thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having of fun and improving my game."
    }
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Klmberly Smlth",
    createdAt: "1week ago",
    isUnread: false,
    message: {
      actionType: TActionType.commentedOnYourPicture,
      content: icon()
    }
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Nathan Peterson",
    createdAt: "2weeks ago",
    isUnread: false,
    message: {
      actionType: TActionType.reactToYourRecentPost,
      content: "5 end-game strategies to increase your winrate"
    }
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Anna Klm",
    createdAt: "2weeks ago",
    isUnread: false,
    message: {
      actionType: TActionType.leftTheGroup,
      content: "Chess Club"
    }
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<INotification[]>) {
  res.status(200).json(notifications);
}
