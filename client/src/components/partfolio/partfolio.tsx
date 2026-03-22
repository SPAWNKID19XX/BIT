import styles from './portfolio.module.css'
import webtech87 from "../../assets/webtech87.png";
import blendy from "../../assets/blendy.png";
import santiskin from "../../assets/santiskin.png";

interface PartfolioProps {
  id: number;
  title: string;
  description: string;
  link: string;
  git?: string
  img: string;
}

const portfolioItems: PartfolioProps[] = [
  {
    id: 1,
    title: 'WebTech87',
    description: 'Site de empresa de desenvolvimento web, onde apresentamos nossos serviços e portfólio de projetos anteriores.',
    link: 'https://webtech87.pt',
    git: 'gitlink',
    img: webtech87
  },
  {
    id: 2,
    title: 'Blendy',
    description: 'Site de produçao de bebidas, onde apresentamos nossos produtos e serviços de produção de bebidas personalizadas para eventos e empresas.',
    link: 'https://blendy.pt',
    git: 'gitlink',
    img: blendy
  },
  {
    id: 3,
    title: 'Paula Serrano Educação',
    description: 'Site de vendas de cursos online, onde oferecemos uma variedade de cursos em area de psicologia, com conteúdo de alta qualidade e suporte ao aluno.',
    link: 'https://paulaserranoeducacao.pt',
    git: 'gitlink',
    img: santiskin
  }
]


export const Partfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <div className={styles.portfolio_list}>
          {portfolioItems.map(item => (
            <div key={item.id} className={styles.portfolio_item}>
              <div className={styles.img}>
                <a href={item.link}>
                  <img src={item.img} alt={item.title} />
                </a>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.links_button}>
                <a href={item.link}>
                  Projets
                </a>
                <a href={item.link}>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.skils}>
          <h3>Skils</h3>
          <div className={styles.skils_group}>
            <h4>Backend</h4>
            <ul>
              <li>Python</li>
              <li>Django</li>
              <li>Flask</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className={styles.skils_group}>
            <h4>Frontend</h4>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
            </ul>
          </div>
          <div className={styles.skils_group}>
            <h4>Others</h4>
            <ul>
              <li>Docker</li>
              <li>GitHub</li>
              <li>Linux</li>
              <li>Postman</li>
              <li>QA</li>
              <li>LLM</li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}