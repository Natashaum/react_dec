function SimpsonComponent(props) {
    console.log(props);

    let {itemName, picture} = props;

    let classnameItem = 'card';

    return (
        <div className={classnameItem}>

            <h2>{itemName}</h2>
            <img src={picture}/>

        </div>
    );
}

export default SimpsonComponent;