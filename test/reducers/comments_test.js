import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('CommentsReducer', () => {
  it('handles action with unknown type', () => {
    const action = { type: 'NOT A TYPE', payload: 'never seen' };
    const state = commentReducer([], action);
    expect(state).to.eql([], action);
  });

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' }
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
