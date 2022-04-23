import { config } from "dotenv";
import {
  enableAll,
  warn as _warn,
  info as _info,
  error as _error,
  trace as _trace,
  debug as _debug,
} from "loglevel";

config();

const ENV = process.env.NODE_ENV || "development";

enableAll();

const CONFIG = {
  production: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    logger: {
      warn: _warn,
      info: _info,
      error: _error,
      trace: _trace,
      debug: _debug,
    },
    db: {
      url: process.env.DB_URL,
    },
    firebase: {
      certConfig: {
        type: process.env.type,
        project_id: process.env.project_id,
        private_key_id: process.env.private_key_id,
        private_key: process.env.private_key,
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: process.env.auth_uri,
        token_uri: process.env.token_uri,
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
        client_x509_cert_url: process.env.client_x509_cert_url,
      },
    },
  },
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    logger: {
      warn: _warn,
      info: _info,
      error: _error,
      trace: _trace,
      debug: _debug,
    },
    db: {
      url: process.env.DB_URL,
    },
    firebase: {
      certConfig: {
        type: process.env.type,
        project_id: process.env.project_id,
        private_key_id: process.env.private_key_id,
        private_key: process.env.private_key,
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: process.env.auth_uri,
        token_uri: process.env.token_uri,
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
        client_x509_cert_url: process.env.client_x509_cert_url,
      },
    },
  },
  test: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    logger: {
      warn: _warn,
      info: _info,
      error: _error,
      trace: _trace,
      debug: _debug,
    },
    db: {
      url: process.env.DB_URL,
    },
    firebase: {
      certConfig: {
        type: process.env.type,
        project_id: process.env.project_id,
        private_key_id: process.env.private_key_id,
        private_key: process.env.private_key,
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: process.env.auth_uri,
        token_uri: process.env.token_uri,
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
        client_x509_cert_url: process.env.client_x509_cert_url,
      },
    },
  },
};

export default CONFIG[ENV];
