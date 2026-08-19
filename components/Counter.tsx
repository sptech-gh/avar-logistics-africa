'use client';
import {useEffect,useRef,useState} from 'react';
export default function Counter({value,suffix='',duration=1800}:{value:number,suffix?:string,duration?:number}){
  const ref=useRef<HTMLSpanElement>(null);
  const [n,setN]=useState(0);
  const started=useRef(false);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const io=new IntersectionObserver(([e])=>{
      if(!e.isIntersecting||started.current) return;
      started.current=true;
      const t0=performance.now();
      const tick=(t:number)=>{
        const p=Math.min(1,(t-t0)/duration);
        const eased=1-Math.pow(1-p,3);
        setN(Math.round(value*eased));
        if(p<1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    },{threshold:.4});
    io.observe(el);
    return ()=>io.disconnect();
  },[value,duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}
