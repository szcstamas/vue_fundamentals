import EventCard from "@/components/EventCard.vue"
import { mount } from "@vue/test-utils"

describe('EventCard', () => {
  it('renders event data successfully', () => {
      const event = {
        id: 1,
        time: '12:00PM',
        date: 'September 29th, 2022',
        title: 'Coaching Little League',
        organizer: {
          name: "Tamas Szucs"
        }
      }
      const wrapper = mount(EventCard, {
        props: {
          event
        }
      })

      const wrapperHtml = wrapper.html()
      expect(wrapperHtml).toContain(event.date)
      expect(wrapperHtml).toContain(event.time)
      expect(wrapperHtml).toContain(event.title)
  })
})
