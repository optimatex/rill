// import { pipe, replace, curry } from '@rill/utils/dist';
// import { mapObjIndexed, keys } from '_employee/utils';

// // TODO: extrace finish
// const upperLatLetters = /[A-Z]/;
// const objectFrameSymbols = /{|}/g;
// const comma = /,/g;

// function toCssPropReplacer(m) {
//   return `-${m}`;
// }

// const cssKey = (k) =>
//   typeof k === 'string' ? k.replace(upperLatLetters, toCssPropReplacer) : '';

// const appendPixels = (v: number | string, k, o) => typeof v === 'string' ? v : `${v}px`;

// // TODO: probably not need this
// function intToCssCrude(integerLens, t) {
//   const str = pipe(
//     integerLens(1),
//     (mapObjIndexed(appendPixels),
//     JSON.stringify,
//     replace(objectFrameSymbols, ''),
//     replace(comma, ';')),
//   );

//   return str;
// }
// export default curry(intToCssCrude);
