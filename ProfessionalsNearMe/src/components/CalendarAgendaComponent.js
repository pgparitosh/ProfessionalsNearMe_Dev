import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { FAB, TextInput, Portal, Dialog, Button, IconButton, Colors } from 'react-native-paper';
import HelperService from '../services/HelperService';

export default class CalendarAgendaComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        items: {},
        eventDesc: '',
        visible: false,
        selectedDate: '',
        deleteConfirmationPopupVisible: false,
        eventToBeDeleted: null,
    }

    componentDidMount() {
        var date = new Date();
        var selectedDate = HelperService.formatDate(date);
        // service call to fetch all events
        this.setState({
            items: {
                '2019-03-22': [{ id: 1, name: 'item 1 - any js object', dateStr: '2019-03-22' }],
                '2019-03-23': [{ id: 2, name: 'item 2 - any js object', dateStr: '2019-03-23' }],
                '2019-03-25': [{ id: 3, name: 'item 3 - any js object', dateStr: '2019-03-25' },
                { id: 4, name: 'any js object', dateStr: '2019-03-25' }],
                '2019-05-07': [{ id: 5, name: 'Newly added event 1', dateStr: '2019-05-07' }],
                '2019-05-09': [{ id: 6, name: 'Newly added event 2', dateStr: '2019-05-09' }],
                '2019-05-10': [{ id: 7, name: 'Newly added event 3', dateStr: '2019-05-10' }],
                '2019-05-11': [{ id: 8, name: 'Newly added event 5', dateStr: '2019-05-11' }],
            },
            selectedDate: selectedDate,
        });
    }

    render() {
        return (
            <View>
                <View style={{ height: 600 }}>
                    <Agenda
                        items={this.state.items}
                        style={{ backgroundColor: '#ededed' }}
                        loadItemsForMonth={() => { }}
                        selected={this.state.selectedDate}
                        renderItem={this.renderItem.bind(this)}
                        renderEmptyData={this.renderEmptyDate.bind(this)}
                        renderEmptyDate={this.renderEmptyDate.bind(this)}
                        rowHasChanged={this.rowHasChanged.bind(this)}
                        onDayPress={this.handleDayPress.bind(this)}
                        onDayChange={this.handleDayPress.bind(this)}
                        theme={{
                            agendaDayTextColor: '#6200ee',
                            agendaDayNumColor: '#6200ee',
                            agendaTodayColor: '#6200ee',
                            agendaKnobColor: '#6200ee',
                            selectedDayBackgroundColor: '#6200ee',
                            dotColor: '#6200ee',
                            todayTextColor: '#6200ee',
                        }}
                    />
                </View>
                <View style={{ marginRight: 20, marginTop: 20 }}>
                    <FAB
                        style={{
                            position: 'absolute',
                            alignSelf: 'flex-end',
                            marginRight: 16,
                            backgroundColor: '#6200ee',
                        }}
                        icon="add"
                        onPress={this.createEvent.bind(this)}
                    />
                    <Portal style={{ height: 160, maxHeight: 160, flex: 0 }}>
                        <Dialog
                            style={{
                                elevation: 1,
                                backgroundColor: "white",
                                flex: 1,
                                justifyContent: "center",
                                height: 160,
                                maxHeight: 160,
                                width: '90%',
                                marginLeft: 20,
                                marginRight: 20,
                            }}
                            visible={this.state.deleteConfirmationPopupVisible}
                            onDismiss={() => this.setState({ deleteConfirmationPopupVisible: false })}>
                            <Dialog.Title>Delete Event</Dialog.Title>
                            <Dialog.Content>
                            <Text>Are you sure you want to delete this event?</Text>
                        </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={() => this.setState({deleteConfirmationPopupVisible: false})} color="grey">Cancel</Button>
                                <Button onPress={this._removeEvent.bind(this)} color="red">Delete</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
                <Portal style={{ height: 200, maxHeight: 200, flex: 0 }}>
                    <Dialog
                        style={{
                            elevation: 1,
                            backgroundColor: "white",
                            flex: 1,
                            justifyContent: "center",
                            height: 200,
                            maxHeight: 200,
                            width: '90%',
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        visible={this.state.visible}
                        onDismiss={() => this.setState({ visible: false })}>
                        <Dialog.Title>Event Description</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                label='Event Description'
                                mode='flat'
                                placeholder='Enter your event details'
                                value={this.state.eventDesc}
                                onChangeText={(eventDesc) => this.setState({ eventDesc })}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={this._hideDialog.bind(this)} color="grey">Cancel</Button>
                            <Button onPress={this._saveEvent.bind(this)}>Save</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        );
    }

    handleDayPress(day) {
        let dateStr = day.dateString;
        this.setState({
            selectedDate: dateStr,
        });
    }

    renderItem(item) {
        return (
            <View style={[styles.item, { height: item.height }]}>
                <View>
                    <Text>{item.name}</Text>
                </View>
                <View>
                    <IconButton
                        icon="delete"
                        color={Colors.red500}
                        size={30}
                        style={{
                        }}
                        onPress={() => this.setState({
                            eventToBeDeleted: item,
                            deleteConfirmationPopupVisible: true,
                        })}
                    />
                </View>
            </View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>No event added for selected date yet!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    createEvent() {
        this.setState({
            visible: true,
        });
    }

    _hideDialog() {
        this.setState({
            visible: false,
        });
    }

    _saveEvent() {
        let selectedDate = this.state.selectedDate;
        let eventDesc = this.state.eventDesc;
        let items = this.state.items;
        if (items[selectedDate] === undefined) {
            items[selectedDate] = [];
        }

        //service call which would return an id
        let id = 14;
        items[selectedDate].push({
            name: eventDesc,
            id: id,
            dateStr: selectedDate,
        });
        this.setState({
            items: items,
            visible: false,
            eventDesc: '',
        });
    }

    _removeEvent() {
        let event = this.state.eventToBeDeleted;
        let items = this.state.items;
        let eventsForSelectedDate = items[event.dateStr];
        var index = eventsForSelectedDate.findIndex(eventList => eventList.id === event.id);
        eventsForSelectedDate.splice(index, 1);
        if (eventsForSelectedDate.length === 0) {
            delete items[event.dateStr];
        }
        else {
            items[event.dateStr] = eventsForSelectedDate;
        }
        // make service call to delete an event
        this.setState({
            items: items,
            deleteConfirmationPopupVisible: false,
        });
    }

    _setSelectedDay(date) {
        this.setState({
            selectedDate: date,
        });
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
        marginLeft: 20,
    }
});