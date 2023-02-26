interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => (
  <section className={`flex-1 w-full md:max-w-3xl max-w-xs mx-auto mt-12 sm:max-w-sm`}>
    <div className="flex flex-col w-full max-w-7xl shadow-md p-3 pt-4 sm:px-5 sm:py-6 bg-white rounded-b-lg">{children}</div>
  </section>
);

export default Card;