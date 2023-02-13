/* -----------------------------------------
Have focus outline only for keyboard users 
 ---------------------------------------- */
const dialog = document.querySelector('.dialog');
const downloadBtn = document.querySelector('.download-btn');
const closeBtn = document.querySelector('.close-btn');
const resumeBtn = document.querySelector('.resume-btn');
const skillsContainer = document.querySelector('.skills-container');
const skills = document.querySelectorAll('.skill');
const learningSkillsContainer = document.querySelector('.learning-skills-container');
const learningSkills = document.querySelectorAll('.learning-skill');
const name = document.querySelectorAll('.heading-primary > span');
let workText = document.querySelectorAll('.work__text');
workText = Array.from(workText);
const workImageBox = document.querySelectorAll('.work__image-box');
const spanContainers = document.querySelector('.title-anim div span');
const letters = spanContainers.textContent.split(''); //Récupère son texte et en faitun tableau
const h2 = document.querySelectorAll('h2');
const aboutContent = document.querySelector('.about__content');
const contactInfo = document.querySelector('.contact__info');

const handleFirstTab = (e) => {
	if (e.key === 'Tab') {
		document.body.classList.add('user-is-tabbing');

		window.removeEventListener('keydown', handleFirstTab);
		window.addEventListener('mousedown', handleMouseDownOnce);
	}
};

const handleMouseDownOnce = () => {
	document.body.classList.remove('user-is-tabbing');

	window.removeEventListener('mousedown', handleMouseDownOnce);
	window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

// const backToTopButton = document.querySelector('.back-to-top');
// let isBackToTopRendered = false;

// let alterStyles = (isBackToTopRendered) => {
// 	backToTopButton.style.visibility = isBackToTopRendered ? 'visible' : 'hidden';
// 	backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
// 	backToTopButton.style.transform = isBackToTopRendered ? 'scale(1)' : 'scale(0)';
// };

// window.addEventListener('scroll', () => {
// 	if (window.scrollY > 700) {
// 		isBackToTopRendered = true;
// 		alterStyles(isBackToTopRendered);
// 	} else {
// 		isBackToTopRendered = false;
// 		alterStyles(isBackToTopRendered);
// 	}
// });

resumeBtn.addEventListener('click', (e) => {
	e.preventDefault();
	dialog.showModal();
});

closeBtn.addEventListener('click', (e) => dialog.close());

addEventListener('scroll', () => {
	const { scrollTop, clientHeight } = document.documentElement;
	const topElementToTopViewport = skillsContainer.getBoundingClientRect().top;
	if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
		skills.forEach((skill) => {
			skill.classList.add('skill--visible');
		});
	}
});
addEventListener('scroll', () => {
	const { scrollTop, clientHeight } = document.documentElement;
	const topElementToTopViewport = learningSkillsContainer.getBoundingClientRect().top;
	if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
		learningSkills.forEach((learningSkill) => {
			learningSkill.classList.add('learning-skill--visible');
		});
	}
});

addEventListener('scroll', () => {
	const { scrollTop, clientHeight } = document.documentElement;

	const topElementToTopViewport = workText.map((element) => {
		return element.getBoundingClientRect().top;
	});
	if (scrollTop > (scrollTop + topElementToTopViewport[0]).toFixed() - clientHeight * 0.8) {
		workText[0].style.transform = 'translateX(0)';
		workImageBox[0].style.transform = 'translateX(0)';
	}
	if (scrollTop > (scrollTop + topElementToTopViewport[1]).toFixed() - clientHeight * 0.8) {
		workText[1].style.transform = 'translateX(0)';
		workImageBox[1].style.transform = 'translateX(0)';
	}
});

addEventListener('scroll', () => {
	h2.forEach((element) => {
		const { scrollTop, clientHeight } = document.documentElement;
		const topElementToTopViewport = element.getBoundingClientRect().top;
		if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
			document.documentElement.style.setProperty(element.dataset.var, '10rem');
		}
	});
});
addEventListener('scroll', () => {
	const { scrollTop, clientHeight } = document.documentElement;
	const topElementToTopViewport = aboutContent.getBoundingClientRect().top;
	if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
		console.log('ee');
		aboutContent.style.transform = 'translateX(0)';
	}
});
addEventListener('scroll', () => {
	const { scrollTop, clientHeight } = document.documentElement;
	const topElementToTopViewport = contactInfo.getBoundingClientRect().top;
	if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
		contactInfo.style.transform = 'translateX(0)';
	}
});
spanContainers.innerHTML = ''; // efface le texte présent de base dans le html

letters.forEach((el, index) => {
	if (el === ' ') el = '';
	spanContainers.innerHTML += `<span style="transition-delay: ${
		0.07 * index //ajoute un span dans le span avec une transition et une lettre
	}s">${el}</span>`;
});

window.addEventListener('load', () => {
	const spanLetter = document.querySelectorAll('.title-anim div span span');
	spanLetter.forEach((element) => {
		element.classList.add('rotate');
	});
});
