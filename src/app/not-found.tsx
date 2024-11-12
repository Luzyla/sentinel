import Image from "next/image";
import Link from "next/link";
import image404 from '../../public/images/error-404.svg'

const Custom404 = () => {
    
return (
    <section className="w-screen h-screen flex justify-center">
        <div className="flex flex-col justify-center items-center w-[75vw]">
            <p className="text-xl">Sorry, something went wrong...</p>
            <picture>
                <Image src={image404} alt="image 404" width={400} height={400}/>
            </picture>
            <Link href="/" className="font-bold text-xl">Go back Platform</Link>
        </div>
    </section>    

    
)
}

export default Custom404