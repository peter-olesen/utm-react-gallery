import { Gallery } from './Gallery/Gallery'
import main from './Main.module.scss'

export const Main = () => {

    return (
        <main className={main.container}>
            <section>
            <h2>Under the moon - New style</h2>
            <p className={main.upperCase}>Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus. Sodales neque quisque sodales etiam tortor ut praesent. Id luctus tincidunt aenean molestie pellentesque. Viverra sit aliquam faucibus volutpat lectus sed eu euismod. Suspendisse augue ipsum pellentesque sagittis nunc. Maecenas mattis neque orci bibendum quam faucibus amet platea congue. Amet condimentum faucibus ultrices nunc varius nisl viverra vivamus amet. Habitant dictum fermentum vitae proin ut. Eu faucibus molestie lacus porttitor sed pellentesque turpis in. Aliquam .</p>
            <button>LÆS MERE</button>
            </section>
            <section className={main.midSection}>
                <div className={main.left}>
                    <h3>One 2 One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque.</p>
                    <button>BOOK TID</button>
                </div>
                <div className={main.right}>
                    <h3>Loyalty Free</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque.</p>
                    <button>LÆS MERE</button>
                </div>
            </section>
            <section>
                <h3>FOLLOW US ON INSTAGRAM</h3>
            </section>

            <Gallery />
        </main>
    )
}