import {signalStore, withState, withMethods, patchState} from '@ngrx/signals';
import {ResponseModel} from '../models/response.model';
import {UserRole} from '@core/enums/userRole.enum'

export interface AuthState {
  isAuthenticated?: boolean;
  user: ResponseModel | null;
  token: string;
  role: UserRole
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: '',
  role: UserRole.UNAUTHORIZED
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    authorization(data: ResponseModel) {
      patchState(store, {
        isAuthenticated: !!data.token && !!data,
        user: data,
        token: data.token,
        role: data.role,
      });
    }
  }))
);
