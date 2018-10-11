import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Col,
  Row
} from 'reactstrap';
import Beach from '../images/beachImg.jpg';
import Sillouette from '../images/sillouette.jpg';
import Otcrew from '../images/otcrew.jpg'
import Anon from '../images/anon.jpg'
import Rockies from '../images/rockies.jpg'
import Oldsoul from '../images/oldsoul.jpg'
import '../css/About.css'

const items = [
  {
    src: Beach,
    altText: 'Miami, FL',
    caption: 'Sometimes you just need the sunrise.'
  },
  {
    src: Sillouette,
    altText: 'Park Bench',
    caption: 'Other times you just need to think.'
  },
  {
    src: Otcrew,
    altText: 'OpenTable Zero Day',
    caption: 'One of the best teams I have ever worked with.'
  },
  {
    src: Anon,
  },
  {
    src: Rockies,
    altText: 'Rockies Game',
    caption: 'Nothing like a baseball game with friends after work.'
  },
  {
    src: Oldsoul
  }
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <Row className='projects'>
                <Col sm="12">
                  <img className='aboutImg' center src={item.src} alt={item.altText} />
                </Col>
              </Row>
              <CarouselCaption captionText={item.caption}/>
            </CarouselItem>
      );
    });

    return (
      <div id='about' className='carouselSettings'>
      <h1>A Little About Me</h1>
        <Carousel 
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}


export default About;