import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";
import { INotification, TActionType, TContentFormat } from "../../interfaces";

const icon = () => {
  const id = Math.random();
  return `https://picsum.photos/60/60?random=${id}`;
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
      contentFormat: TContentFormat.plain,
      content: "My first tournament today!",
    },
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Angela Gray",
    createdAt: "5m ago",
    isUnread: true,
    message: {
      actionType: TActionType.followedYou,
      contentFormat: TContentFormat.plain
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
      contentFormat: TContentFormat.markdown,
      content: "[Chess Club](https://www.chessclub.com/)",
    },
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Rizky HasanuddIn",
    createdAt: "5day ago",
    isUnread: false,
    message: {
      actionType: TActionType.sentYouAPrivateMessage,
      contentFormat: TContentFormat.plain,
      content:
        "Hello,thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having of fun and improving my game.",
    },
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Klmberly Smlth",
    createdAt: "1week ago",
    isUnread: false,
    message: {
      actionType: TActionType.commentedOnYourPicture,
      contentFormat: TContentFormat.plain,
      content: icon(),
    },
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Nathan Peterson",
    createdAt: "2weeks ago",
    isUnread: false,
    message: {
      actionType: TActionType.reactToYourRecentPost,
      contentFormat: TContentFormat.plain,
      content: "5 end-game strategies to increase your win rate",
    },
  },
  {
    id: uuid(),
    icon: icon(),
    name: "Anna Klm",
    createdAt: "2weeks ago",
    isUnread: false,
    message: {
      actionType: TActionType.leftTheGroup,
      contentFormat: TContentFormat.markdown,
      content: "[Chess Club](https://www.chessclub.com/)",
    },
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INotification[]>
) {
  res.status(200).json(notifications);
}
