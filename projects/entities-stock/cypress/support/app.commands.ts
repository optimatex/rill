import { navigate } from '../employee';
import { DOMAIN_ROOT } from './constants';

export const navToAppRoute = (url: string) => navigate(url);

export const navToMessageForm = () => navToAppRoute(DOMAIN_ROOT);

export const navToMessages = () => navToAppRoute(DOMAIN_ROOT);
