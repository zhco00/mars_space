/* eslint-disable react/prop-types */

function Navigation({ sections }) {
  return (
    <div className="navigation">
      <ul className="nav-list">
        {sections.map((section, index) => (
          <li key={index} data-section={section.id}>
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
