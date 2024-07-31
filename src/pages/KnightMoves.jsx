
const KnightMoves = () => {
    return (
        <div className="flex flex-col justify-center w-full max-w-[1100px] gap-4 mx-4 mt-8 mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold">Knight Moves</h1>
            <p><strong>Tech: </strong> Vanilla JS, CSS</p>
            <p><strong>Live link: </strong> <a className="text-orange-500 hover:underline" href="https://jimmybowcott.github.io/knight-moves">https://jimmybowcott.github.io/knight-moves</a></p>
            <p>Knight moves is a knight pathfinder which finds the shortest path to a pawn. This was my first implementation of a BFS algorithm and I figured it could do with an interactive UI alongside it. It is written in vanilla JS/CSS.</p>
            <video controls class="w-full h-auto max-w-[1100px] self-center">
                <source src="./assets/media/knight-moves.mp4" type="video/mp4" />
            </video>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4">Purpose and motivation</h2>
            <p>The purpose of this project was to reienforce my understanding of search algorithms. After writing
                the algorithm, my more creative side lead me to implement it as an interactive web application (featuring some
                nice pixel art, of course).
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4">Challenges and solutions</h2>
            <p>Since this was one of the earlier projects I built, and is written in class-based vanilla code, a challenge
                I faced at the time was structuring my code in a way which is not only readable but also easy to maintain.
                The solution was to stick to SOLID principles and keep functions as simple as possible, and separate from each other.
                The only other challenge was deciding how to do the drag-and-drop. I initially tried HTML's built in transfer but since
                there is little control over this I ended up implementing my own to ensure the app could not accidentally be broken.
            </p>
        </div> 
    );
}

export default KnightMoves;