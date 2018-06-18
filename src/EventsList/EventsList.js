import React, {Component} from 'react';
import Event from '../Event/Event.js';
import './EventsList.css';

class EventList extends Component {


    state = {
        events: [
            {id: 1, name: 'LOREM SILESIA', city: 'gliwice', category: 'cultural', date: '2018-06-22', desc: 'consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut cons', organizer: 'SILESIA'},
            {id: 2, name: 'LOREM BUSINESS', city: 'warszawa', category: 'business', date: '2018-07-18', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'CEO '},
            {id: 3, name: 'LOREM WEB ', city: 'opole', category: 'educational', date: '2018-06-20', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'DESIGNER'},
            {id: 4, name: 'LOREM BALL', city: 'katowice', category: 'sports', date: '2018-10-03', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'SPORTS & CO'},
            {id: 5, name: 'LOREM SPORTS', city: 'gliwice', category: 'art', date: '2018-08-15', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'GALLERY'},
            {id: 6, name: 'LOREM MINISTER', city: 'szczecin', category: 'political', date: '2018-07-21', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'PARLAMENT'},
            {id: 7, name: 'LOREM DANCE', city: 'zabrze', category: 'recreational', date: '2018-07-10', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'CINEMACITY'},
            {id: 8, name: 'LOREM SILESIA2', city: 'gliwice', category: 'cultural', date: '2018-06-22', desc: 'consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut cons', organizer: 'SILESIA'},
            {id: 9, name: 'LOREM BUSINESS2', city: 'warszawa', category: 'business', date: '2018-07-18', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'CEO '},
            {id: 10, name: 'LOREM WEB2 ', city: 'opole', category: 'educational', date: '2018-06-20', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'DESIGNER'},
            {id: 11, name: 'LOREM BALL2', city: 'katowice', category: 'sports', date: '2018-10-03', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'SPORTS & CO'},
            {id: 12, name: 'LOREM SPORTS2', city: 'gliwice', category: 'art', date: '2018-08-15', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'GALLERY'},
            {id: 13, name: 'LOREM MINISTER2', city: 'szczecin', category: 'political', date: '2018-07-21', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'PARLAMENT'},
            {id: 14, name: 'LOREM DANCE2', city: 'zabrze', category: 'recreational', date: '2018-07-10', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat vestibulum ex. Curabitur quis sapien felis. Praesent dictum justo velit, ut consectetur enim ullamcorper eget. Vivamus gravida nibh odio, sit amet ullamcorper ipsum congue id. Suspendisse potenti.', organizer: 'CINEMACITY'}
            ],

        showPersons: false,
        categoryShow: null,
        categoryShowAll: true,
        search: '',
    };

    deleteEventHandler = (eventIndex) => {
        console.log(eventIndex);
        const myEvents = this.state.events;
        myEvents.splice(eventIndex, 1);
        this.setState({events: myEvents})
    };
    setCategory = (category) => {
        this.setState({categoryShowAll: false});
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
        this.setState({categoryShow: category});
    };
    setCategoryAll = () => {
        this.setState({categoryShowAll: true});
    };
    updateSearch = (event) => {
        this.setState({search: event.target.value.substr(0, 20)});
    };
    addEvent = (event) => {


        event.preventDefault();
        let name = this.refs.name.value;
        let city = this.refs.city.value;
        let category = this.refs.category.value;
        let date = this.refs.date.value;
        let desc = this.refs.desc.value;
        let organizer = this.refs.organizer.value;
        let id = this.state.events.length + 1;

        this.setState({
            events: this.state.events.concat({id, name, city, category, date, desc, organizer})  //copy array
        });

        this.refs.name.value = '';
        this.refs.city.value = '';
        this.refs.category.value = '';
        this.refs.date.value = '';
        this.refs.desc.value = '';
        this.refs.organizer.value = '';
    };
    getCurrentDate = () => {
        let currentDate = new Date();
        let dd = currentDate.getDate();
        let mm = currentDate.getMonth() + 1;
        let yyyy = currentDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        currentDate = yyyy + '-' + mm + '-' + dd;
        return currentDate;
    };

    changeText = (newId, newName, newCity, newCategory, newDate, newDesc, newOrganizer) => {

        const eventIndex = this.state.events.findIndex(e => {
            return e.id === newId;
        });

        const mojEvent = Object.assign({}, this.state.events[eventIndex]);


        mojEvent.name = newName;
        mojEvent.city = newCity;
        mojEvent.category = newCategory;
        mojEvent.date = newDate;
        mojEvent.desc = newDesc;
        mojEvent.organizer = newOrganizer;


        const events = [...this.state.events];
        events[eventIndex] = mojEvent;


        this.setState({
            events: events
        });
    };


    render() {
        let filteredEvents = this.state.events.filter(
            (e) => {
                return e.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        let content = null;

        content = (
            <div>
                <div className="searchBar">
                    <p className="searchLabel">Search by name:</p>
                    <input className="searchField" type="text" value={this.state.search}
                           onChange={this.updateSearch.bind(this)}/>

                </div>

                <div className="eventsList__list">
                    {filteredEvents.map((e, index) => {
                        if (this.state.categoryShowAll) {
                            return <Event
                                click={this.deleteEventHandler.bind(this, index)}
                                changeText={this.changeText.bind(this)}
                                name={e.name}
                                city={e.city}
                                category={e.category}
                                date={e.date}
                                desc={e.desc}
                                organizer={e.organizer}
                                key={e.id}
                                id={e.id}
                            />
                        }
                        else if (e.category === this.state.categoryShow) {
                            return <Event
                                click={this.deleteEventHandler.bind(this, index)}
                                changeText={this.changeText.bind(this)}
                                name={e.name}
                                city={e.city}
                                category={e.category}
                                date={e.date}
                                desc={e.desc}
                                organizer={e.organizer}


                                key={e.id}
                                id={e.id}

                            />
                        }
                    })}
                </div>
            </div>
        );


        return (
            <div className="eventsList">
                <section className="eventsList__addEvent">
                    <h2 className="addEvent__title">ADD NEW EVENT</h2>
                    <form className="addEvent__form" onSubmit={this.addEvent.bind(this)}>
                        <input className="addEvent__input--name" type="text" ref="name" placeholder="name"/>
                        <input className="addEvent__input--desc" type="text" ref="desc" placeholder="description"/>
                        <input className="addEvent__input--organizer" type="text" ref="organizer" placeholder="organizer"/>
                        <input className="addEvent__input--city" type="text" ref="city" placeholder="city"/>
                        <select className="addEvent__input--category" ref="category">
                            <option value="cultural">cultural</option>
                            <option value="business">business</option>
                            <option value="educational">educational</option>
                            <option value="sports">sports</option>
                            <option value="art">art</option>
                            <option value="political">political</option>
                            <option value="recreational">recreational</option>
                        </select>
                        <input className="addEvent__input--date" ref="date" type="date" min={this.getCurrentDate()}/>
                        <button className="addEvent__input--submit" type="submit">ADD</button>
                    </form>
                </section>

                <section className="eventsList__browseEvents">

                    <h4 className="categories__title">BROWSE EVENTS</h4>
                    <div className="eventsList__categories">
                        <button className="categories__element" onClick={this.setCategoryAll.bind(this)}>ALL</button>
                        <button className="categories__element" onClick={this.setCategory.bind(this, "cultural")}>cultural</button>
                        <button className="categories__element" onClick={this.setCategory.bind(this, "business")}>business</button>
                        <button className="categories__element" onClick={this.setCategory.bind(this, "educational")}>educational</button>
                        <button className="categories__element" onClick={this.setCategory.bind(this, "sports")}>sports</button>
                        <button className="categories__element" onClick={this.setCategory.bind(this, "art")}>art</button>
                        <button className="categories__element" onClick={this.setCategory.bind(this, "political")}>political</button>
                        <button className="categories__element" onClick={this.setCategory.bind(this, "recreational")}>recreational</button>
                    </div>
                        {content}

                </section>
            </div>
        );
    }
}
export default EventList;

