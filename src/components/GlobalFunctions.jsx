export function importImagesFrom(folder) {
  const allImages = import.meta.glob(`/src/assets/**/*.{jpg,png,jpeg,svg,gif}`, {eager: true});
  return Object.entries(allImages)
    .filter(([path]) => path.includes(`/src/assets/${folder}/`))
    .map(([, module]) => module.default);
}