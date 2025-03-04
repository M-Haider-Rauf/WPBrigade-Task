import { Post } from "../../Components/Post"

export function PostSection() {
    return(
        <div className="flex w-full flex-col justify-center items-center bg-green-900 py-4">
            <ul className="flex w-full flex-col justify-center items-center">
                <Post
                    image="./src/assets/video-thumbnail-img.png" 
                    title="Post Title" 
                    description="This is the description of the item.... Add any description here." 
                    link="" 
                />
                <Post
                    image="./src/assets/video-thumbnail-img.png" 
                    title="Post Title 2" 
                    description="This is the description of the item.... Add any description here." 
                    link="" 
                />
            </ul>
        </div>
    )
}