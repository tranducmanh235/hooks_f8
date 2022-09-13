import React, { useEffect, useState } from "react";

const PreviewAvatar = () => {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        // Cleanup

        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        // console.log(URL.createObjectURL(file));

        file.preview = URL.createObjectURL(file);

        setAvatar(file);

        e.target.value = null;
        console.log(123);
    };

    return (
        <div>
            <input type="file" onChange={handlePreviewAvatar} />

            {avatar && <img src={avatar.preview} alt="" width="80%" />}
        </div>
    );
};

export default PreviewAvatar;
