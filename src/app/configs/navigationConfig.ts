import i18next from 'i18next';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	{
		id: 'example-component',
		title: 'Example',
		translate: 'EXAMPLE',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'example'
	},
	{
		id: 'clients-component',
		title: 'Clients',
		translate: 'CLIENTS',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'clients'
	},
	{
		id: 'products-component',
		title: 'Products',
		translate: 'PRODUCTS',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'products'
	},
	{
		id: 'orders-component',
		title: 'Orders',
		translate: 'ORDERS',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'orders'
	}
];

export default navigationConfig;
