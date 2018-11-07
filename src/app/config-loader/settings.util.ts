import { SettingsLoaderService } from './settings-loader.service';

export const fetchAPIKey = (appSettingsService: SettingsLoaderService) => {
    return () => {
        appSettingsService.fetchAPIKeyFromServer();
    };
};

export const fetchBaseURL = (appSettingsService: SettingsLoaderService) => {
    return () => {
        appSettingsService.fetchBaseURLFromserver();
    };
};

export const asyncOperation = (appSettingsService: SettingsLoaderService) => {
    return () => {
        appSettingsService.anyAsyncFunction();
    };
};
