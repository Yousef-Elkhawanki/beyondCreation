import Button from "../../common/Button";

const ExtraCard = ({item}) => {
    return (
        <div className="extra-card">
            <div className="img-container">
                <img
                src={item.img}
                alt="img"
                />
            </div>
            <div className="data">
                <h4 className="bold">{item.title}</h4>
                <p>{item.desc}</p>
                <div className="price-group">
                    <Button text={'Add'}/>
                    <div className="price">
                        <span className="medium">from Per Person</span>
                        <p className="bold">{item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExtraCard;