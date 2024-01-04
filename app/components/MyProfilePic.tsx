import Image from "next/image";

function MyProfilePic() {
  return (
    <section className="w-full mx-auto mb-8">
      <Image
        className="border-4 border-black dark:border-slate-500
      drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/profile-2.png"
        width={200}
        height={200}
        alt="Matias Fernandez"
        priority={true}
      />
    </section>
  );
}

export default MyProfilePic;
