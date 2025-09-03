export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Delay');
    }, 2000);
  });

  return <div>Blog</div>;
}
