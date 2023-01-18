import { passes } from "./playersPasses";

export const mostCompletePercentage = () => {
    //helper function that updates the player pass completion info
    const updatedPassCompletionInfo = (current, completeInfo) => {
        completeInfo.total += 1;
        if (current.result === "complete") {
            completeInfo.completed += 1;
        }
        const rawPercentage = completeInfo.completed / completeInfo.total;
        const percentage = rawPercentage.toFixed(2) * 100;
        completeInfo.percentage = percentage;
    }

    //extract pass completion info from the array of players
    const completePercentageInfo = {};
    passes.forEach((current) => {
        if (completePercentageInfo.hasOwnProperty(current.receiver)) {
            const currentCompleteInfo = completePercentageInfo[current.receiver];
            updatedPassCompletionInfo(current, currentCompleteInfo);
        } else {
            const completeInfo = {
                completed: 0,
                total: 0,
                percentage: 0,
                player: current.receiver
            }
            updatedPassCompletionInfo(current, completeInfo);
            completePercentageInfo[current.receiver] = completeInfo;
        }
    });

    //get the player with biggest completion percentage
    const completedPercentageInfoArr = Object.values(completePercentageInfo);
    completedPercentageInfoArr.sort((a, b) => b.percentage - a.percentage);
    const biggestCompletedPercentage = completedPercentageInfoArr[0];
    
    //transform the player object and return it
    const mostCompletedPlayerInfo = {
        player: biggestCompletedPercentage.player,
        value: `${biggestCompletedPercentage.percentage}%`
    }
    return mostCompletedPlayerInfo;
}