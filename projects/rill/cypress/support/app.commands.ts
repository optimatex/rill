import { navigate } from '../employee';
import { DOMAIN_ROOT, CHAT_1 } from './constants';

export const navToAppRoute = (url: string) => navigate(url);

export const navToHome = () => navToAppRoute(DOMAIN_ROOT);

export const navToChat = () => navToAppRoute(CHAT_1);
