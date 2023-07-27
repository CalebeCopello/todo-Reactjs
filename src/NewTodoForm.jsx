import { useState } from "react"

export function NewTodoForm(props) {
    props.onSubmit
    const [newItem, setNewItem] = useState("")

    function handleSumit(e) {
        e.preventDefault()
        
        if (newItem === "") return

        props.onSubmit(newItem)
        
        setNewItem("")
    }

    return (
        <form onSubmit={handleSumit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">Novo Item:</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Adicionar</button>
        </form>
    )
}