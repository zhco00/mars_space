/* eslint-disable react/prop-types */

function Section({ id, title, inputType, options }) {
  return (
    <div id={id} className="section">
      <div className="main">
        <div></div>
        <div className="main_content">
          <div className="main-title">{title}</div>
          <div className="main-form">
            {inputType === 'text' && <input type="text" />}
            {inputType === 'textarea' && <textarea rows="1"></textarea>}
            {inputType === 'radio' &&
              options.map((option) => (
                <label key={option}>
                  <input type="radio" name="options" value={option} />
                  {option}
                </label>
              ))}
            {inputType === 'checkbox' &&
              options.map((option) => (
                <label key={option}>
                  <input type="checkbox" value={option} />
                  {option}
                </label>
              ))}
            <input type="button" value="확인" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Section;
