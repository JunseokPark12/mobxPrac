import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../store/countSlice';

const ChangeButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
`;

function MainBody() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useTestQuery();

  useEffect(() => {}, []);

  const getDataFromStarwarsApi = async (url) => {
    const { status, data } = await axios.get('url');
    if (status === 200) return data;
    return null;
  };

  const useTestQuery = () => {
    return useQuery('apiData', getDataFromStarwarsApi);
  };

  return (
    <div>
      <p>MainBody</p>
      <ChangeButton color="green" onClick={() => dispatch(increment())}>
        +
      </ChangeButton>
      <ChangeButton color="red" onClick={() => dispatch(decrement())}>
        -
      </ChangeButton>
      ${isLoading && <p>Loading</p>}
    </div>
  );
}

export default MainBody;
