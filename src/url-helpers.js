/* globals Buffer */

export const MAX_DAYUM_LENGTH = 250;
export const MAX_MESSAGE_LENGTH = 250;

export const extractUrlData = (queryString) => {
  const urlData = Buffer.from(queryString.substring(1), 'base64').toString();
  let firstColonIndex = urlData.indexOf(':');
  if(firstColonIndex < 0) {
    firstColonIndex = urlData.length;
  }
  const count = Math.min(parseInt(urlData.substring(0, firstColonIndex), 10), MAX_DAYUM_LENGTH);
  const message = urlData.substring(firstColonIndex + 1);
  return { count, message };
};

export const computeLink = ({ origin, count, message }) => {
  count = Math.min(parseInt(count, 10) || 0, MAX_DAYUM_LENGTH);
  message = message.substring(0, MAX_MESSAGE_LENGTH);
  return `${origin}/?` + Buffer.from(`${count}:${message}`).toString('base64');
};
