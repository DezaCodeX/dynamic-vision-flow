export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type CreateAccountFormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
};

export type AuthMessageTone = "info" | "success" | "error";

export type AuthFormErrors<T extends Record<string, string>> = Partial<Record<keyof T, string>>;
