// SkeletonCard.jsx
import './SkeletonCard.css'; 

const SkeletonCard = () => {
 
  // if (count > 1) {
  //   return (
  //     <div className="skeleton-cards-container">
  //       {Array.from({ length: count }).map((_, index) => (
  //         <SkeletonCard key={index} variant={variant} />
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div className={`skeleton-card `}>
      <div className="skeleton-img"></div>
      <div className="skeleton-info">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
      <div className="skeleton-actions flex between">
        <div className="skeleton-buttons flex gap-1">
          <div className="skeleton-button"></div>
          <div className="skeleton-button"></div>
        </div>
        <div className="skeleton-more flex center">
          <div className="skeleton-text small"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;