import React, {  useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const My3DModel = () => {
    const { scene } = useGLTF('/planet_venus.glb');
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

    return <primitive ref={modelRef} object={scene} scale={0.004} />;   
};
const MyVenus = () => {
    return (
        <>
            {/* Place any HTML outside Canvas */}
          

            <Canvas shadows>
                <ambientLight intensity={0.1} />
                <directionalLight position={[0, 50, 90]} intensity={1} />
                    <My3DModel />
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1} />
            </Canvas>
        </>
    );
};

export default MyVenus;
