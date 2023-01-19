declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  const content: import('next/dist/client/image').StaticImageData;

  export default content;
}
