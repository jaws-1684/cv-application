import {Section, JobSection, EduSection } from "./Section.jsx"
import '../styles/Cv.css'

function fullName(data) {
	return data.first_name + " " + data.last_name
}
export default function Cv({data}) {
	return <div className="cv-container">
			<div className="cv">
				<div className="header">
					<div className="h-container">
						<h1 style={{textAlign: "start", marginTop: '5%'}}>{fullName(data.general[0])}</h1>
						<Section className="general" data={data.general}/>
					</div>
					<img src="https://avatar.iran.liara.run/public/boy" />
				</div>
			<div className="main">
					<div className="left">
						<h2>Education</h2>
						{data.education.map(obj => <EduSection edudata={obj}/>)}
						 <h2>Work experience</h2>
						{data.experience.map(obj => <JobSection jobdata={obj}/>)}
						
					</div>
					<div className="right">
						
					</div>
					
			</div>	
			
				
		</div>
	</div>

}