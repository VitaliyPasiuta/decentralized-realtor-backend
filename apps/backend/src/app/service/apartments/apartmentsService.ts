// import {run} from '../../../../../../libs/sample';


export const serviceAllApartments = async() => {
  try{
    const allApartments = mockApartments;
    return allApartments;
  }
  catch (e) {
    throw new Error(e);
  }
}

// interface test {
//   str: 'Admin' | 'User'
// }

// const t: test = {str: 'Admin'};

// console.log(t);


const mockApartments = [{
  id: 'string-ID-1',
  header: 'string-Header',
  country: 'string-Country',
  city: 'string-City',
  street: 'string-Street',
  price: 450,
  photos: ['photo-link-0', 'photo-link-1'], //???
  owner: 'string-Owner', //???
  cordX: 'string-cordX',
  cordY: 'string-cordY',
  description: 'string-Description',
  withAnimal: true,
}]

interface Apartments {
  id: string,
  header: string,
  country: string,
  city: string,
  street: string,
  price: number,
  photos: string[], //???
  owner: string, //???
  cordX: string,
  cordY: string,
  description: string,
}


// export const likedServicesAdd = async (id: string) => {
//   try {
//     const products: Product[] = await likedServicesGet();
//     const allProducts: Product[] = await services.productServices();
//     const curentProduct: Product = allProducts.find((product) => product.id === id);
//     if (curentProduct === undefined || products.find((product: Product) => product.id === curentProduct.id)) {
//       return
//     }

//     await db.likedAddBD(curentProduct);    
//   }
//   catch (e) {
//     throw new Error(e);
//   }
// }