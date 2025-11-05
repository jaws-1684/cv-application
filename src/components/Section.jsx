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
		return <p>{responsibilities}</p>
	}
	return <ul>{responsibilities.split(";").map(s => <li>{s}</li>)}</ul>
}
export function EduSection({edudata}) {
	return (<div className="education-item">
  <div className="duration" style={{ display: "flex", gap: 5 }}>
    <div className="div" style={{ display: "flex", marginBottom: 2, gap: 4 }}>
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
    <div className="div" style={{ display: "flex", marginBottom: 2 }}>
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
    <div className="duration" style={{ display: "flex", gap: 5 }}>
      <div className="div" style={{ display: "flex", marginBottom: 2, gap: 4 }}>
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
      <div className="div" style={{ display: "flex", marginBottom: 2 }}>
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
export function Section({data, className}) {
	return (<div className={"section " + className}>
			{data.map((obj, i) => {
				return Object.entries(obj).filter(([k, v]) => !["id", "first_name", "last_name"].includes(k)).map(([k, v]) => <Field key={k+v} label={k} value={v}/>) 
			})}
	</div>)
}

