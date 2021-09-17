import React from 'react'
// import './index.css'
import Header from "../Header";
import Footer from "../Footer";




class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/flowers/{id}')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.flower.item
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    render()
    return(
        <>
                <div className='product'>
                    <div className='product-image'>
                        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*' alt=""/>
                    </div>
                    <div className='product-info'>
                        <div className="info-item product-text">
                            <h1 className="product-title">Букет из коллекции "Сочній персик"</h1>
                            <p className="product">В составе: розы, эустома листья дуба, эвкалипт</p>
                            <p><strong>Дополнительно:</strong>
                                <br/>• от вашего имени мы можем подписать мини-открытку к букету (бесплатно).
                                <br/>
                                • добавить к букету стандартную коробочку конфет Рафаэлло (150,грн).
                                <br/>
                                • Доставить букет в крафтовой, непромокаемой вазе (50,грн)</p>
                        </div>
                        <div className="info-item product-commerce">
                            <div className="product-price">
                                <span className="price-amount">2,000</span> <span className="price-currency">грн</span>
                            </div>
                        </div>
                        <div className="info-item product-disclaimer">
                            <p className="disclaimer-text"><strong>Важно: </strong>
                                Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме, настроению и максимально повторяя состав учитывая сезонность цветка.
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ProductInfo