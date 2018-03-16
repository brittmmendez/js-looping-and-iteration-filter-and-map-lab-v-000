function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue>revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  array=drivers.filter(function (driver){return driver.revenue>revenue;});
  return array.map(function(driver) {return driver.name;});
}
