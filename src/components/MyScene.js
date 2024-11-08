import React, {  useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const My3DModel=()=>{const{scene}=useGLTF('/animated_moon.glb');const modelRef=useRef();useEffect(()=>{const handleMouseMove=(event)=>{if(modelRef.current){const{innerWidth,innerHeight}=window;const x=(event.clientX/innerWidth)*2-1;const y=-(event.clientY/innerHeight)*2+1;modelRef.current.rotation.y=x*Math.PI/5;modelRef.current.rotation.x=y*Math.PI/10}};window.addEventListener('mousemove',handleMouseMove);return()=>{window.removeEventListener('mousemove',handleMouseMove)}},[]);return<primitive ref={modelRef}object={scene}scale={6}/>};const Stars=()=>{const starGeometry=new THREE.BufferGeometry();const starMaterial=new THREE.PointsMaterial({color:0xffffff,size:0.6,transparent:!0,blending:THREE.AdditiveBlending,});const starCount=5000;const positions=new Float32Array(starCount*3);for(let i=0;i<starCount*3;i+=3){positions[i]=(Math.random()-0.5)*1000;positions[i+1]=(Math.random()-0.5)*1000;positions[i+2]=(Math.random()-0.5)*1000}
starGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));return<points geometry={starGeometry}material={starMaterial}/>};const CloseStars=()=>{const closeStars=[];for(let i=0;i<500;i++){closeStars.push(<mesh key={i}position={[(Math.random()-0.5)*1000,(Math.random()-0.5)*1000,(Math.random()-0.5)*1000]}><sphereGeometry args={[0.5,0.5,0.5]}/><meshStandardMaterial
color={0xFFD700}
emissive={0xFFD700}
emissiveIntensity={0.05}/></mesh>)}
return<>{closeStars}</>};const MyScene=()=>{return(<>{}<Canvas shadows><ambientLight intensity={0.6}/><directionalLight position={[10,10,5]}intensity={1.2}/><My3DModel/><Stars/><CloseStars/><OrbitControls enableZoom={!1}enablePan={!1}maxPolarAngle={Math.PI/2}/></Canvas></>)}

export default MyScene;
