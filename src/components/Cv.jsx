import {
	Section, 
	JobSection, 
	EduSection, 
	ProfileSection,
	SkillSection,
	AchievementsSection 
} from "./Section.jsx"

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
						<h3>Profile</h3>
						{data.profile.map(obj => <ProfileSection profiledata={obj}/>)}
						 <h3>Work experience</h3>
						{data.experience.map(obj => <JobSection jobdata={obj}/>)}
							<h3>Education</h3>
						{data.education.map(obj => <EduSection edudata={obj}/>)}
						
					</div>
					<div className="right">
						<h3>Skills</h3>
						{data.skills.map(obj => <SkillSection skilldata={obj}/>)}
						<h3>Languages</h3>
						{data.languages.map(obj => <SkillSection skilldata={obj}/>)}
						<AchievementsSection achievementdata={data.achievements} />	
					</div>
					
			</div>	
			
				
		</div>
	</div>

}