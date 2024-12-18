import './index.css';

const ingredients = [
    { title: 'Vitamin C', description: 'Vitamin C as ascorbic acid' },
    { title: 'Vitamin B3', description: 'Niacin for healthy gut and skin' },
    { title: 'Magnesium', description: 'Boost energy and support muscle function'},
    { title: 'Hyaluronic Acid', description: 'For smooth, supple and soft skin!' },
    { title: 'Lactobacillus', description: 'Invigorate your gut microbiome'},
];

export default function Ingredients() {
    return (
        <div className="ingredients-section">
            <div className="ingredients-grid">
                {/* Header Section */}
                <div className="ingredients-header">
                    <p>INGREDIENTS</p>
                    <h2>Better Ingredients</h2>
                    <p>
                        Only the best when you choose products offered on our platform -
                        high-quality ingredients for high-quality products!
                    </p>
                </div>

                {/* Ingredient Cards */}
                {ingredients.map((ingredient, index) => (
                    <div
                        key={index}
                        className={`ingredient-content content${index + 1}`}
                    >
                        <div className="top-content">
                            <h3>{ingredient.title}</h3>
                            <p>{ingredient.description}</p>
                        </div>
                        <a href="#" className="see-more">SEE MORE</a>
                    </div>
                ))}

                {/* Thumb Image */}
                <img src="./thumb.png" alt="thumb" className="thumb-image" />
            </div>
        </div>
    );
}

