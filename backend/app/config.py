from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    database_url: str = 'sqlite:///./lpi_db.sqlite3'
    jwt_secret: str = 'replace-with-secure-secret'
    jwt_algorithm: str = 'HS256'
    access_token_expire_minutes: int = 120

    model_config = SettingsConfigDict(env_file='.env')


settings = Settings()
