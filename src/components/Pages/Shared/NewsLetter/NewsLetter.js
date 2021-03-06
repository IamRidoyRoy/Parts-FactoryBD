import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <h2 className='text-4xl text-center text-primary font-bold my-12 '>NewsLetter</h2>
            <div className="bg-white flex items-center justify-center ">
                <div className="mx-auto w-full max-w-screen-lg bg-primary rounded-lg px-5 py-10">
                    <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
                        <div className="flex justify-center md:justify-end">
                            <img className="w-full max-w-sm" src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png" alt="Marketing newsletter via computer Illustration in PNG, SVG" />
                        </div>
                        <div className="flex items-center">
                            <div className="mx-auto md:mx-0">
                                <h3 className="text-4xl font-bold text-white">Subscribe</h3>
                                <p className="mt-2 max-w-[20rem] text-lg text-white/80">Join our weekly digest. You'll also receive some of our best posts today.</p>
                                <form action="" className="mt-4 flex flex-col">
                                    <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" />
                                    <button type="submit" className="mt-4 w-full max-w-[14rem] rounded bg-white/30 px-14 py-2 text-center text-white">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;