import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'ordersPage', en);
i18next.addResourceBundle('tr', 'ordersPage', tr);
i18next.addResourceBundle('ar', 'ordersPage', ar);

const Orders = lazy(() => import('./Orders'));

/**
 * The Orders page config.
 */
const ProductsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'products',
			element: <Orders />
		}
	]
};

export default ProductsConfig;
