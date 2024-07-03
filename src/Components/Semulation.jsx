import { useDispatch, useSelector } from "react-redux";
import { Filters } from "../ReduxApp/Actionsapp/funtype";
import { useEffect, useState } from "react";

const Semulation = () => {

    const [ListChecked , setListChecked] = useState({
        toit : 0 ,
        systeme : 0,
        phase : 0,
        camera : 0
    })

    const [block , setBlock] = useState(false)

    const [ calculate , setCalculate ] = useState(0)

    const DataCarsState = useSelector(state => state.DataCar);
    const dispatch = useDispatch();

    const hanldeFilter =(e) =>{
        e.preventDefault();
        const valSele = e.target.value;
        const value = DataCarsState.filter((item) => item.marque === valSele);
        dispatch(Filters(value));
    };

    const ItemFilterState = useSelector(state => state.ItemSelect);

    useEffect(() => {
        console.log(ItemFilterState);
    }, [ItemFilterState]);

    

    const handleChecked = (e) => {
        e.preventDefault()
        setListChecked({
            ...ListChecked,
            [e.target.name]: e.target.checked ? parseInt(e.target.value) : 0
        });
    };

    const handleSemuler = (e) => {
        e.preventDefault();
        const prix = parseInt(ItemFilterState.map((item)=>(item.prix)))
        const toit = parseInt(ListChecked.toit)
        const systeme = parseInt(ListChecked.systeme)
        const phase = parseInt(ListChecked.phase)
        const camera = parseInt(ListChecked.camera)
        const taxe = prix * 0.10 
        const immatricule = 5000
        // const Totat = prix + toit + systeme + phase + camera + taxe
        const option = toit + systeme + phase + camera
        setCalculate([prix , option , taxe , immatricule])
        console.log(...calculate)
        setBlock(true)
    };

    return (
        <>
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="marque">Marque :</label>
                            <select className="form-control" name="marque" onChange={hanldeFilter}>
                                {DataCarsState.map((item, index) => (
                                    <option key={index} value={item.marque} >{item.marque}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="modele">Modele :</label>
                            <select className="form-control" name="modele">
                                {ItemFilterState.map((item, index) => (
                                    <option key={index} value={item.modele}>{item.modele}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="carburant">Type de Carburan :</label>
                            <select className="form-control" name="carburant">
                                {ItemFilterState.map((item, index) => (
                                    <option key={index} value={item.type}>{item.type}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Options Supplementaire :</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="toit" value={10000} id="toit" onChange={handleChecked}/>
                                <label className="form-check-label" htmlFor="toit">Toit ouvrant</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="systeme" value={5000} id="gps" onChange={handleChecked}/>
                                <label className="form-check-label" htmlFor="gps">Système de Navigation GPS</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="phase" value={3000} id="led" onChange={handleChecked}/>
                                <label className="form-check-label" htmlFor="led">Phares LED</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="camera" value={2000} id="camera" onChange={handleChecked}/>
                                <label className="form-check-label" htmlFor="camera">Caméra de Recul</label>
                            </div>
                            <button onClick={handleSemuler}>Semuler</button>
                        </div>
                    </div>
                </div>
            </form>
            {
            block && (
                <ul>
                    <li>Prix de Base : {calculate[0]}</li>      
                    <li>Frais Option : {calculate[1]}</li>      
                    <li>Taxe : {calculate[2]}</li>      
                    <li>frais d'immatricule : {calculate[3]}</li>      
                    <li><h2>Prix Total : {calculate[0] + calculate[1] + calculate[2] + calculate[3]}</h2></li>
                </ul>
            )
        }
        </div>
        </>
    );
};

export default Semulation;


