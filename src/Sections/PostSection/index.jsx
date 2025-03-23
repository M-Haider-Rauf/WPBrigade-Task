import { Post } from "../../Components/Post"
import { PostSmall } from "../../Components/PostSmall"
import { EventList } from "../../Components/EventList"
import { PostSlider } from "../../Components/PostSlider"

const eventlist =[
        {name: "Show in USA", location: "USA"}, {name: "Show in UK", location: "UK"},
        {name: "Show in USA", location: "USA"}, {name: "Show in UK", location: "UK"},
        {name: "Show in USA", location: "USA"}, {name: "Show in UK", location: "UK"}
]

export function PostSection() {
    return(
        <div className="flex flex-row w-full bg-green-900 py-4">
            <div className="flex w-3/4 flex-col justify-center items-center">
                <PostSlider />
                <hr class="w-2/3 h-0.5 mb-4 bg-gray-600 border-0 dark:bg-gray-700" />
                <div className="flex flex-row w-full justify-evenly items-center px-36 mb-8">
                    <PostSmall img="./post-img.png" title="2018 Champions" content="Membership has its perks." />
                    <PostSmall img="./post-img.png" title="2019 Champions" content="Membership has its perks" />
                    <PostSmall img="./post-img.png" title="2020 Champions" content="Membership has its perks" />
                </div>
                <ul className="flex w-full flex-col justify-center items-center">
                    <Post
                        image="./video-thumbnail-img.png" 
                        title="Post Title" 
                        description="This is the description of the item.... Add any description here." 
                        link="" 
                    />
                    <Post
                        image="./video-thumbnail-img.png" 
                        title="Post Title 2" 
                        description="This is the description of the item.... Add any description here." 
                        link="" 
                    />
                </ul>
            </div>
            <div className="flex flex-col">
                <EventList data={eventlist} />
            </div>
        </div>
    )
}