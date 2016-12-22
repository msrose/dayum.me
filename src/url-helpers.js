/* globals Buffer */

export const extractUrlData = (queryString) => {
  const urlData = Buffer.from(queryString.substring(1), 'base64').toString();
  let firstColonIndex = urlData.indexOf(':');
  if(firstColonIndex < 0) {
    firstColonIndex = urlData.length;
  }
  const count = Math.min(parseInt(urlData.substring(0, firstColonIndex), 10), 250);
  const message = urlData.substring(firstColonIndex + 1);
  return { count, message };
};
