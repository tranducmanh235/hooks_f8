import React, { useEffect, useState } from "react";

const PreviewAvatarTT = () => {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        // console.log(URL.createObjectURL(file));

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    };

    return (
        <div>
            <input type="file" onChange={handlePreviewAvatar} />

            {avatar && <img src={avatar.preview} width="80%" />}
        </div>
    );
};

export default PreviewAvatarTT;
