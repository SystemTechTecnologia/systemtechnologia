import { useState } from "react";
import Container from ".././container";

const VideoNarutoOne = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700">
          {!playVideo && (
            <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16  lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {playVideo && (
            <iframe
              src="https://rr1---sn-uphcg51pa-bg0ee.googlevideo.com/videoplayback?expire=1729736101&ei=JT0ZZ6zhMYun0_wP7PuymA0&ip=2804:214:8108:e932:c5c5:2d2d:34c5:e47a&id=1836c4628f5dd183&itag=18&source=blogger&xpc=Egho7Zf3LnoBAQ%3D%3D&met=1729707301,&mh=2J&mm=31&mn=sn-uphcg51pa-bg0ee&ms=au&mv=m&mvi=1&pl=49&rms=au,au&susc=bl&eaua=cm6FAtAAJNo&mime=video/mp4&vprv=1&rqh=1&dur=1388.622&lmt=1541983572294124&mt=1729707190&sparams=expire,ei,ip,id,itag,source,xpc,susc,eaua,mime,vprv,rqh,dur,lmt&sig=AJfQdSswRQIgIkPBKvLl5qDSo6pqAJ9HrBQVV7jcPylDALq46Wu_qHUCIQCZ5iHNofK8-DQH8dbpEQSUUtPaFCbclpiWhmx9mgooMw%3D%3D&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhALDtUhIRWUfDkLZSogq1T8J9K_aQRyA3I4fOO9kIQtdLAiBaw73rV4JUqZflhYfreE-lcLWarAiiifYwnZZLr8RdwQ%3D%3D&cpn=ZHYqnMX789BkOjjm&c=WEB_EMBEDDED_PLAYER&cver=1.20241020.00.00"
              title="Naruto Ep 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          )}
        </div>
      </div>
    </Container>
  );
}

export default VideoNarutoOne;