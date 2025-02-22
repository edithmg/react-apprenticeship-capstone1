import React from 'react';
import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from '../../context/GlobalContext';
import VideoList from './VideoList.component';
import * as videos from '../../utils/mocks/youtube-videos-mock.json';

const url = process.env.REACT_APP_YT_BASE_URL;

const handlers = [
  // fetching videos mock
  rest.get(`${url}`, (req, res, ctx) => res(ctx.status(200), ctx.json(videos))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('VideoList section is fetching data from api', async () => {
  const { findByText } = render(
    <GlobalProvider>
      <BrowserRouter>
        <VideoList />
      </BrowserRouter>
    </GlobalProvider>
  );

  expect(await findByText('Wizeline')).toBeInTheDocument();
});
