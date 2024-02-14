/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.divider
	},
	'& .FusePageSimple-content': {},
	'& .FusePageSimple-sidebarHeader': {},
	'& .FusePageSimple-sidebarContent': {}
}));

function Products() {
	const { t } = useTranslation('productsPage');
	const [products, setProducts] = useState([]);
	const apiKey = 'mPevDT1neq40Ol7XhbVdS9Zb9JIlgsV97FZhwWMR'; // Aggiungi qui la tua API key

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const url = 'https://ib212nqa4c.execute-api.eu-south-1.amazonaws.com/prod/products';
				const response = await fetch(url, {
					headers: {
						'x-api-key': apiKey
					}
				});
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, [apiKey]);

	return (
		<Root
			header={
				<div className="p-24">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>{t('PRODUCTS')}</h4>
					<TableContainer component={Paper}>
						<Table aria-label="products table">
							<TableHead>
								<TableRow>
									<TableCell>Nome Prodotto</TableCell>
									<TableCell>Prezzo</TableCell>
									<TableCell>Categoria</TableCell>
									<TableCell>Descrizione</TableCell>
									<TableCell>Opzioni di Consegna</TableCell>
									<TableCell>Dimensioni</TableCell>
									<TableCell>Garanzia</TableCell>
									<TableCell>Quantità disponibile</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{products.map((product) => (
									<TableRow key={product.productId}>
										<TableCell>{product.productName}</TableCell>
										<TableCell>{product.price}</TableCell>
										<TableCell>{product.category}</TableCell>
										<TableCell>{product.productDescription}</TableCell>
										<TableCell>{product.deliveryOptions.join(', ')}</TableCell>
										<TableCell>{product.dimensions}</TableCell>
										<TableCell>{product.warrantyPeriod}</TableCell>
										<TableCell>{product.stockQuantity}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			}
		/>
	);
}

export default Products;
