/* eslint-disable @typescript-eslint/no-unsafe-argument */
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

function Orders() {
	const { t } = useTranslation('ordersPage');
	const [orders, setOrders] = useState([]);
	const apiKey = 'eJkD7u6Xtt3TmAdlf8VSZ8KvABUHJVB6QaWI8kO8'; // Aggiungi qui la tua API key

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const url = 'https://247t8tghfc.execute-api.eu-south-1.amazonaws.com/prod/orders';
				const response = await fetch(url, {
					headers: {
						'x-api-key': apiKey
					}
				});
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setOrders(data);
			} catch (error) {
				console.error('Error fetching orders:', error);
			}
		};

		fetchOrders();
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
					<h4>{t('ORDERS')}</h4>
					<TableContainer component={Paper}>
						<Table aria-label="orders table">
							<TableHead>
								<TableRow>
									<TableCell>Agente</TableCell>
									<TableCell>Cliente</TableCell>
									<TableCell>Stato Ordine</TableCell>
									<TableCell>Metodo di Pagamento</TableCell>
									<TableCell>Tracciamento</TableCell>
									<TableCell>Consegna Prevista</TableCell>
									<TableCell>Istruzioni Speciali</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{orders.map((order) => (
									<TableRow key={order.trackingId}>
										<TableCell>{order.agentId}</TableCell>
										<TableCell>{order.clientId}</TableCell>
										<TableCell>{order.orderStatus}</TableCell>
										<TableCell>{order.paymentMethod}</TableCell>
										<TableCell>{order.trackingId}</TableCell>
										<TableCell>{order.deliveryExpected}</TableCell>
										<TableCell>{order.specialInstructions}</TableCell>
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

export default Orders;
