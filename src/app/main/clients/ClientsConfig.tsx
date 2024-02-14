import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'clientsPage', en);
i18next.addResourceBundle('tr', 'clientsPage', tr);
i18next.addResourceBundle('ar', 'clientsPage', ar);

const Clients = lazy(() => import('./Clients'));

/**
 * The Clients page config.
 */
const ClientsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'clients',
			element: <Clients />
		}
	]
};

export default ClientsConfig;
