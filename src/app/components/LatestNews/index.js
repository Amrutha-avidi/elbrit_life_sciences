import './index.css'

const cardData = [
    { id: 1, date: '20 APR', title: 'The Covid-19 Epidemic In 2022 Is Back', image: '/tur_gin.png' },
    { id: 2, date: '20 APR', title: 'The Covid-19 Epidemic In 2022 Is Back', image: '/capsules.png' },
    { id: 3, date: '20 APR', title: 'The Covid-19 Epidemic In 2022 Is Back', image: '/tur_gin.png' },
    { id: 4, date: '20 APR', title: 'The Covid-19 Epidemic In 2023 Is Back', image: '/capsules.png' },
    { id: 5, date: '17 MAR', title: 'Hac hendrerit mus nons semper suspendisse', image: '/tur_gin.png' },
    { id: 6, date: '18 MAR', title: 'New Health Guidelines Released', image: '/capsules.png' },
    { id: 7, date: '25 MAR', title: 'How to Boost Your Immune System', image: '/tur_gin.png' },
    { id: 8, date: '30 MAR', title: 'Supplements for Healthy Living', image: '/capsules.png' },
  ];

export default function LatestNews() {
    return (
        <div className='latest-news'>
            <h4>OUR BLOG</h4>
            <h1>Latest News</h1>
            <div className="cards-container">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="card"
                        style={{ backgroundImage: `url(${card.image})` }}
                    >
                        <div className="card-content">
                            <div className="date">{card.date}</div>
                            <h3 className="title">{card.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}