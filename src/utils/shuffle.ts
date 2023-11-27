export default function shuffleArray<T>(array: T[]): T[] {
  // Make a copy of the array to avoid mutating the original array
  const shuffledArray = [...array];

  // Start from the last element and swap one by one
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the element at i with the element at randomIndex
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
}
