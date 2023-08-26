import React, { useRef } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'


function Mesh() {
    const ref = useRef()
    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

    return (
        <mesh
            ref={ref}
            onClick={e => console.log('click')}
            onPointerOver={e => console.log('hover')}
            onPointerOut={e => console.log('unhover')}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    )


}

export default Mesh;
