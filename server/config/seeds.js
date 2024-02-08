const { User, Post, Project, Job } = require('../models');

const seedData = async () => {
  try {
    const user1 = await User.create({
      username: 'sampleUser1',
      password: 'password1',
      email: 'user1@example.com',
    });

    const user2 = await User.create({
      username: 'sampleUser2',
      password: 'password2',
      email: 'user2@example.com',
    });

    const post1 = await Post.create({
      content: 'This is a sample post.',
      author: user1._id,
    });

    const post2 = await Post.create({
      content: 'This is another sample post.',
      author: user2._id,
    });

    // Seed Projects
    const project1 = await Project.create({
      title: 'Sample Project 1',
      description: 'Description of the first project.',
      technologiesUsed: ['Node.js', 'React', 'MongoDB'],
      date: new Date(),
      githubLink: 'https://github.com/user/project1',
      liveDemoLink: 'https://example.com/demo/project1',
    });

    const project2 = await Project.create({
      title: 'Sample Project 2',
      description: 'Description of the second project.',
      technologiesUsed: ['Django', 'Angular', 'PostgreSQL'],
      date: new Date(),
      githubLink: 'https://github.com/user/project2',
      liveDemoLink: 'https://example.com/demo/project2',
    });

    // Seed Jobs
    const job1 = await Job.create({
      title: 'Software Engineer',
      description: 'Job description for the first job.',
      start_date: '2024-02-05',
      end_date: '2024-02-10',
      location: 'City, Country',
    });

    const job2 = await Job.create({
      title: 'UX Designer',
      description: 'Job description for the second job.',
      start_date: '2024-02-15',
      end_date: '2024-02-20',
      location: 'City, Country',
    });

    console.log('Seed data complete!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    process.exit(0);
  }
};

seedData();
