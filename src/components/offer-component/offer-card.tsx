interface OfferCardProps {
  isPremium: boolean;
  image: string;
  price: number;
  title: string;
  type: string;
  isBookmarked: boolean;
  rating: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function OfferCard(props: OfferCardProps): JSX.Element {
  return (
    <div>
      <article
        className="cities__card place-card"
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        {props.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={props.image} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{props.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{props.isBookmarked ? 'In bookmarks' : 'To bookmarks'}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${(props.rating / 5) * 100}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{props.title}</a>
          </h2>
          <p className="place-card__type">{props.type}</p>
        </div>
      </article>
    </div>
  );
}

export default OfferCard;
