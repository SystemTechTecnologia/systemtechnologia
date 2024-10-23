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
              src="https://rr5---sn-uphcg51pa-bg0e.googlevideo.com/videoplayback?expire=1729735866&ei=OjwZZ-XYNdTFy_sPjuqwoQM&ip=2804:214:8108:e932:c5c5:2d2d:34c5:e47a&id=d3e5fadd70c9b186&itag=18&source=blogger&xpc=Egho7Zf3LnoBAQ%3D%3D&met=1729707066,&mh=_d&mm=31&mn=sn-uphcg51pa-bg0e&ms=au&mv=m&mvi=5&pcm2cms=yes&pl=49&rms=au,au&susc=bl&eaua=cm6FAtAAJNo&mime=video/mp4&vprv=1&rqh=1&dur=1389.412&lmt=1541983614172537&mt=1729706958&sparams=expire,ei,ip,id,itag,source,xpc,susc,eaua,mime,vprv,rqh,dur,lmt&sig=AJfQdSswRAIgNAvAmU_dJ8KLaxHi2Y4OTuBTgFoiEePCk-exeAtbkK0CICJxXjDtxhJ-1tJzo7l9NWZNT5TsHOV067Y2oY-AuT74&lsparams=met,mh,mm,mn,ms,mv,mvi,pcm2cms,pl,rms&lsig=ACJ0pHgwRQIgLSD7uUDlDLB1bj2Dx5cjNzNOfI2tDr5l9w2oNnbEqAkCIQCEi7DMn5Sc7GpOBDduT5LPLyAYv83S4exAD_M_2dPoOw%3D%3D&cpn=xxOhYiby-E6mlAIw&c=WEB_EMBEDDED_PLAYER&cver=1.20241020.00.00"
              title="Naruto Ep 1"
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