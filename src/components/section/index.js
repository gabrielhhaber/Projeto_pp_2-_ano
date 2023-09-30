import {useState} from "react";
import "./section.css";
const Section=(props)=> {
	const sectionId=props.title.toLowerCase();
	//Remove acentos do título para usar como id
	const headingId=sectionId.normalize("NFD").replace(/[\u0300-\u036f]/, "").replace(" ", "-");
	return (
		<section className="section" aria-label={props.title}>
			<h2 className="section-heading" id={headingId}>{props.title}</h2>
			<div className="section-content">{props.children}</div>
		</section>
	);
}
export default Section;