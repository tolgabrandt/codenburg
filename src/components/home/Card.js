const Card = ({ CardIMG }) => {
  return (
    <li className="max-w-[380px] flex flex-col gap-8 ">
      <div className="h-[220px] bg-slate-100">
        <img
          className="h-full object-cover"
          src={CardIMG}
          alt="Blog Cover"
        />
      </div>
      <div className="flex flex-col gap-4 px-1">
        <h2 className="text-2xl font-bold">Make React Apps More Dynamic</h2>
        <p className="section-text max-h-[60px] overflow-hidden">
          Now for a lot of developers, Gradient Descent is not necessarily going
          to b...
        </p>
      </div>
    </li>
  );
};
export default Card;
