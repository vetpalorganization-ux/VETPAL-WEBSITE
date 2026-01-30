const ADMIN_TOKEN_KEY = 'vetpal_admin_token';
const ENV_TOKEN = import.meta.env.VITE_ADMIN_TOKEN || import.meta.env.VITE_ADMIN_PASSWORD;

export function setAdminToken(token: string) {
  localStorage.setItem(ADMIN_TOKEN_KEY, token);
}

export function clearAdminToken() {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
}

export function getAdminToken() {
  return localStorage.getItem(ADMIN_TOKEN_KEY);
}

export function isAdminAuthenticated() {
  const stored = getAdminToken();
  if (!stored || !ENV_TOKEN) return false;
  return stored === ENV_TOKEN;
}

export function validateAdminToken(input: string) {
  if (!ENV_TOKEN) {
    return false;
  }
  return input === ENV_TOKEN;
}
