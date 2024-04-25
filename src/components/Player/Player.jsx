import {useState} from "react";

const Player = ({intialName, symbol}) => {
    const [playerName, setPlayerName] = useState(intialName)
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

    const handleNameChange = (event) => {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleNameChange}/>
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    )
}

export default Player
