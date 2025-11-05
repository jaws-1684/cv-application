import { capitalize, format } from "./Fieldset.jsx"
import '../styles//Section.css'
import { Svg } from "./Svg.jsx"

function Field({label, value}) {
	return (<div className="s-field">
					{Svg[label]}
					<p>{format(label)}:</p>
					<p>{value}</p>
				</div>)
}
function Responsibilities({responsibilities}) {
	if (!responsibilities.includes(";")) {
		return <p className="para">{responsibilities}</p>
	}
	return <ul>{responsibilities.split(";").map(s => <li>{s}</li>)}</ul>
}
export function EduSection({edudata}) {
	return (<div className="education-item">
  <div className="duration">
    <div className="time">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        viewBox="0 0 384 432"
      >
        <path
          fill="#39464f"
          d="M299 240v107H192V240h107zM277 5h43v43h21q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170V5zm64 384V155H43v234h298z"
        />
      </svg>
      <p>{edudata.from} - {edudata.to}</p>
    </div>
    <div className="time">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        viewBox="0 0 24 24"
      >
        <path
          fill="#39464f"
          d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7Zm0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001l-.568.39ZM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z"
        />
      </svg>
      <p>{edudata.location}</p>
    </div>
  </div>
  <div className="degree">{edudata.title}</div>
  <div className="university" style={{ color: "#7b8084" }}>
   { edudata.school_name }
  </div>
</div>
)
}
export function JobSection({jobdata}) {
	return (<div className="section work-experience">
  <div className="job">
    <div className="duration">
      <div className="time">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={15}
          height={15}
          viewBox="0 0 384 432"
        >
          <path
            fill="#39464f"
            d="M299 240v107H192V240h107zM277 5h43v43h21q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170V5zm64 384V155H43v234h298z"
          />
        </svg>
        <p>{jobdata.from} - {jobdata.to}</p>
      </div>
      <div className="time">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={15}
          height={15}
          viewBox="0 0 24 24"
        >
          <path
            fill="#39464f"
            d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7Zm0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001l-.568.39ZM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z"
          />
        </svg>
        <p>{jobdata.location}</p>
      </div>
    </div>
    <div className="job-title">{jobdata.title}</div>
    <div className="company">{jobdata.company_name}</div>
    <div className="job-description">
      <Responsibilities responsibilities={jobdata.responsibilities} />
    </div>
  </div>
</div>
)
}
export function SkillSection({skilldata}) {
  return(<div className="skill">
  <span>{skilldata.skill ?  skilldata.skill : skilldata.language }</span>
  <div className="box">
    <div className="circle" style={{ left: ((Number(skilldata.level) * 9.8) % 100) + "%"}} />
      <div className="level">
        <div className="fill" style={{ width: ((Number(skilldata.level) * 9.8) % 100) + "%" }} />
      </div>
  </div>
</div>
)
}

export function AchievementsSection({achievementdata}) {
 return(<div className="section achievements">
  <div
    className="container"
  >
   <div className="a-header">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 717 717"
    >
      <path
        fill="#39464f"
        d="M358 0c198 0 359 161 359 359S556 717 358 717S0 557 0 359S160 0 358 0zm-4 132c-10 12-15 26-15 41c0 12 4 22 10 29c7 7 17 11 27 11c14 0 27-6 37-18c9-11 14-27 14-44c0-10-3-19-10-26s-17-11-27-11c-13 0-26 6-36 18zm-91 207l12 13c9-10 18-18 24-23c6-4 11-6 15-6c3 0 6 1 8 3c1 3 2 6 2 11c0 25-3 41-16 101s-20 104-20 133c0 11 2 19 6 24c3 5 9 9 17 9c13 0 32-10 54-27c22-18 44-43 68-75l-13-11c-8 10-16 17-22 22c-6 4-11 8-15 8c-3 0-6-3-8-5c-1-3-2-7-2-13c0-4 1-17 5-40c3-23 2-23 8-57c1-10 4-24 7-41c8-51 13-82 13-92c0-9-3-17-6-22c-4-5-10-7-17-7c-12 0-28 9-50 25c-22 17-44 40-70 70z"
      />
    </svg>
    <h3>Achievements</h3>  
   </div> 
   
  </div>
  <div className="achievements">
    <ul id="achievements">{achievementdata.map(achievement => <li>{achievement.achievement}</li>)}</ul>
  </div>
</div>)
}
export function ProfileSection({profiledata}) {
 return (<div className="profile">
  <p className="para">
    {profiledata.about_you}
  </p>
  </div>)
}
export function Section({data, className}) {
	return (<div className={"section " + className}>
			{data.map((obj, i) => {
				return Object.entries(obj).filter(([k, v]) => !["id", "first_name", "last_name"].includes(k)).map(([k, v]) => <Field key={k+v} label={k} value={v}/>) 
			})}
	</div>)
}

