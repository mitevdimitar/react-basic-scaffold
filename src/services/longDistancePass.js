import { passes } from "./playersPasses";

export const longDistancePass = () => {
    //get the player with the longest completed pass
    const longestDistancePass = passes.reduce((prev, current) => {
        if (!prev.distance) {
            return current;
        }
        if (current.distance > prev.distance) {
            return current;
        }
        return prev;
    }, {});

    //transform the player info into required format and return it
    const longDistancePassPlayerInfo = {
        player: longestDistancePass.receiver,
        value: longestDistancePass.distance
    }

    return longDistancePassPlayerInfo;
}