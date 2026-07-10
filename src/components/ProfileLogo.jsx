export function ProfileLogo({ image, alt = 'Tio Ferreira' }) {
  return (
    <div className="w-full flex justify-center mb-5">
      <div className="p-[2px] rounded-full border-[3px] border-[#FEDD00] te ">
        <img
          src={image}
          alt={alt}
          className="w-[70px] h-[70px] rounded-full object-cover block"
        />
      </div>
    </div>
  )
}
