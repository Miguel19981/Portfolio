import './WorkWidget.css';
import PropTypes from 'prop-types';

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <section data-testid="workWidget" className="work-widget">
      <h2 data-testid="workWidgetTitle">{title}</h2>
      <p data-testid="workWidgetContent">{content}</p>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index} data-testid={`workWidgetItem${index}`} className="work-item">
            <img
              src={experience.logo}
              alt={`${experience.organization} Logo`}
              className="work-item-logo"
              data-testid={`workWidgetItemLogo${index}`}
            />
            <div className="work-item-content">
              <h3 className="work-item-title" data-testid={`workWidgetItemTitle${index}`}>
                {experience.organization}
              </h3>
              <div className="work-item-content-details">
                <p className="work-item-jobtitle" data-testid={`workWidgetItemContent${index}`}>
                  {experience.jobTitle}
                </p>
                <span className="work-item-dates" data-testid={`workWidgetItemDates${index}`}>
                  {experience.endYear ? `${experience.startYear} - ${experience.endYear}` : 'current'}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
