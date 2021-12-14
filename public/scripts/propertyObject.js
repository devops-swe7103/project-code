const { v4: uuid } = require("uuid");

console.log(`in propertyObject.js`);

// const objectTemplate = {
//   id: `p1`,
//   displayTitle: `2 BHK in Piccadilly, Manchester`,
//   rent: { monthly: 750, weekly: 5 },
//   layout: {
//     description: `3 bhk flat to rent`,
//     bedrooms: 1,
//     hall: 1,
//     kitchen: 1,
//   },
//   location: {
//     area: `Piccadilly`,
//     city: `Manchester`,
//     postcode: `M45LG`,
//     lat: 125,
//     long: 150,
//   },
//   params: {
//     durationCode: 0,
//     // 0: short term
//     // 1: long term
//     furnishTypeCode: 2,
//     // 0: not furnished
//     // 1: part furnished
//     // 2: fully furnished
//   },
//   features: [
//     `Manchester’s no.1 penthouse in an exclusive private estate`,
//     `Large duplex with 4 bedrooms`,
//     `Two fully fitted dressing roomsPrivate office with keypad entry`,
//     `Private, landscaped roof terrace & balconies`,
//     `Situated on a private floor with secure access`,
//     `Two on-site underground secure parking spaces`,
//     `Available furnished or unfurnished`,
//     `24-hour concierge`,
//     `Smart home system`,
//   ],
//   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi temporibus reprehenderit, vel beatae quo animi ex eum suscipit enim, eveniet atque modi quidem voluptate eos ab eius dignissimos rerum.

//   Ipsum iste facere officia in expedita commodi minus quisquam repudiandae? Aspernatur consequuntur suscipit autem, perspiciatis unde modi in totam. Facilis, assumenda maxime!`,
// };

const helper = {
  getFurnishTypeText: function (code) {
    let text = ``;
    switch (code) {
      case 0:
        text = `Not Furnished`;
        break;
      case 1:
        text = `Part Furnished`;
        break;
      case 2:
        text = `Fully Furnished`;
        break;

      default:
        throw new Error(`ERR: property.params.furnishTypeCode invalid`);
    }
    return text;
  },
  getDurationText: function (code) {
    let text = ``;
    switch (code) {
      case 0:
        text = `Short Term`;
        break;
      case 1:
        text = `Long Term`;
        break;

      default:
        throw new Error(`ERR: property.params.getDurationText invalid`);
    }
    return text;
  },
  randMinMax: function (min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(9);
  },
  randArr: function (arr) {
    return arr[Math.floor(Math.random() * arr.length) + 1];
  },
};

