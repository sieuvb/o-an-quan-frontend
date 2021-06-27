import { MoveDirection } from '../enums';
import { IRoomInfo } from './entities';

export interface ICreateGameRoomEventProps {
  playerId: string;
  playerName: string;
  deviceId?: string;
}

export interface ICreateGameRoomSuccessEventProps {
  roomInfo: IRoomInfo;
}

export interface IJoinGameRoomEventProps {
  playerId: string;
  deviceId?: string;
  roomId?: string;
  playerName?: string;
}

export interface IInputMoveProps {
  roomId: string;
  playerId: string;
  squareId: number;
  moveDirection: MoveDirection;
}
