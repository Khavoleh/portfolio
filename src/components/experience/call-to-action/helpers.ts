import { getLanguageUrl } from '@shared/helpers';
import { CALL_TO_ACTION_PROJECTS_PAGE } from './constants';

export const getProjectsUrl = (url: URL): string => getLanguageUrl(url, CALL_TO_ACTION_PROJECTS_PAGE);