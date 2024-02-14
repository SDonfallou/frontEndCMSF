/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DemoContent from '@fuse/core/DemoContent';
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

function Clients() {
	const { t } = useTranslation('clientsPage');
	const [clients, setClients] = useState([]);
	const apiKey = 'hH4i1hBLTq24EbWgcQDkU2WnaXZZA8m77X2SLuft'; // Aggiungi qui la tua API key

	useEffect(() => {
		const fetchClients = async () => {
			try {
				const url = 'https://die96ddrn3.execute-api.eu-south-1.amazonaws.com/prod/clients';
				const response = await fetch(url, {
					headers: {
						'x-api-key': apiKey
					}
				});
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setClients(data);
			} catch (error) {
				console.error('Error fetching clients:', error);
			}
		};

		fetchClients();
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
					<h4>{t('CLIENTS')}</h4>
					<TableContainer component={Paper}>
						<Table aria-label="clients table">
							<TableHead>
								<TableRow>
									<TableCell>Ragione Sociale</TableCell>
									<TableCell>Partita IVA</TableCell>
									<TableCell>Indirizzo Spedizione</TableCell>
									<TableCell>Email</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{clients.map((client) => (
									<TableRow key={client.clientId}>
										<TableCell>{client.ragioneSociale}</TableCell>
										<TableCell>{client.pIva}</TableCell>
										<TableCell>{client.indirizzoSpedizione}</TableCell>
										<TableCell>{client.mail}</TableCell>
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

export default Clients;
