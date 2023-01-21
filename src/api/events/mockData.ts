import { Event as MainPageEvent } from '../../pages/main/model/types'
import { Event as EventPageEvent } from '../../pages/event/model/types'

function getMockDataGetEvents(): MainPageEvent[] {
  return [
    {
      id: '1064dbab-38a7-46f6-a6c7-a47d35527392',
      title: 'Event #2',
      description: 'Event #2 Description',
      userName: 'Yaroslav7',
      start: new Date('2022-11-19T20:27:21.083Z'),
      duration: 100000,
      participantsCount: 0,
      isLikeSet: false
    },
    {
      id: '3696c9b0-871a-4551-b054-350676ef00fa',
      title: 'Event #1',
      description: 'Event #1 Description',
      userName: 'Yaroslav7',
      start: new Date('2022-11-19T20:26:39.466Z'),
      duration: 100000,
      price: 100,
      participantsCount: 0,
      isLikeSet: false
    },
    {
      id: 'e23547c0-5b27-4335-a22e-b37281290e65',
      title: 'Event #3',
      description: 'Event #3 Description',
      userName: 'Yaroslav7',
      start: new Date('2022-11-19T20:27:57.461Z'),
      duration: 50000,
      price: 50,
      participantsCount: 0,
      isLikeSet: false
    },
    {
      id: '3696c9b0-871a-4551-b054-350676ef00fa',
      title: 'Event #1',
      description: 'Event #1 Description',
      userName: 'Yaroslav7',
      start: new Date('2022-11-19T20:26:39.466Z'),
      duration: 100000,
      price: 100,
      participantsCount: 0,
      isLikeSet: false
    },
    {
      id: 'e23547c0-5b27-4335-a22e-b37281290e65',
      title: 'Event #3',
      description: 'Event #3 Description',
      userName: 'Yaroslav7',
      start: new Date('2022-11-19T20:27:57.461Z'),
      duration: 50000,
      price: 50,
      participantsCount: 0,
      isLikeSet: false
    },
    {
      id: '3696c9b0-871a-4551-b054-350676ef00fa',
      title: 'Event #1',
      description: 'Event #1 Description',
      userName: 'Yaroslav7',
      start: new Date('2022-11-19T20:26:39.466Z'),
      duration: 100000,
      price: 100,
      participantsCount: 0,
      isLikeSet: false
    },
    {
      id: 'e23547c0-5b27-4335-a22e-b37281290e65',
      title: 'Event #3',
      description: 'Event #3 Description',
      userName: 'Yaroslav7',
      start: new Date('2022-11-19T20:27:57.461Z'),
      duration: 50000,
      price: 50,
      participantsCount: 0,
      isLikeSet: false
    },
    {
      id: '3696c9b0-871a-4551-b054-350676ef00fa',
      title: 'Event #1',
      description: 'Event #1 Description',
      userName: 'Yaroslav7',
      start: new Date('2022-11-19T20:26:39.466Z'),
      duration: 100000,
      price: 100,
      participantsCount: 0,
      isLikeSet: false
    },
    {
      id: 'e23547c0-5b27-4335-a22e-b37281290e65',
      title: 'Event #3',
      description: 'Event #3 Description',
      userName: 'Yaroslav7',
      start: new Date('2022-11-19T20:27:57.461Z'),
      duration: 50000,
      price: 50,
      participantsCount: 0,
      isLikeSet: false
    }
  ]
}

function getMockDataGetEvent(): EventPageEvent {
  return {
    id: '1064dbab-38a7-46f6-a6c7-a47d35527392',
    title: 'Event #2',
    description: 'Event #2 Description',
    userName: 'Yaroslav7',
    start: new Date('2022-11-19T20:27:21.083Z'),
    duration: 100000,
    participantsCount: 0,
    isLikeSet: false
  }
}

export {
  getMockDataGetEvents,
  getMockDataGetEvent
}
