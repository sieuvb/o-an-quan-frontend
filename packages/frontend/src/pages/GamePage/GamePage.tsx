import React from 'react';
import { observer } from 'mobx-react-lite';
import { appModel } from 'models';
import { PlayerSection, ChessBoard, GameSharingLink } from 'components';
import { RoomStatus } from '@o-an-quan/shared';
import { PageWrapper } from './styles';

export const GamePage = observer(() => {
  const {
    currPlayer,
    rivalPlayer,
    gameSharingLink,
    isRoomOwner,
    roomInfo,
    isCurrPlayerTurn,
  } = appModel.gameModel;
  const isShowRoomLink =
    isRoomOwner && roomInfo?.status === RoomStatus.WAITING_FOR_PLAYERS;
  const currTurn = roomInfo?.gameState?.currentTurn;

  return (
    <PageWrapper>
      <PlayerSection player={rivalPlayer} currTurn={currTurn} />
      {roomInfo?.gameState && <ChessBoard />}
      <PlayerSection player={currPlayer} isCurrPlayer currTurn={currTurn} />
      {isShowRoomLink && (
        <GameSharingLink className="link-sharing" link={gameSharingLink} />
      )}
    </PageWrapper>
  );
});
