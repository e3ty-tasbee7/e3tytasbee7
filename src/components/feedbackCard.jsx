import feedback from "../assets/feedback.png";

export const FeedbackCard = (props) => {
  return (
    <div className="position-relative feedback">
      <img src={feedback} alt="" />
      <p className="position-absolute">{props.comment}</p>
    </div>
  );
};
