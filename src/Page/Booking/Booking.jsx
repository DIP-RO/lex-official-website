import DynamicCard from "../../Global/DynamicCard";

const Booking = () => {
    const cardData = [
        {
          imageUrl: 'https://example.com/image1.jpg',
          imageAlt: 'Card Image 1',
          title: 'Sample Card 1',
          description: 'This is a dynamic card component in React.js.',
        },
        {
          imageUrl: 'https://example.com/image2.jpg',
          imageAlt: 'Card Image 2',
          title: 'Sample Card 2',
          description: 'This is another dynamic card in React.js.',
        },
        {
          imageUrl: 'https://example.com/image3.jpg',
          imageAlt: 'Card Image 3',
          title: 'Sample Card 3',
          description: 'Yet another dynamic card in React.js.',
        },
      ];
    
  return (
    <div className="container mx-auto px-4">
      <div className="m-10 flex flex-wrap -mx-2">
        {cardData.map((card, index) => (
          <DynamicCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Booking;
