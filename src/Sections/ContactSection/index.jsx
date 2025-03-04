export function ContactSection() {
    return(
        <div className="bg-green-700 w-full h-120 flex justify-center">
            <div className="flex flex-col justify-center items-center py-6 gap-y-4">
                <h2 className="font-impact text-2xl text-white">Get in touch with us</h2>
                <div className="flex flex-row gap-x-8 w-full">
                    <div className="flex flex-col">
                        <p className="font-impact text-white">Name</p>
                        <input className="bg-white w-48 px-2 py-1 rounded-xs" type="text" placeholder="Enter name" />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-impact text-white">Email</p>
                        <input className="bg-white w-48 px-2 py-1 rounded-xs" type="text" placeholder="Enter email" />
                    </div>
                </div>
                <div className="flex flex-row gap-x-8 w-full">
                    <div className="flex flex-col">
                        <p className="font-impact text-white">Country</p>
                        <select className="bg-white px-2 py-1 rounded-xs w-48">
                            <option>US</option>
                            <option>Pakistan</option>
                            <option>India</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-impact text-white">State</p>
                        <select className="bg-white px-2 py-1 rounded-xs w-48">
                            <option>US</option>
                            <option>Pakistan</option>
                            <option>India</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-row gap-x-8 w-full">
                    <div className="flex flex-col w-full">
                        <p className="font-impact text-white">Gender</p>
                        <div className="flex flex-row justify-between w-1/2">
                            <input type="radio" checked id="male" name="gender" value="male" />
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female" />
                            <label for="male">Female</label>
                            <input type="radio" id="other" name="gender" value="other" />
                            <label for="male">Other</label>
                        </div>
                    </div>
                </div> 
                <div className="flex flex-row gap-x-8 w-full">
                    <div className="flex flex-col w-full">
                        <p className="font-impact text-white">Message</p>
                        <textarea className="bg-white p-2 resize-none rounded-xs" placeholder="Write your message...">
                        </textarea>
                    </div>
                </div>
                <div className="flex flex-row gap-x-8 w-full justify-center">
                    <button className="font-impact text-white bg-green-900 py-2 px-12 hover:bg-green-500">Submit</button>
                </div>
            </div>
        </div>
    )
}