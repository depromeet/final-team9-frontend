import React, { useCallback } from 'react';
import plus from '../../images/plus.svg';
import * as styled from './style';
import { useDispatch, useSelector } from 'react-redux';
import { roomNameByType } from '../../constants/roomType';
import { selectRoomAction } from '../../store/actions/RoomActions';

function Sidebar() {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.room.rooms);
  const selectedRoomId = useSelector(state => state.room.selectedRoomId);

  const handleRoomClick = useCallback(
    room => {
      dispatch(selectRoomAction(room.id));
    },
    [dispatch],
  );

  return (
    <styled.Wrapper>
      <styled.ButtonWrapper>
        {rooms.map(room => (
          <styled.SideBtn key={room.id} isActive={room.id === selectedRoomId} onClick={() => handleRoomClick(room)}>
            {roomNameByType[room.type]}
          </styled.SideBtn>
        ))}
        <styled.Img src={plus} />
      </styled.ButtonWrapper>
    </styled.Wrapper>
  );
}

export default Sidebar;
