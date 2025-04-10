import {UserRole} from '@core/enums/userRole.enum';

export interface ResponseModel {
  first_name: string,
  last_name: string,
  role: UserRole,
  token: string,
}
