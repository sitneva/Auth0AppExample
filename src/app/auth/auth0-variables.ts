interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'ScD0C7RiSRm93Erad1UR7dmqxTg7PpKJ',
  domain: 'sitneva.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
