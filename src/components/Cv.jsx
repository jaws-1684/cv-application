import {
	Section, 
	JobSection, 
	EduSection, 
	ProfileSection,
	SkillSection,
	AchievementsSection 
} from "./Section.jsx"

import '../styles/Cv.css'
import '../styles//Section.css'
import { usePDF } from 'react-to-pdf';
function fullName(data) {
	return data.first_name + " " + data.last_name
}
function getImage (first_name, last_name) {
	return `https://ui-avatars.com/api/?name=${first_name}+${last_name}`
}
function Header({data}) {
	return(<div className="header">
					<div className="h-container">
						<h1 style={{textAlign: "start", marginTop: '5%'}}>{fullName(data.general[0])}</h1>
						<Section className="general" data={data.general}/>
					</div>
					<img alt="user image" src={getImage(data.general[0].first_name, data.general[0].last_name)} />
				</div>)
}
function Main({data}) {
	return(<div className="main">
					<div className="left">
						<h3>Profile</h3>
						{data.profile.map(obj => <ProfileSection key={"profile" + obj.id} profiledata={obj}/>)}
						 <h3>Work experience</h3>
						{data.experience.map(obj => <JobSection key={"job" + obj.id} jobdata={obj}/>)}
							<h3>Education</h3>
						{data.education.map(obj => <EduSection key={"edu" + obj.id} edudata={obj}/>)}
						
					</div>
					<div className="right">
						<h3>Skills</h3>
						{data.skills.map(obj => <SkillSection key={"skill" + obj.id} skilldata={obj}/>)}
						<h3>Languages</h3>
						{data.languages.map(obj => <SkillSection key={"language" + obj.id} skilldata={obj}/>)}
						<AchievementsSection achievementdata={data.achievements} />	
					</div>
					
			</div>	)
}
export default function Cv({data}) {
	const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

	return <>
	<div>
     <button style={{position: "fixed", top: 0, zIndex: 2000}}onClick={() => toPDF()}>Download PDF</button>
  </div>
	<div className="cv-container">
			<div ref={targetRef} className="cv">
				<Header data={data}/>
				<Main data={data}/>
			</div>
	</div>
	</>
}