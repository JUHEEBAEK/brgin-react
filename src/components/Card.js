import React from "react";

class Card extends React.Component {
    render() {
        // children vue에서 쓰는 scope 인가??? 
        const { header, children } = this.props;
        return (
        <div class="card__container" style={{padding: '12px',  borderBottom: 'solid 1px grey'}}>
            <div class="card__header" style={{fontWeight: 700, color: '#7904a3', fontSize: "24px"}}>* {header}</div>
          
            {children}
        </div>
        );
    }
}

export default Card;