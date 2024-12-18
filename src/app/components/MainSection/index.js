import './index.css'
import Features from '../Features'
export default function MainSection() {
    return (
        <div className="main-section">
            <h1 className='main-head'>Essential Vitamins</h1>
            <div className='main-menu'>
                <div className='sub-menu1'>
                    <p style={{ color: '#727272', fontWeight: '400', fontSize: '23px' }}>Online Medical Supplies</p>
                    <p style={{ lineHeight: '40px', color: '#17414F', fontWeight: '500', fontSize: '28px' }}>Get Your Vitamins<br /> &Minerals</p>
                    <button className='explore-button'>EXPLORE</button>
                </div>
                <div className='probiotics'>
                    <div className='probiotics-bg'> {/* Background Wrapper */}
                        <img className='probiotics-img' src='./probiotics.png' alt='probiotics' />
                    </div>
                </div>

                <div className='sub-menu2'>
                    <div className='sub-menu-con'>
                        <img className='sub-menu-con-img' src='./vitamins.png' alt='vitamins' />
                        <div className='sub-menu-content'>
                            <p className='sub-menu-content-head'>Vitamins</p>
                            <p className='sub-menu-content-para'>Increased Vitamins and<br />
                                minerals in your diet</p>
                        </div>

                    </div>
                    <div className='sub-menu-con'>
                        <img className='sub-menu-con-img' src='./weight_scale.png' alt='weight_scale' />
                        <div className='sub-menu-content'>
                            <p className='sub-menu-content-head'>Weight Loss</p>
                            <p className='sub-menu-content-para'>
                                Weight Loss <br />
                                Find scientifically proven solutions
                            </p>
                        </div>
                    </div>
                    <div className='sub-menu-con'>
                        <img className='sub-menu-con-img' src='./functional_foods.png' alt='functional_foods' />
                        <div className='sub-menu-content'>
                            <p className='sub-menu-content-head'>Functional Food</p>
                            <p className='sub-menu-content-para'>
                                Functional Foods <br />
                                From protein powers to baby formula
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Features />
            </div>
        </div>
    )
}