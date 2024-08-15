import card from "./Cards.module.scss"

export const Card = ({ title, content, buttonText, className }) => {
    return (
        <>
            <div className={className}>
                <h3>{title}</h3>
                <p className={card.margin}>{content}</p>
                <button>{buttonText}</button>
            </div>
        </>
    )
}

