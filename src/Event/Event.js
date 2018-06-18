import React, {Component} from 'react';
import './Event.css';
import zoom from './zoom.svg';
import edit from './edit.svg';
import remove from './delete.svg';
import closeZoom from './close.svg';



class Event extends Component {


    state = {
        edit: false,
        zoom: 'min'
    };

    toggleEdit = () => {
        const editOn = this.state.edit;
        this.setState({edit: !editOn});
    };
    zoomOn = () => {
        this.setState({
            zoom: 'max'
        });
    };
    zoomOff = () => {
        this.setState({
            zoom: 'min'
        })
    };
    someFn = () => {
        this.setState({
            edit: false
        });
        let newName = this.refs.editName.value;
        let newCity = this.refs.editCity.value;
        let newCategory = this.refs.editCategory.value;
        let newDate = this.refs.editDate.value;
        let newDesc = this.refs.editDesc.value;
        let newOrganizer = this.refs.editOrganizer.value;


        this.props.changeText(this.props.id, newName, newCity, newCategory, newDate, newDesc, newOrganizer);
    };

    render() {

        if (!this.state.edit) {
            return (
                <div>
                    <div className="Events__list">
                        <div className={`Event ${this.props.category}`}>
                            <h3 className="Event__name">{this.props.name}</h3>
                            <p className="Event__location">{this.props.city}</p>
                            <p className="Event__category">{this.props.category}</p>
                            <p className="Event__date">{this.props.date}</p>
                            <p className="Event__desc">{this.props.desc}</p>
                            <p className="Event__organizer">{this.props.organizer}</p>
                            <button className="Event__btn Event__btn--remove" onClick={this.props.click}>
                                <img className="Event__btn__img" src={remove} alt="removeEvent"/>
                            </button>
                            <button className="Event__btn Event__btn--edit" onClick={this.toggleEdit.bind(this)}>
                                <img className="Event__btn__img" src={edit} alt="editEvent"/>
                            </button>
                            <button  className="Event__btn Event__btn--zoom" onClick={this.zoomOn.bind(this)}>
                                <img className="Event__btn__img" src={zoom} alt="zoomOnEvent"/>
                            </button>
                        </div>


                    </div>
                    <div className={[this.state.zoom, this.props.category].join(' ')}>



                        <div className="modal-content">

                            <div className="closeBtn" onClick={this.zoomOff.bind(this)}>
                                <img className="Event__closeBtn__img" src={closeZoom} alt="closeZoom"/>

                            </div>

                            <div className="Event Event--zoom">
                                <h3 className="Event__name">{this.props.name}</h3>
                                <p className="Event__location">{this.props.city}</p>
                                <p className="Event__category">{this.props.category}</p>
                                <p className="Event__date">{this.props.date}</p>
                                <p className="Event__desc">{this.props.desc}</p>
                                <p className="Event__organizer">{this.props.organizer}</p>
                                <button className="Event__btn Event__btn--remove" onClick={this.props.click}>
                                    <img className="Event__btn__img" src={remove} alt="removeEvent"/>
                                </button>
                                <button className="Event__btn Event__btn--edit" onClick={this.toggleEdit.bind(this)}>
                                    <img className="Event__btn__img" src={edit} alt="editEvent"/>
                                </button>

                            </div>
                        </div>

                    </div>

                </div>
            )
        } else {
            return (

                //Edit event
                <div className="EventEdit">
                    <input className="EditEvent__name" type="text" ref="editName" defaultValue={this.props.name}/>
                    <input className="EditEvent__organizer" type="text" ref="editOrganizer" defaultValue={this.props.organizer}/>

                    <textarea className="EditEvent__desc" ref="editDesc" defaultValue={this.props.desc}/>

                    <input className="EditEvent__location"  type="text" ref="editCity" defaultValue={this.props.city}/>
                    <select className="EditEvent__category" ref="editCategory" defaultValue={this.props.category}>
                        <option value="cultural">cultural</option>
                        <option value="business">business</option>
                        <option value="educational">educational</option>
                        <option value="sports">sports</option>
                        <option value="art">art</option>
                        <option value="political">political</option>
                        <option value="recreational">recreational</option>
                    </select>
                    <input className="EditEvent__date"  type="date" ref="editDate" defaultValue={this.props.date}/>

                    <button className="Event__btn--saveEdit" onClick={this.someFn.bind(this)}>SAVE</button>

                </div>
            )
        }
    }


}

export default Event;