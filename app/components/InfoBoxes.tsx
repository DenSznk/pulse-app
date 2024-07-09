import InfoBox from "./InfoBox";


const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
              heading="For Renters"
              background="bg-gray-100"
              textColor="text-gray-800"
              childrenText="Find your dream rental property. Bookmark properties and contact owners."
              buttonInfo={{
                text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-black',
              }}
          />
             <InfoBox
              heading="For Property Owners"
              background="bg-blue-100"
              textColor="text-gray-800"
              childrenText=" List your properties and reach potential tenants. Rent short or long term"
              buttonInfo={{
                text: 'Add Property',
                link: '/properties/add',
                backgroundColor: 'bg-blue-500',
              }}
          />
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
