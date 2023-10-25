import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hola, soy{' '}
        <span className={s.purple}>Juan Francisco Reales </span>
        de <span className={s.purple}> Mendoza, Argentina.</span>
        <br />
        Full Stack Developer, con experiencia en desarrollo web usando
        React.
        <br />
        <br />
        Soy un Desarrollador Web Fullstack, formado dentro del perfil
        de tecnologías PERN, con dominio en{' '}
        <span className={s.purple}>
          JavaScript, React, Node, Java , PostgresSQL, Git, HTML, CSS,
          Sequelize, MySQL,
        </span>{' '}
        entre otras; orientado hacia el trabajo en equipo,
        responsabilidad, productividad y eficiencia. Me mantengo en
        constante aprendizaje para adquirir nuevas aptitudes y
        habilidades que me permitan ofrecer soluciones eficientes,
        versátiles y enmarcadas en la escalabilidad y sostenibilidad.
        <br />
        <br />
        Mi objetivo consiste en formar parte de una organización en el
        área Tech que me permita potenciar aún más mis habilidades a
        la vez que mi talento, experiencia y compromiso representen
        para esa organización un valor agregado. No suelo mostrar
        resistencia a los cambios en ningún caso, ya que por mi parte
        he generado mis propios cambios de paradigmas a lo largo de mi
        vida profesional, permitiéndome esto formar una carrera
        integral.
        <br />
        <br />
        Vengo del área de Atención al público, luego Administración y
        finalmente llegué a lo que de pequeño me apasionaba que era la
        programación. Mis experiencias me han llevado a desarrollar
        habilidades blandas como{' '}
        <span className={s.purple}>
          la empatía, la resolución de problemas, el trabajo en
          equipo, orientación al cliente,
        </span>{' '}
        {` `}entre otras.
        <br />
        <br />
        Aparte de codear, me gustan otras actividades como:
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Jugar fútbol de salón
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Paternar
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Leer
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
