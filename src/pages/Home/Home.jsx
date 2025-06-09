import { useEffect } from 'react'
import './Home.css'

function Home() {
	useEffect(() => {
		document.title = 'Main Page'
	}, [])
	return (
		<>
			<section className="section">
				<div className="event">
					<h1>Eventos</h1>
					<div className="decorative-line">
						<hr />
						<span className="center-block"></span>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
