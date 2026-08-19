'use client';
import Image from 'next/image';
import {useCallback,useEffect,useRef,useState} from 'react';
import {ChevronLeft,ChevronRight} from 'lucide-react';

export type Slide={src:string;caption:string;detail:string};

export default function TripsSlideshow({slides}:{slides:Slide[]}){
  const [i,setI]=useState(0);
  const timer=useRef<ReturnType<typeof setInterval>|null>(null);
  const go=useCallback((n:number)=>setI(p=>(p+n+slides.length)%slides.length),[slides.length]);
  const reset=useCallback(()=>{if(timer.current)clearInterval(timer.current);timer.current=setInterval(()=>go(1),4500)},[go]);
  useEffect(()=>{reset();return()=>{if(timer.current)clearInterval(timer.current)}},[reset]);
  return <div className="slideshow" aria-roledescription="carousel" aria-label="Completed trips gallery">
    {slides.map((s,idx)=><div key={s.src+idx} className={`slide${idx===i?' active':''}`} aria-hidden={idx!==i}>
      <Image src={s.src} alt={s.caption} fill sizes="100vw" priority={idx===0}/>
      <div className="slide-caption"><small>{s.detail}</small><h3>{s.caption}</h3></div>
    </div>)}
    <button className="slide-btn prev" aria-label="Previous slide" onClick={()=>{go(-1);reset()}}><ChevronLeft/></button>
    <button className="slide-btn next" aria-label="Next slide" onClick={()=>{go(1);reset()}}><ChevronRight/></button>
    <div className="slide-dots">{slides.map((_,idx)=><button key={idx} aria-label={`Go to slide ${idx+1}`} className={idx===i?'on':''} onClick={()=>{setI(idx);reset()}}/>)}</div>
  </div>;
}
