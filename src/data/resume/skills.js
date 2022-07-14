const skills = [
  {
    title: 'Octave',
    competency: 4,
    category: ['Electronics'],
  },
  {
    title: 'Circuitmaker',
    competency: 5,
    category: ['Electronics'],
  },
  {
    title: 'Altium',
    competency: 5,
    category: ['Electronics'],
  },
  {
    title: 'LTspice',
    competency: 5,
    category: ['Electronics'],
  },
  {
    title: 'Multisim',
    competency: 5,
    category: ['Electronics'],
  },
  {
    title: 'Proteus',
    competency: 4,
    category: ['Electronics'],
  },
  {
    title: 'PSIM',
    competency: 5,
    category: ['Electronics'],
  },
  {
    title: 'DipTrace',
    competency: 4,
    category: ['Electronics'],
  },
  {
    title: 'Cadence',
    competency: 4,
    category: ['Electronics'],
  },
  {
    title: 'Tanner',
    competency: 5,
    category: ['Electronics'],
  },
  {
    title: 'Verilog',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'HTML',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'CSS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Pytorch',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Spacy',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'HuggingFace',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Seaborn',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Photoshop',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Unity',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Arduino',
    competency: 4,
    category: ['Electronics'],
  },
  {
    title: 'LaTex',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Solidworks',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Ansys',
    competency: 4,
    category: ['Electronics'],
  },
  {
    title: 'FEMM',
    competency: 5,
    category: ['Electronics'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
