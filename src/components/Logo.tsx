import Link from "next/link"
import Image from "next/image"
import logoImg from "../../public/images/sentinel-yellow-logo.png"


const Logo = () => {
    return (
        <div className="flex justify-between items-center flex-col">
            <Link href='/'>
                <Image src={logoImg} alt="Sentinel logo" width={100} height={100} priority={false}></Image>
            </Link>
            <h1 className="text-2xl md:text-xl sm:text-xl font-bold ">Sentinel</h1>
        </div>
    )
}

export default Logo;