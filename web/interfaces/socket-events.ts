import { User } from './user.model';

export enum SocketMessageType {
  CHAT = 'CHAT',
  PING = 'PING',
  NAME_CHANGE = 'NAME_CHANGE',
  PONG = 'PONG',
  SYSTEM = 'SYSTEM',
  USER_JOINED = 'USER_JOINED',
  CHAT_ACTION = 'CHAT_ACTION',
  FEDIVERSE_ENGAGEMENT_FOLLOW = 'FEDIVERSE_ENGAGEMENT_FOLLOW',
  FEDIVERSE_ENGAGEMENT_LIKE = 'FEDIVERSE_ENGAGEMENT_LIKE',
  FEDIVERSE_ENGAGEMENT_REPOST = 'FEDIVERSE_ENGAGEMENT_REPOST',
  CONNECTED_USER_INFO = 'CONNECTED_USER_INFO',
  ERROR_USER_DISABLED = 'ERROR_USER_DISABLED',
  ERROR_NEEDS_REGISTRATION = 'ERROR_NEEDS_REGISTRATION',
  ERROR_MAX_CONNECTIONS_EXCEEDED = 'ERROR_MAX_CONNECTIONS_EXCEEDED',
  VISIBILITY_UPDATE = 'VISIBILITY-UPDATE',
}

export interface SocketEvent {
  id: string;
  timestamp: Date;
  type: SocketMessageType;
}

export interface ConnectedClientInfoEvent extends SocketEvent {
  user: User;
}
export interface ChatEvent extends SocketEvent {
  user: User;
  body: string;
}