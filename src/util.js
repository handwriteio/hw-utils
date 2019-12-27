import { INVALID_CHARACTERS, US_STATES } from "./constants";

export const usesInvalidCharacters = message => {
  return new RegExp(INVALID_CHARACTERS, "g").test(message);
};

export const stateAbbr = stateName => {
  const stateObj = US_STATES.find(state => state.name === stateName);
  if (!stateObj) {
    return "";
  }
  return stateObj.abbr.toUpperCase();
};

export const validateContactInfo = (contact = {}) => {
  let errors = [];
  const fields = [
    "firstName",
    "lastName",
    "street1",
    "street2",
    "city",
    "state",
    "zip",
    "company"
  ];
  const shouldBeCapped = [
    "firstName",
    "lastName",
    "street1",
    "street2",
    "city",
    "state"
  ];
  const requiredFields = ["street1", "city", "state", "zip"];
  const charLimits = [["firstName", 17], ["lastName", 17], ["company", 26]];
  const abbreviatables = ["street1", "street2"];

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  if (!contact.street1 && !contact.firstName) {
    errors.push({
      identifier: "Contact",
      errorMsg: "does not contain a street address"
    });
  }

  // check for required fields
  requiredFields.forEach(f => {
    if (!contact[f]) {
      errors.push({
        identifier: f,
        errorMsg: `is required for creating a contact`
      });
    }
  });

  // check for illegal characters
  fields.forEach(f => {
    if (contact[f] && usesInvalidCharacters(contact[f])) {
      errors.push({
        identifier: f,
        errorMsg: `uses one of the following invalid characters ${INVALID_CHARACTERS}`
      });
    }
  });

  // capitalize
  shouldBeCapped.forEach(f => {
    contact[f] = toTitleCase(contact[f]);
  });

  // limit characters
  charLimits.forEach(f => {
    const fieldLength = (contact[f[0]] || "").length || 0;
    const maxLength = f[1];
    if (fieldLength > maxLength) {
      errors.push({
        identifier: f[0],
        errorMsg: `cannot be more than ${maxLength} characters`
      });
    }
  });

  // convert state to initials
  if (contact.state) {
    if (contact.state.length === 2) {
      const stateName = US_STATES.find(state => state.abbr === contact.state);
      if (!stateName) {
        errors.push({
          identifier: contact.state,
          errorMsg: `is not a valid state abbreviation`
        });
      }
    } else {
      const stateName = stateAbbr(contact.state);

      if (!stateName) {
        errors.push({
          identifier: contact.state,
          errorMsg: `is not a valid state name`
        });
      }
    }
  }

  abbreviatables.forEach(a => {
    if (contact[a]) {
      contact[a] = contact[a]
        .replace(/[Nn]orthwest/g, "NW")
        .replace(/[Ss]outhwest/g, "SW")
        .replace(/[Ss]outheast/g, "SE")
        .replace(/[Nn]ortheast/g, "NE")
        .replace(/[Ss]treet/g, "St")
        .replace(/[Aa]venue/g, "Ave")
        .replace(/[Bb]oulevard/g, "Blvd");
    }
  });

  // zip code is five characters
  if (contact.zip && contact.zip.length !== 5) {
    errors.push({
      identifier: "Zip code",
      errorMsg: "must be exactly 5 digits"
    });
  }

  return {
    contact,
    errors
  };
};
