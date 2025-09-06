export const AchievementComponent = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${props.id}`}>
        <button
          className="accordion-button custom-accordion collapsed flex-row-reverse"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${props.id}`}
          aria-expanded="false"
          aria-controls={`collapse${props.id}`}
        >
          {props.title}
        </button>
      </h2>
      <div
        id={`collapse${props.id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${props.id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {props.desc.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
