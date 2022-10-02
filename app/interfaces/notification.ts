// formatted
export const TActionType = <const>{
  reactToYourRecentPost: 'reacted to your recent post',
  followedYou: 'followed you',
  hasJoinedYourGroup: 'has joined your group',
  sentYouAPrivateMessage: 'sent you a private message',
  commentedOnYourPicture: 'commented on your picture',
  leftTheGroup: 'left the group'
}

export const TContentFormat = <const>{
  plain: 'plain',
  markdown: 'markdown'
}

export interface INotification {
  id: string;
  icon: string;
  name: string;
  createdAt: string;
  isUnread: boolean
  message: {
    actionType: typeof TActionType[keyof typeof TActionType]
    contentFormat: typeof TContentFormat[keyof typeof TContentFormat]
    content?: string
  }
}
