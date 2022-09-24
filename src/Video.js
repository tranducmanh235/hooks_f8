import video1 from "./videos/video-1.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));

    return (
        <div>
            <video ref={ref} src={video1} width={280} />;
        </div>
    );
}

export default forwardRef(Video);
