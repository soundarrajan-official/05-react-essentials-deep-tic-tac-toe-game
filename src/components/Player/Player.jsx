import {useState} from "react";

const Player = ({name, symbol}) => {
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => {
        /**
         * toggle the value of current state is not recommended by react for updating the state based on previous state
         * setIsEditing(!isEditing) // schedule the state update to true
         * setIsEditing(!isEditing) // schedule the state update to true
         *
         * Instead of this, use the updater function to update the state based on previous state
         * setIsEditing(prevState => !prevState) // schedule the state update to true
         * setIsEditing(prevState => !prevState) // schedule the state update to false
         */
         setIsEditing(prevState => !prevState)
    }

    let playerName = <span className="player-name">{name}</span>

    if (isEditing) {
        playerName = <input type="text"/>
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    )
}

export default Player
