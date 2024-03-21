const HQ = 42;

function distanceFromHqInBlocks(start) {
  return Math.abs(HQ - start);
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const totalDistance = distanceTravelledInFeet(start, destination);

  if (totalDistance <= 400) {
    return 0;
  } else if (totalDistance > 2500) {
    return "cannot travel that far";
  } else if (totalDistance > 400 && totalDistance <= 2000) {
    return (totalDistance - 400) * 0.02;
  } else if (totalDistance > 2000) {
    return 25;
  }
}
