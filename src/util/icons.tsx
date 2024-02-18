import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { faCopy } from "@fortawesome/free-regular-svg-icons";

interface Icons {
    [key: string] : JSX.Element;
}

export const icons: Icons = {
    github: <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>,
    copy: <FontAwesomeIcon icon={faCopy} ></FontAwesomeIcon>
}