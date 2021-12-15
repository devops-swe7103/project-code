const { v4: uuid } = require("uuid");
const { helper, dictionary } = require(`./propertyObject`);

console.log(`attached propertiesDB.js`);

const generateDummyProperties = (count) => {
  const propertiesArray = [];

  for (let i = 0; i < count; i++) {
    const monthlyRent = Math.floor(Math.random() * 1000);
    const durationCode = Math.floor(helper.randMinMax(0, 1));
    const furnishTypeCode = Math.floor(helper.randMinMax(0, 2));
    const roomCount = Math.floor(helper.randMinMax(0, 5));

    const property = {
      id: uuid(),
      displayTitle: helper.randArr(dictionary.displayTitle),
      rent: {
        monthly: monthlyRent,
        weekly: monthlyRent / 4,
      },
      layout: {
        description: `${roomCount} bedroom flat to rent`,
        bedrooms: roomCount,
        bathrooms: Math.floor(helper.randMinMax(1, 3)),
        kitchen: Math.floor(helper.randMinMax(1, 2)),
      },
      location: {
        area: helper.randArr(dictionary.area),
        city: helper.randArr(dictionary.city),
        postcode: helper.randArr(dictionary.postcode),
        lat: helper.randMinMax(51.3801748, 54.1353369),
        long: helper.randMinMax(-2.3995494, -0.8222118),
      },
      params: {
        durationCode: durationCode,
        durationText: helper.getDurationText(durationCode),
        furnishTypeCode: furnishTypeCode,
        furnishTypeText: helper.getFurnishTypeText(furnishTypeCode),
      },
      features: [
        `Manchester’s no.1 penthouse in an exclusive private estate`,
        `Large duplex with 4 bedrooms`,
        `Two fully fitted dressing roomsPrivate office with keypad entry`,
        `Private, landscaped roof terrace & balconies`,
        `Situated on a private floor with secure access`,
        `Two on-site underground secure parking spaces`,
        `Available furnished or unfurnished`,
        `24-hour concierge`,
        `Smart home system`,
      ],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi temporibus reprehenderit, vel beatae quo animi ex eum suscipit enim, eveniet atque modi quidem voluptate eos ab eius dignissimos rerum.

  Ipsum iste facere officia in expedita commodi minus quisquam repudiandae? Aspernatur consequuntur suscipit autem, perspiciatis unde modi in totam. Facilis, assumenda maxime!`,
    };

    propertiesArray.push(property);
  }

  return propertiesArray;
};

exports.generateDummyProperties = generateDummyProperties;
// generateDummyProperties(10);
