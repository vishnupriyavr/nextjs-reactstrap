const CARDS = {
  posts: [
    {
      id: 1,
      category: 'Chat',
      title: 'Interactive Chat',
      text: 'Ability to test your bot real time.',
      image: '/images/chat-soon.png',
      publishedAt: 'Mon, 14-12-2020',
      postBy: 'Talk to our Team',
      views: '201',
    },
    {
      id: 2,
      category: 'Analytics',
      title: 'We analyse and intelligently categorise your enterprise data.',
      text: 'NLP using your enterprise data.',
      image: '/images/analysis.png',
      publishedAt: 'Mon, 14-12-2020',
      postBy: 'Talk to our Team',
      views: '23',
    },
  ],
  menus: [
    {
      id: 1,
      category: 'steaks',
      image: '/images/menu768x768px1.jpg',
      title: 'Eggplant Parmigiana Salad',
      description:
        'Fried eggplant, mixed greens, fresh mozzarella, thinly sliced cherry pepper, tomato',
      price: '12.2',
      label: 'Hot Plate',
      tag: 'success',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 2,
      category: 'dinner',
      image: '/images/menu768x768px2.jpg',
      title: 'Grilled Portobello Salad',
      description:
        'Fresh mozzarella, roasted red peppers, basil, extra virgin olive oil, balsamic glaze.',
      price: '10',
      label: 'Popular',
      tag: 'warning',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 3,
      category: 'breakfast',
      image: '/images/menu768x768px3.jpg',
      title: 'Bed and Breakfast',
      description:
        'Grilled chicken, grilled zucchini, fresh mozzarella, roasted pepper, roasted red onion.',
      price: '7.5',
      label: 'Hot Plate',
      tag: 'success',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 4,
      category: 'meals',
      image: '/images/menu768x768px4.jpg',
      title: 'Tenderloin',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: '22.2',
      label: 'Popular',
      tag: 'danger',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 5,
      category: 'dinner',
      image: '/images/menu768x768px5.jpg',
      title: 'Lamb Chops',
      description:
        'Lightly breaded breast of chicken topped with sautéed diced tomatoes, red onions and melted fresh mozzarella.',
      price: '15',
      label: 'Hot Plate',
      tag: 'warning',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 6,
      category: 'meals',
      image: '/images/menu768x768px6.jpg',
      title: 'Sautéed Egg Roll',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: '7.7',
      label: 'Hot Plate',
      tag: 'warning',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 7,
      category: 'desert',
      image: '/images/menu768x768px1.jpg',
      title: 'Margarine Eggs',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: '4.5',
      label: 'Nice Deal',
      tag: 'warning',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 8,
      category: 'steaks',
      image: '/images/menu768x768px2.jpg',
      title: 'Steaks Eggs',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: '8.8',
      label: 'Popular',
      tag: 'warning',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 9,
      category: 'steaks',
      image: '/images/menu768x768px3.jpg',
      title: 'Steaks Fillet Eggs',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: '9.3',
      label: 'Nice Deal',
      tag: 'success',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 10,
      category: 'steaks',
      image: '/images/menu768x768px4.jpg',
      title: 'Fillet Egg Bread',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: '5.2',
      label: 'Nice Deal',
      tag: 'danger',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 11,
      category: 'hams',
      image: '/images/menu768x768px5.jpg',
      title: 'Spicy Scarpariello Wings',
      description:
        'Breast of chicken sautéed with lemon, white wine, capers and artichoke hearts.',
      price: '22.23',
      tag: 'info',
      label: 'Hot Plate',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
    {
      id: 12,
      category: 'hams',
      image: '/images/menu768x768px6.jpg',
      title: 'Roasted Peppers w/ Anchovies with Mozzarella',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: '11.5',
      tag: 'warning',
      label: 'Popular',
      publishedAt: 'Wed, 12-02-2019',
      postBy: 'Chief Kitchen',
      views: '98',
    },
  ],
  employees: [
    {
      id: 1,
      name: 'Financial Bot',
      title: 'Chatbot for Banking and Financial Service',
      about:
        'Predefined Template for building a financial bot, to provide personalized assistance, beyond banking hours.',
      photo: '/images/finance-bot.png',
    },
    {
      id: 2,
      name: 'Customer Service Bot',
      title: 'Chatbot for Customer Service',
      about:
        'Predefined Template to significantly reduce case volume for customer service reps by answering basic customer questions .',
      photo: '/images/customer-service-bot.jpg',
    },
    {
      id: 3,
      name: 'Retail Bot',
      title: 'Chatbot for Retail',
      about:
        'Predefined Template to provide an experience similar to that of shopping with a friend or a store associate.',
      photo: '/images/retail-bot.png',
    },
  ],
};

export { CARDS };
