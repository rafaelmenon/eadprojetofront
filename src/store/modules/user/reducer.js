import produce from 'immer';

const INITIAL_STATE = {
    id: '',
    name: '',
    email: '',
    admin: '',
    active: '',
    phone: '',
    city: ''
};

export default function user(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.id = payload.user.id;
        draft.name = payload.user.name;
        draft.email = payload.user.email;
        draft.admin = payload.user.admin;
        draft.active = payload.user.active;
        draft.phone = payload.user.phone;
        draft.city = payload.user.city;
        break;
      }


      case '@auth/SIGN_OUT': {
        draft.id = null;
        draft.name = null;
        draft.email = null;
        draft.admin = null;
        draft.active = null;
        draft.phone = null;
        draft.city = null;
        break;
      }

      default:
    }
  });
}
