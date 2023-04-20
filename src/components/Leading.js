import AnimatedTextCharacter from "./AnimatedTextCharacter";
import Image from "next/image";
const Leading = ({text}) => {
    return <>
    <div className="flex flex-col items-center">
    <Image 
        className="rounded-full"
            src={'/profile.jpg'}
            alt="Picture of the author"
            width={100}
            height={100}
        />
        <AnimatedTextCharacter text={text} />
    
    </div>
    </>
    
}

export default Leading;