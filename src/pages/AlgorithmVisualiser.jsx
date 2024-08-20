
const AlgorithmVisualiser = () => {
    return (
        <div className="flex flex-col justify-center w-full max-w-[1100px] gap-4 mx-4 mt-8 mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold">Algorithm Visualiser</h1>
            <p><strong>Tech: </strong>React, Tailwind</p>
            <p><strong>Live link: </strong> <a className="text-orange-500 hover:underline" href="https://jimmybowcott.github.io/algortithm-visualiser" target="_blank">https://jimmybowcott.github.io/algortithm-visualiser</a></p>
            <p>Algorithm Visualiser is a modern, interactive visualiser for array, tree and grid data structures. It is written in React and Tailwind and features
                sorting algorithms such as insertion sort and merge sort, as well as searching algorithms which include breadth-first search and depth-first search, among others.
                The algorithm visualiser is made to be fully responsive for every screen size (minus the Nokia Brick... Please don't try to view it on this).
            </p>
            <video controls class="w-full h-auto max-w-[1100px] self-center">
                <source src="./assets/media/algorithm-visualiser.mp4" type="video/mp4" />
            </video>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4">Purpose and motivation</h2>
            <p>The main motivation behind this project was to solidify my understanding of algorithms and data structures. Whilst this is not the first algorithm visualiser
                out there, it aims to improve on existing projects I have come across in terms of design, user experience and responsiveness.
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4">Challenges and solutions</h2>
            <p>The challenge with this project was getting the visualisation correct, particularly matching the display on-screen with
                the recursive sorting algorithms, since the approach selected was to move the existing bars rather than destroying/recreating
                them. The solution to this was to sort an array of indexes as well as the array itself, to instead track
                the movement of the bars as the array was sorted.
            </p>
        </div> 
    );
}

export default AlgorithmVisualiser;