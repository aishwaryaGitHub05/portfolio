import React, {Component} from 'react';
import './card.css';


class Card extends Component {
    render() {
        return (
            <div className="card_flex">
                {this.props.users.map((item, id) => {
                    console.log("item:", item, id);
                    return (
                    <div className="card_container">
                        <img src={`https://robohash.org/${id}?set=2&size=180x180`} alt={"images"} />
                        <p>{item.name}</p>
                    </div>
                )
                })
                }
            </div>
        );
    }
}

export default Card
