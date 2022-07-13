// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Circuitmaker',
    competency: 5,
    category: ['Electronics'. 'Tools'],
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
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'HTML',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'CSS',
    competency: 4,
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
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Pytorch',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Spacy',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'HuggingFace',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'HuggingFace',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Seaborn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Photoshop',
    competency: 5,
    category: ['Tools'],
  }, 
  {
    title: 'Unity',
    competency: 5,
    category: ['Tools'],
  }, 
  {
    title: 'Unity',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Arduino',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'LaTex',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Solidworks',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Ansys',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'FEMM',
    competency: 5,
    category: ['Tools'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
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
