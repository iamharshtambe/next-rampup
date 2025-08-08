export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Delay');
    }, 2000);
  });
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Blog</h1>
    </div>
  );
}
