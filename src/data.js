// import axios from 'axios';

// const apiUrl = 'https://sarvagyakumarcd22.pythonanywhere.com/posts';

// const fetchLastTenPosts = async () => {
//     try {
//         const response = await axios.get(apiUrl);

//         if (response.status === 200) {
//             const allPosts = response.data; // Assuming the response contains all available posts
//             const lastTenPosts = allPosts.slice(-10);
//             const post_data = lastTenPosts.map(post => ({
//                 id: post.id,
//                 title: post.title,
//                 content: post.content,
//                 date: post.date
//             }));

//             console.log(post_data); // Logging the last 10 posts in the desired format
//             return post_data;
//         } else {
//             throw new Error('Failed to fetch data');
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return null;
//     }
// };

const socialMediaLinks = {
    'link-1': {
        url: 'https://twitter.com/C0derNinja',
        text: 'Twitter'
    },
    'link-2': {
        url: 'https://www.instagram.com/kumar_sarvagya/',
        text: 'Instagram'
    },
    'link-3': {
        url: 'https://www.linkedin.com/in/sarvagya-kumar-784406248/',
        text: 'LinkedIn'
    },
    'portfolio': {
        url: 'https://sarvagyakumar.github.io/portfolio/',
        text: 'Portfolio'
    },
    'sendFeedback': {
        url: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new',
        text: 'Send Feedback'
    }
};

const contactDetails = {
    'Name': 'SARVAGYA KUMAR',
    'Email': 'SARVAGYAKRCS@GMAIL.COM',
    'Branch' : 'Computer Science and Engineering (Data Science)',
    'College' : 'R.V. College of Engineering',
    'City' : 'Bengaluru',
}

const post_data = [
    {
        "id": 1,
        "title": "Hello",
        "content": "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented, and functional programming.",
        "date": "2023-11-09T04:35:31.583009Z"
    },
    {
        "id": 2,
        "title": "World",
        "content": "JavaScript is a versatile scripting language used for web development. It enables interactive web pages and is an essential part of web applications. JavaScript allows for asynchronous communication and can be used for both client-side and server-side development.",
        "date": "2023-11-08T10:20:15.123456Z"
    },
    {
        "id": 3,
        "title": "Programming",
        "content": "Java is a popular programming language known for its portability and compatibility across platforms. It is commonly used for developing mobile apps, web applications, and enterprise software. Java uses an object-oriented approach and is statically typed.",
        "date": "2023-11-07T15:45:00.987654Z"
    },
    {
        "id": 4,
        "title": "Data Science",
        "content": "R programming language is widely used for data analysis and statistical computing. It offers a variety of statistical techniques and graphical methods. R provides a rich ecosystem for data science and is used by analysts and statisticians.",
        "date": "2023-11-06T20:55:42.345678Z"
    },
    {
        "id": 5,
        "title": "Artificial Intelligence",
        "content": "C++ is a powerful programming language used extensively in the development of system software, games, and applications that require high performance. It provides low-level memory manipulation and is an extension of the C programming language.",
        "date": "2023-11-05T08:10:30.876543Z"
    },
    {
        "id": 6,
        "title": "Machine Learning",
        "content": "Ruby is a dynamic and object-oriented programming language known for its simplicity and productivity. It is used in web development and has a strong community contributing to its frameworks and libraries.",
        "date": "2023-11-04T12:25:55.234567Z"
    },
    {
        "id": 7,
        "title": "Web Development",
        "content": "PHP is a widely-used server-side scripting language suited for web development. It is embedded into HTML and works well with databases. PHP allows developers to create dynamic and interactive web pages.",
        "date": "2023-11-03T06:30:12.765432Z"
    },
    {
        "id": 8,
        "title": "Frontend Technologies",
        "content": "Swift is a powerful and intuitive programming language primarily used for iOS, macOS, watchOS, and tvOS app development. It is known for its safety, speed, and modern features.",
        "date": "2023-11-02T17:40:05.678901Z"
    },
    {
        "id": 9,
        "title": "Backend Development",
        "content": "Go, also known as Golang, is a statically typed, compiled language. It is recognized for its efficiency and concurrency support, making it suitable for backend development and system programming.",
        "date": "2023-11-01T09:15:20.543210Z"
    },
    {
        "id": 10,
        "title": "Mobile Development",
        "content": "Kotlin is a statically typed programming language used for developing modern Android applications. It is concise, safe, interoperable with Java, and widely adopted by Android developers.",
        "date": "2023-10-31T14:50:00.112233Z"
    }
]



const jumbotronAnimatedText = {
    'firstSentence': 'I am Sarvagya👋',
    'secondSentence': 'I am Batman⚔',
    'thirdSentence': 'I am Vengence⚔️'
}

export  {socialMediaLinks, contactDetails, post_data, jumbotronAnimatedText};
