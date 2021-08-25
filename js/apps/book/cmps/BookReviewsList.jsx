import { ReviewPreview } from "./reviewPreview.jsx";

export class BookReviewsList extends React.Component {
   componentDidMount() {
       console.log('mounted')
   }

    render() {
        return (
            <section className="book-reviews-list">
                <h2>תשלים  הזה כבר</h2>
                {/* {reviews.map(review => <ReviewPreview review={review} key={review.id} />)} */}
            </section>
        )
    }
}
