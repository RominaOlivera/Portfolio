import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import "./footer.css"

export default function footer() {
    return (
        <div>
            <footer class="footer">
			<div class="footer-content">
				<h2>Romina Olivera</h2>
				<h5>Full Stack Developer</h5>
			</div>
			<div class="social-network">
				<a href="https://twitter.com/RominaOli27" target="_blank">
                <FaTwitter />
				
				</a> 
				<a href="https://www.linkedin.com/in/rominaolivera-developer" target="_blank">
                <BsLinkedin />
				</a>
				<a href="https://github.com/RominaOlivera"  target="_blank">
                <BsGithub />
					</a>
			</div>

		</footer>
        </div>
    )
}
