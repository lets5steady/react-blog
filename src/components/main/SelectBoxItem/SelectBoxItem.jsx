export default function SelectBoxItem({items}) {
    return (
        <>
        {items.map(item => <option key={item.id} value={item.value}>{item.name}</option>)}
        </>
    );
}