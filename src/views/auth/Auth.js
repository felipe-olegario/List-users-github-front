import { React } from 'react';
import { Button, Card } from 'react-bootstrap';
import service from '../../services/auth';
import image from '../../photo-perfil.jpeg'
import './Auth.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	async function startAuthentication() {
		const res = await service.authenticate();
		if (res.data.urlRedirect) {
			window.location.href = res.data.urlRedirect;
		}
	}

	return (
		<div className='container-auth'>
			<Card>
				<Card.Img variant="top" src={image} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Hi, i like a lot this chalenger, i remembered some technologies and concepts, thank you so much. i really want this chance and i hope that you like of my project. Thank you for this oportunity, 
					</Card.Text>
					<Button variant="primary" onClick={startAuthentication}>Get start</Button>
				</Card.Body>
			</Card>
		</div>
	)
}