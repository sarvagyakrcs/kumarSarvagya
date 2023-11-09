import axios from 'axios';

const apiUrl = 'https://sarvagyakumarcd22.pythonanywhere.com/posts';
const accessToken = '987677ba11d78e59ebc24dfe48b256016d4ceb9c';

let post_data = [
    {
        "id": 10000000,
        "title": "The Rise of Artificial Intelligence",
        "content": "Artificial intelligence continues to transform industries, revolutionizing the way we live and work. Its applications in healthcare, finance, and automation are reshaping the future.",
        "date": "2023-11-09T04:35:31.583009Z"
    },
    {
        "id": 20000000,
        "title": "Blockchain: Beyond Cryptocurrency",
        "content": "While initially known for cryptocurrencies, blockchain's potential reaches far beyond. Its decentralized nature has implications in supply chain management, voting systems, and more.",
        "date": "2023-11-09T04:38:31.003298Z"
    },
    {
        "id": 30000000,
        "title": "Quantum Computing: The Next Frontier",
        "content": "Quantum computing promises unprecedented computational power, potentially solving complex problems that classical computers struggle with, revolutionizing encryption and scientific simulations.",
        "date": "2023-11-09T14:01:19.612363Z"
    },
    {
        "id": 40000000,
        "title": "Cybersecurity in an Interconnected World",
        "content": "With the growing interconnectivity, cybersecurity becomes pivotal. Advancements in AI-driven security systems, zero-trust architectures, and biometric authentication are reshaping defense strategies.",
        "date": "2023-11-09T14:05:29.123456Z"
    },
    {
        "id": 50000000,
        "title": "The Era of Internet of Things (IoT)",
        "content": "IoT is transforming our daily lives with smart homes, connected devices, and industrial automation. Its impact on healthcare, agriculture, and urban planning is continually expanding.",
        "date": "2023-11-09T14:10:42.987654Z"
    }
]

let newPosts = [];

export async function fetchData() {
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Token ${accessToken}`
            }
        });

        // Successful request (status codes 2xx)
        newPosts = response.data
        // console.log('New posts:', newPosts);
        // console.log({'Type of post_Data' : typeof(post_data)});
        // console.log({'post_Data' : post_data});
        // console.log({'Type of newPosts' : typeof(newPosts)});
        // console.log({'newPosts' : newPosts});

        // Add new posts to post_data and maintain only the last 10
        post_data = post_data.concat(newPosts);
        if (post_data.length > 10) {
            post_data = post_data.slice(post_data.length - 10);
        }
        console.log('Last 10 posts:', post_data);

        console.log({'post_Data final' : post_data});
    } catch (error) {
        console.error('Error occurred:', error);
        if (error.response) {
            console.error('Error status:', error.response.status);
            console.error('Error data:', error.response.data);
        }
    }
}

fetchData();



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
    'Branch': 'Computer Science and Engineering (Data Science)',
    'College': 'R.V. College of Engineering',
    'City': 'Bengaluru',
}

const jumbotronAnimatedText = {
    'firstSentence': 'I am Sarvagya👋',
    'secondSentence': 'I am Batman⚔',
    'thirdSentence': 'I am Vengence⚔️'
}

export { socialMediaLinks, contactDetails, post_data, jumbotronAnimatedText, newPosts };
