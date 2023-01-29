export const Section = ({
  label,
  children,
  whichSectionToShow,
  setWhichSectionToShow,
  dogList,
}) => {
  const handleChangeSection = ({ target: { dataset: {section} } }) => {
    if (section === whichSectionToShow) {
      setWhichSectionToShow("all-dogs");
    } else {
      setWhichSectionToShow(section);
    }
  };

  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div
            className={`selector ${whichSectionToShow === "favorite-dogs" ? "active" : ""}`}
            data-section={"favorite-dogs"}
            onClick={handleChangeSection}
          >
            favorited ( {dogList.filter((dog) => dog.isFavorite).length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${
              whichSectionToShow === "unfavorite-dogs" ? "active" : ""
            }`}
            data-section={"unfavorite-dogs"}
            onClick={handleChangeSection}
          >
            unfavorited ( {dogList.filter((dog) => !dog.isFavorite).length} )
          </div>
          <div
            className={`selector ${
              whichSectionToShow === "create-dog-form" ? "active" : ""
            }`}
            data-section={"create-dog-form"}
            onClick={handleChangeSection}
          >
            create dog
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
