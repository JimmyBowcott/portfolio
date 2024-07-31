const Pixterest = () => {
    return (
        <div className="flex flex-col justify-center w-full max-w-[1100px] gap-4 mx-4 mt-8 mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold">Pixterest</h1>
            <p><strong>Tech: </strong> React, Tailwind</p>
            <p><strong>Live link: </strong> <a className="text-orange-500 hover:underline" href="https://jimmybowcott.github.io/pixterest"  target="_blank">https://jimmybowcott.github.io/pixterest</a></p>
            <p>Pixterest is a front-end Pinterest clone designed specifically for pixel art. Built with React, it features DeviantArt's RSS API to fetch posts which can be saved locally. It is designed to be fully responsive for every screen size. My inspiration for this project came from wanting to make a challenging website with my own personal spin.</p>
            <video controls class="w-full h-auto max-w-[1100px] self-center">
                <source src="./assets/media/pixterest.mp4" type="video/mp4" />
            </video>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4">Purpose and motivation</h2>
            <p>The motivation behind this project is to demonstrate and develop my skills with React and API handling. The site features 
                a search page which allows users to retrieve and save artwork from DeviantArt's RSS feed. The home page is made to be 
                identical to Pinterest's, and features a unique rotating gallery of artwork, something which particularly caught my eye when
                researching for the project.</p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4">Challenges and solutions</h2>
            <p>The first challenge was making the gallery component on the landing page. I quite enjoyed the process of figuring out how 
                the component was built in the first place, and then re-making it myself. Similarly, the custom scroll feature took some time to get right
                as I had not previously built anything similar. The second challenge is this project was making it fully responsive. The homepage features an
                artistic layout, so components had to be re-positioned or hidden individually at different screen sizes.
            </p>
        </div> 
    );
}

export default Pixterest;