import s from './Footer.module.scss';
import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          {/* <h1>Made with ❤️ by Snaichuk Volodymyr</h1> */}
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://wa.me/+5492613623216"
                target="_blank"
                rel="noreferrer"
                aria-label="Whatsapp"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JFReales"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.facebook.com/Snaychuk"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebookSquare />
              </a>
            </li> */}
            {/* <li>
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                target="_blank"
                rel="noreferrer"
                aria-label="TelegramPlane"
              >
                <FaMailBulk />
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/juan-francisco-reales/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
