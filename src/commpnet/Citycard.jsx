import CityCard from './Card';

function CustomCard({ title, description }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
}

export default CustomCard;