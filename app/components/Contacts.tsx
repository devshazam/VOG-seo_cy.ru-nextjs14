"use client"
import { useEffect , useState} from 'react';


const imgArray = [["phone", "tel:+79956221475", '/img/phone.png'], ["Telegramm", "https://t.me/+79956221475", '/img/telegramm.png'], ["Whatsapp", "https://wa.me/+79956221475", '/img/whatsapp.png']]


export default function Contacts() {
  const [img, setImg] = useState(3)

  useEffect(() => {
      setTimeout(() =>{setImg(img + 1)}, 3000)

  }, [img])

  return (

        <div className='fixed bottom-10 right-10 w-content z-50'>
          <a title={imgArray[img % 3][0]} href={imgArray[img % 3][1]} target="_blank"  className='phone-ya'>
            <img src={imgArray[img % 3][2]} className='w-20 h-20' alt='phone'/>
          </a>
        </div>

   
  );
};
