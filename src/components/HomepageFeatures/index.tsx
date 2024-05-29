import clsx from 'clsx';
//import robloxStudioIcon from "@site/static/img/robloxStudioIcon.png"
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Roblox Studio',
    description: (
      <>
        Learn game development skills, 3D modeling and animation, and entrepreneurship skills.
      </>
    ),
  },
  {
    title: 'Python',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn programming fundamentals, problem-solving skills, and machine learning and artificial intelligence.
      </>
    ),
  },
  {
    title: 'Robotics',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn cutting-edge technologies and innovations that enable machines to perform tasks.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
