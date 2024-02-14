import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'productsPage', en);
i18next.addResourceBundle('tr', 'productsPage', tr);
i18next.addResourceBundle('ar', 'productsPage', ar);

const Products = lazy(() => import('./Products'));

/**
 * The Products page config.
 */
const ProductsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'products',
			element: <Products />
		}
	]
};

export default ProductsConfig;
