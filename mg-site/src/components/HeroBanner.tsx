interface HeroBannerProps {
  title: string;
  image: string;
  type:string
}

export default function HeroBanner({ title, image ,type}: HeroBannerProps) {

   let h = "h-[180px] md:h-[280px]";
   if(type=='child'){
    h= "h-[60vh]"
   }
  return (
    <div className="w-full">
      
      <div className={`relative  w-full ${h}`}>
        <img
          src={image}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-white text-3xl md:text-5xl font-semibold text-center">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
