import React, {useState} from "react";
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';

function ImageChange () {
    //초기 이미지 경로는 ../img/image1.jpg로 설정돼있는 
    //image1으로 초기 이미지 설정
    const [imageSrc, setImageSrc] = useState(image1);
    const [isClick, setIsClick] = useState(true);

    //이미지를 클릭할 때마다 이미지가 변경될 수 있도록 
    // 클릭 함수 만들기
    const handleClick = () => {
        if (isClick) {
            setImageSrc(image2);
            setIsClick(false);
        } else { //거짓일 때 //false 로 돼있는 값을 true 변경
            setImageSrc(image1);
            setIsClick(true);
        }
    }

    return (
        <div>
            <img src={imageSrc} onClick={handleClick}/>
        </div>
    )
}
export default ImageChange;