interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export function findNameOfTallestMountain(mountains: Mountain[]): string {
  let highestMountain: Mountain = mountains[0];

  mountains.forEach((element) => {
    if (element.height > highestMountain.height) {
      highestMountain = element;
    }
  });
  return highestMountain.name;
}
