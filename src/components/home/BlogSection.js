import Card from "./Card";

const BlogSection = () => {
  return (
    <section className="px-6">
      <div className="max-w-[1240px] mx-auto py-24 flex flex-col gap-8 items-center ">
        <div>
          <h1 className="heading-2">
            <span className="font-bold">Recommended</span> posts
          </h1>
        </div>

        <nav>
          <ul className="flex gap-8 flex-wrap justify-center">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default BlogSection;
