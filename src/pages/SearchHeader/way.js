const filterData1 = useMemo(() => {
  const result = filteredData?.filter((product) => {
    if (search === "") {
      return product;
    } else {
      return product.name.toLowerCase().includes(search.toLowerCase());
    }
  });
  return result;
}, []);

const filterData = filteredData?.filter((product) => {
  if (search === "") {
    return product;
  } else {
    return product.name.toLowerCase().includes(search.toLowerCase());
  }
});

const searchData = useCallback(() => {
  let temp = listProduct;

  temp = temp.filter((product) => {
    if (search === "") {
      return product;
    } else {
      return product.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  setResultSearch(temp);
}, [search]);

useEffect(() => {
  searchData();
}, [searchData]);
