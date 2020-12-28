import styled from 'styled-components';

export const StyledAddressBook = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 25%) 1fr;
  padding: 0;
  margin: 0;
  
`;

export const StyledUserList = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  width: 300px;
`;

export const StyledDetails = styled.div`
  margin-left: 30px;
  min-width: 400px;
  min-height: 400px;
`;