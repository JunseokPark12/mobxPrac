import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../store/countSlice';

const getDataFromStarwarsApi = async (url) => {
  const randomValue = Math.floor(Math.random() * 10 + 1);
  const { status, data } = await axios.get(`${url}${randomValue}`);
  url += '123';
  console.log('api called', url);
  if (status === 200) return data;
  return null;
};

const useTestQuery = () => {
  return useQuery('apiData', () => getDataFromStarwarsApi(`https://swapi.dev/api/people/`), {
    staleTime: Infinity,
  });
};

const ChangeButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
`;

function MainBody() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { isLoading, isSuccess, data } = useTestQuery();

  const whenClickDecrement = () => {
    // queryClient.invalidateQueries('apiData');
    dispatch(decrement());
  };

  const doRefetch = () => {
    queryClient.invalidateQueries();
  };

  return (
    <div>
      <p>MainBody</p>
      <ChangeButton color="green" onClick={() => dispatch(increment())}>
        +
      </ChangeButton>
      <ChangeButton color="red" onClick={() => whenClickDecrement()}>
        -
      </ChangeButton>
      <button onClick={doRefetch} type="button">
        Refetch
      </button>
      {isLoading && <p>Loading</p>}
      {isSuccess && <p>{data.name}</p>}
    </div>
  );
}

export default MainBody;