const dictionary = {
  displayTitle: [
    `The quick, brown fox jumps over a lazy dog.`,
    `DJs flock by when MTV ax quiz prog.`,
    `Junk MTV quiz graced by fox whelps.`,
    `Bawds jog, flick quartz, vex nymphs.`,
    `Waltz, bad nymph, for quick jigs vex!`,
    `Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.`,
    `Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.`,
    `Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz.`,
    `How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz.`,
    `Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack! " my brave`,
  ],
  layoutDescription: [
    `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`,
    `Aenean commodo ligula eget dolor.`,
    `Aenean massa.`,
    `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    `Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.`,
    `Nulla consequat massa quis enim.`,
    `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.`,
    `In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.`,
    `Nullam dictum felis eu pede mollis pretium.`,
    `Integer tincidunt.`,
    `Cras dapibus.`,
    `Vivamus elementum semper nisi.`,
    `Aenean vulputate eleifend tellus.`,
    `Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.`,
    `Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.`,
    `Phasellus viverra nulla ut metus varius laoreet.`,
    `Quisque rutrum.`,
    `Aenean imperdiet.`,
    `Etiam ultricies nisi vel augue.`,
    `Curabitur ullamcorper ultricies nisi.`,
    `Nam eget dui.`,
    `Etiam rhoncus ipsum.`,
    `Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.`,
    `Maecenas nec odio et ante tincidunt tempus.`,
    `Donec vitae sapien ut libero venenatis faucibus.`,
    `Nullam quis ante.`,
    `Etiam sit amet orci eget eros faucibus tincidunt.`,
    `Duis leo.`,
    `Sed fringilla mauris sit amet nibh.`,
    `Donec sodales sagittis magna.`,
    `Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`,
  ],
  area: [
    ` Westminster`,
    `Kensington`,
    `Chelsea`,
    `Hammersmith`,
    `Fulham`,
    `Wandsworth`,
    `Lambeth`,
    `Southwark`,
    `Tower Hamlets`,
    `Hackney`,
    `Islington`,
    `Camden`,
    `Brent`,
    `Ealing`,
    `Hounslow`,
    `Richmond`,
    `Kingston`,
    `Merton`,
    `Sutton`,
    `Croydon`,
    `Bromley`,
    `Lewisham`,
    `Greenwich`,
    `Bexley`,
    `Havering`,
    `Barking`,
    `Dagenham`,
    `Redbridge`,
    `Newham`,
    `Waltham Forest`,
    `Haringey`,
    `Enfield`,
    `Barnet`,
    `Harrow`,
    `Hillingdon`,
  ],
  city: [
    `Bath`,
    `Birmingham`,
    `Bradford`,
    `Brighton`,
    `Bristol`,
    `Cambridge`,
    `Canterbury`,
    `Carlisle`,
    `Chelmsford`,
    `Chester`,
    `Chichester`,
    `Coventry`,
    `Derby`,
    `Durham`,
    `Ely`,
    `Exeter`,
    `Gloucester`,
    `Hereford`,
    `Kingston`,
    `Lancaster`,
    `Leeds`,
    `Leicester`,
    `Lichfield`,
    `Lincoln`,
    `Liverpool`,
    `London`,
    `Manchester`,
    `Newcastle`,
    `Norwich`,
    `Nottingham`,
    `Oxford`,
    `Peterborough`,
    `Plymouth`,
    `Portsmouth`,
    `Preston`,
    `Ripon`,
    `Salford`,
    `Salisbury`,
    `Sheffield`,
    `Southampton`,
    `St`,
    `Stoke`,
    `Sunderland`,
    `Truro`,
    `Wakefield`,
    `Wells`,
    `Westminster`,
    `Winchester`,
    `Wolverhampton`,
    `Worcester`,
    `York`,
  ],
  postcode: [
    `LU3`,
    `LU4`,
    `LU5`,
    `LU6`,
    `LU7`,
    `MK17`,
    `MK40`,
    `MK41`,
    `MK42`,
    `MK43`,
    `MK44`,
    `MK45`,
    `NN10`,
    `NN29`,
    `PE19`,
    `SG5`,
    `SG15`,
    `SG16`,
    `SG17`,
    `SG18`,
    `SG19`,
    `GU47`,
    `OX12`,
    `RG1`,
    `RG2`,
    `RG4`,
    `RG5`,
    `RG7`,
    `RG8`,
    `RG9`,
    `RG10`,
    `RG12`,
    `RG14`,
    `RG17`,
    `RG18`,
    `RG19`,
    `RG20`,
    `RG26`,
    `RG30`,
    `RG31`,
    `RG40`,
    `RG41`,
    `RG42`,
    `RG45`,
    `SL1`,
    `SL3`,
    `SL4`,
    `SL5`,
    `SL6`,
    `SL7`,
    `TW19`,
    `BS1`,
    `BS3`,
    `BS4`,
    `BS6`,
    `BS7`,
    `BS8`,
    `BS9`,
    ``,
  ],
  features: [],
  description: [],
};

function generatePropertyObjectFromFormData(o) {
  const monthly = o.rentMonthly || Math.floor(helper.randMinMax(500, 2500));
  const weekly = Math.floor(monthly / 4);

  let propertyObject = {
    id: uuid(),
    displayTitle: o.displayTitle || helper.randArr(dictionary.displayTitle),
    rent: {
      monthly: o.rentMonthly || Math.floor(Math.random() * 1000),
      weekly: o.rentWeekly || weekly,
    },
    layout: {
      description:
        o.layoutDescription || helper.randArr(dictionary.layoutDescription),
      bedrooms: o.bedroomCount || Math.floor(helper.randMinMax(1, 10)),
      hall: o.hallCount || Math.floor(helper.randMinMax(1, 3)),
      kitchen: o.kitchenCount || Math.floor(helper.randMinMax(1, 2)),
    },
    location: {
      area: o.area || helper.randArr(dictionary.area),
      city: o.city || helper.randArr(dictionary.city),
      postcode: o.postcode || helper.randArr(dictionary.postcode),
      lat: helper.randMinMax(51.3801748, 54.1353369),
      long: helper.randMinMax(-2.3995494, -0.8222118),
    },
    params: {
      durationCode: o.durationCode,
      durationText: helper.getDurationText(parseInt(o.durationCode)),
      furnishTypeCode: o.furnishTypeCode,
      furnishTypeText: helper.getFurnishTypeText(parseInt(o.furnishTypeCode)),
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

  return propertyObject;
}

// exports.propertyObject = propertyObject;
exports.generatePropertyObjectFromFormData = generatePropertyObjectFromFormData;

// const formDataObject = {
//   displayTitle: "",
//   rentMonthly: "",
//   rentWeekly: "",
//   layoutDescription: "",
//   bedroomCount: "",
//   hallCount: "",
//   kitchenCount: "",
//   area: "",
//   city: "",
//   postcode: "",
//   durationCode: "0",
//   furnishTypeCode: "0",
//   features: "",
// };

// const propertyObject = generatePropertyObjectFromFormData(formDataObject);
