export const getDebrisData = async (params) => {
    const result = await fetch(process.env.REACT_APP_BASE_URL + `/debris?perPage=8&page=${params.page}`);
    const data = await result.json();
    return data;
}

export const getDetails = async (id) => {
    const result = await fetch(process.env.REACT_APP_BASE_URL + "/debris/" + id);
    const data = await result.json();
    return data;
};

export const getStatistics = async (params) => {
    const data = await fetch(
      process.env.REACT_APP_BASE_URL + `/stats/detection-statistics`
    );
    const res = await data.json();
    return res;
  };