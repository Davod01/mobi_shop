export function digitSeperator (val:string) {
  return val.split('') // flip the entire string so that we can break every
    .reverse() //   3rd diit, starting from the end
    .join('')
    .split(/(...)/) // split on every 3rd
    .reverse() // flip the string again, though now each group of 3 is
    .join(',') //   backwards
    .replace(/,(?=,)|,$|^,/g, '') // remove extra ,
    .replace(/(,|^)(\d)(\d)?(\d)?/g, '$1$4$3$2') // flip each group of digits
}
