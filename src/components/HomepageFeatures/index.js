import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Instale',
    Svg: require('@site/static/img/instale.svg').default,
    description: (
      <>
        Siga o passo a passo de instalação
	e comece a usar agora mesmo!
      </>
    ),
    link: 'docs/instalacao',
  },
  {
    title: 'Aprenda',
    Svg: require('@site/static/img/aprenda.svg').default,
    description: (
      <>
        Assita os <b>tutoriais</b> e conheça as
	principais funcionalidades.
      </>
    ),
    link: 'https://www.youtube.com/',
  },
  {
    title: 'Ajuda',
    Svg: require('@site/static/img/ajuda.svg').default,
    description: (
      <>
        Encontrou algum problema? Peça ajuda, ou
	compartilhe soluções com outros usuários.
      </>
    ),
    link: 'https://www.youtube.com/',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} target="_blank">
          <Svg className={styles.featureSvg} role="img" />
	</a>  
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
