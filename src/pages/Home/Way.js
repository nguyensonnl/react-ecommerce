// useEffect(() => {
//   const parseData = JSON.parse(localStorage.getItem("featuredProducts"));

//   const fetchData = async () => {
//     try {
//       const res = await productApi.getProductFeatured(5);
//       setFeaturedList(res.data);
//       localStorage.setItem("featuredProducts", JSON.stringify(res.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   if (!parseData) {
//     fetchData();
//   }
// }, []);

//the way new
// const cache = useRef({});

// useEffect(() => {
//   const fetchProducts = async () => {
//     const productURL = `${process.env.REACT_APP_BASE_URL}/products`;
//     const categoryURL = `${process.env.REACT_APP_BASE_URL}/categories`;

//     // Check if data already exists in the cache
//     if (cache.current[productURL] && cache.current[categoryURL]) {
//       const productsByCate = cache.current[categoryURL].reduce(
//         (acc, category) => {
//           return [
//             ...acc,
//             {
//               ...category,
//               productData: cache.current[productURL]
//                 .filter((product) => product.category._id === category._id)
//                 .slice(0, 5),
//             },
//           ];
//         },
//         []
//       );
//       setCategories(productsByCate);
//       setIsLoading(true);
//       return;
//     }

//     // Data not found in cache, make network requests
//     const [resProduct, resCategory] = await Promise.all([
//       axios.get(productURL),
//       axios.get(categoryURL),
//     ]);
//     const products = resProduct.data.data.productList;
//     const categories = resCategory.data;

//     // Store data in cache
//     cache.current[productURL] = products;
//     cache.current[categoryURL] = categories;

//     const productsByCate = categories.reduce((acc, category) => {
//       return [
//         ...acc,
//         {
//           ...category,
//           productData: products
//             .filter((product) => product.category._id === category._id)
//             .slice(0, 5),
//         },
//       ];
//     }, []);
//     setCategories(productsByCate);
//     setIsLoading(true);
//   };

//   fetchProducts();
// }, []);

//the way old
// useEffect(() => {
//   const productsParse = JSON.parse(localStorage.getItem("products"));
//   const categoriesParse = JSON.parse(localStorage.getItem("categories"));

//   const fetchProducts = async () => {
//     try {
//       const resProduct = await productApi.getAllProduct();
//       const products = resProduct.data.data.productList;
//       localStorage.setItem("products", JSON.stringify(products));
//       const resCategory = await productApi.getCategory();
//       const categories = resCategory.data;
//       localStorage.setItem("categories", JSON.stringify(categories));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!productsParse && !categoriesParse) {
//     fetchProducts();
//   }
// }, []);

// useEffect(() => {
//   const productsParse = JSON.parse(localStorage.getItem("products"));
//   const products = productsParse ? productsParse : [];
//   const categoriesParse = JSON.parse(localStorage.getItem("categories"));
//   const categories = categoriesParse ? categoriesParse : [];

//   const productsByCate = categories.reduce((acc, category) => {
//     return [
//       ...acc,
//       {
//         ...category,
//         productData: products.filter(
//           (product) => product.category._id === category._id
//         ),
//       },
//     ];
//   }, []);
//   setCategories(productsByCate);
// }, []);
