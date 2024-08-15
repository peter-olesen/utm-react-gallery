import { Gallery } from './Gallery/Gallery'
import { Card } from './Cards/Cards'
import main from './Main.module.scss'
import cards from './Cards/Cards.module.scss'

export const Main = () => {
    return (
        <main className={main.container}>
            <section>
            <h2>Under the moon - New style</h2>
            <p className={main.upperCase}>Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus. Sodales neque quisque sodales etiam tortor ut praesent. Id luctus tincidunt aenean molestie pellentesque. Viverra sit aliquam faucibus volutpat lectus sed eu euismod. Suspendisse augue ipsum pellentesque sagittis nunc. Maecenas mattis neque orci bibendum quam faucibus amet platea congue. Amet condimentum faucibus ultrices nunc varius nisl viverra vivamus amet. Habitant dictum fermentum vitae proin ut. Eu faucibus molestie lacus porttitor sed pellentesque turpis in. Aliquam .</p>
            <button>LÆS MERE</button>
            </section>
            <section className={main.midSection}>
                <Card
                    title="One 2 One"
                    content="Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque."
                    buttonText="BOOK TID"
                    className={cards.left}
                />
                <Card
                    title="Loyalty Free"
                    content="Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque."
                    buttonText="LÆS MERE"
                    className={cards.right}
                />
            </section>
            <h3>FOLLOW US ON INSTAGRAM</h3>
            <section className={main.gallery}>
                <Gallery />
            </section>
        </main>
    )
}