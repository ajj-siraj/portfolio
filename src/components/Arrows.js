export const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="project-slider-arrow project-slider-next">
    <svg viewBox="0 0 300 300" width="30" height="30" fill="none" stroke="#fff" strokeWidth="30" strokeLinecap="round">
      <path d="M10,10 L150,150 L10,300"/>
    </svg>
  </div>
  );
  
  export const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="project-slider-arrow project-slider-prev">
    <svg viewBox="0 0 300 300" width="30" height="30" fill="none" stroke="#fff" strokeWidth="30" strokeLinecap="round">
      <path d="M10,10 L150,150 L10,300"/>
    </svg>
  </div>
  );