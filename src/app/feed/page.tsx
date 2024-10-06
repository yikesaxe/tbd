import MiddleFeed from './MiddleFeed';

export default function Feed() {

    return (
        <div className="grid grid-cols-3 w-screen h-screen">
            <div className="col-start-1">first</div>
            <MiddleFeed />
            <div className="col-start-3">three</div>
        </div>
    )
}