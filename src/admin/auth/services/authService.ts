import type { CreateAccountFormData, LoginFormData } from "../types";

export type AuthApiResult = {
  success: boolean;
  message?: string;
};

export const passwordRules = [
  { label: "Minimum 8 characters", test: (value: string) => value.length >= 8 },
  { label: "One uppercase letter", test: (value: string) => /[A-Z]/.test(value) },
  { label: "One lowercase letter", test: (value: string) => /[a-z]/.test(value) },
  { label: "One number", test: (value: string) => /\d/.test(value) },
] as const;

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validatePasswordRequirements(password: string) {
  return passwordRules.map((rule) => ({
    ...rule,
    valid: rule.test(password),
  }));
}

export const authService = {
  async login(payload: LoginFormData): Promise<AuthApiResult> {
    await new Promise((resolve) => window.setTimeout(resolve, 550));

    const validEmail = isValidEmail(payload.email);
    const validPassword = payload.password.length >= 8;

    if (!validEmail || !validPassword) {
      return { success: false, message: "Invalid email or password." };
    }

    return { success: true, message: "Signed in successfully." };
  },

  async createAccount(payload: CreateAccountFormData): Promise<AuthApiResult> {
    await new Promise((resolve) => window.setTimeout(resolve, 650));

    if (!payload.fullName.trim() || !isValidEmail(payload.email) || payload.password.length < 8) {
      return { success: false, message: "Please review the account details and try again." };
    }

    if (payload.password !== payload.confirmPassword) {
      return { success: false, message: "Passwords do not match." };
    }

    return { success: true, message: "Account created successfully." };
  },

  async requestPasswordReset(email: string): Promise<AuthApiResult> {
    await new Promise((resolve) => window.setTimeout(resolve, 450));

    if (!isValidEmail(email)) {
      return { success: false, message: "Please enter a valid email address." };
    }

    return {
      success: true,
      message: "If this account is registered, a reset link will be sent to your email.",
    };
  },
};
