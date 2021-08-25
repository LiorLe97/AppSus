
export function ReviewPreview({ review }) {

    return (
        <section className="preview-review">

            {console.log(review)}
            <h5>Name: {review.name}</h5>
            <p>Rating: {review.rating}</p>
            <p>Desc: {review.txt}</p>
            <p>{review.readAt}</p>

        </section>
    )
}


