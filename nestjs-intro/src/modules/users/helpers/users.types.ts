export type ApiResponse<BodyType extends Record<string, any>> = {
  status?: number;
  message: string;
  data?: CreateUserDto | BodyType;
};

export interface CreateUserDto {
  name?: string;
  lastname?: string;
  email?: string;
  password?: string;
}
