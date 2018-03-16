function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue>revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  array=drivers.filter(function (driver){return driver.revenue>revenue;});
  return array.map(function(driver) {return driver.name;});
}

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue>revenue;
  });
}

function exactMatch (drivers, option){
  const key=Object.keys(option);
  const attribute = (option[key]);

  return drivers.filter(function (driver){
    return driver.name===attribute || driver.revenue===attribute;
  });
}

function exactMatchToList (drivers, option){
  const key=Object.keys(option);
  const attribute = (option[key]);
 
  const array = drivers.filter(function (driver){return driver.name===attribute || driver.revenue===attribute;});
  
    return array.map(function(driver) {return driver.name;});
  
}