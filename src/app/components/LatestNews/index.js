import './index.css';

const cardData = [
    { id: 1, date: '20 APR', title: 'The Covid-19 Epidemic In 2022 Is Back', image: '/tur_gin.png' },
    { id: 2, date: '20 APR', title: 'The Covid-19 Epidemic In 2022 Is Back', image: '/tur_gin.png' },
    { id: 3, date: '20 APR', title: 'The Covid-19 Epidemic In 2022 Is Back', image: '/tur_gin.png' },
    { id: 4, date: '20 APR', title: 'The Covid-19 Epidemic In 2022 Is Back', image: '/tur_gin.png' },
    { id: 5, date: '17 MAR', title: 'The Covid-19 Epidemic In 2023 Is Back', image: '/capsules.png' },
    { id: 6, date: '18 MAR', title: 'Hac hendrerit mus nons semper suspendisse', image: '/capsules.png' },
    { id: 7, date: '25 MAR', title: 'The Covid-19 Epidemic In 2023 Is Back', image: '/capsules.png' },
    { id: 8, date: '30 MAR', title: 'The Covid-19 Epidemic In 2023 Is Back', image: '/capsules.png' },
];

export default function LatestNews() {
    return (
        <div className="latest-news">
            <h4>OUR BLOG</h4>
            <h1>Latest News</h1>
            <div className="colos">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="card"
                        data-id={card.id}
                        style={{ backgroundImage: `url(${card.image})` }}
                    >
                        <p className='date'>{card.date}</p>
                        <p className="title">{card.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
