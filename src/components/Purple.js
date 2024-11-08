import React, {  useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';



const My3DModel = () => {
    const { scene } = useGLTF('/purple_planet.glb');
    
    const modelRef = useRef();
    useEffect(() => {
        const handleMouseMove = (event) => {
            if (modelRef.current) {
                const { innerWidth, innerHeight } = window;
                const x = (event.clientX / innerWidth) * 2 - 1;
                const y = -(event.clientY / innerHeight) * 2 + 1;

                modelRef.current.rotation.y = x * Math.PI / 5;
                modelRef.current.rotation.x = y * Math.PI / 10;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <primitive ref={modelRef} object={scene} scale={2} />;   
};


const MyPurple = () => {
    return (
        <>
            {/* Place any HTML outside Canvas */}
          

            <Canvas shadows>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                    <My3DModel />
                   
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
            </Canvas>
        </>
    );
};

export default MyPurple;
