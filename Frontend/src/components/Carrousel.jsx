import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

function Carrousel() {
  return (
    <Carousel className='bg-carousel p-3'>
      <Carousel.Item>
        <CarouselImage src="https://cdn.shopify.com/s/files/1/2358/2817/products/nike-sb-dunk-high-run-the-jewels-1.png?v=1681832998" text="First slide" />
        <Carousel.Caption className='d-none d-md-block'>
          <div className='d-md-flex flex-column'>
            <h3>Nike SB Dunk High Run The Jewels</h3>
            <p>Dúo icónico de la escena de rap estadounidense, Correr las joyas asociado con ¡Y nos ofrece una edición especial que rinde homenaje a su cuarto álbum!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src="https://cdn.shopify.com/s/files/1/2358/2817/files/adidas-yeezy-slide-slate-marine-1.png?v=1691573716" text="Second slide" />
        <Carousel.Caption>
          <div className='d-flex flex-column  justify-content-center '>
            <h3>Adidas Yeezy Slide Slate Marine</h3>
            <p>Las famosas Adidas Yeezy Slide Slate Marine hechas a partir de goma eva, comodidad al maximo!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src="https://cdn.shopify.com/s/files/1/2358/2817/files/UGG-Classic-Ultra-Mini-Platform-Black_4.png?v=1701787140" text="Third slide" />
        <Carousel.Caption>
          <div className='d-flex flex-column  justify-content-center '>
            <h3>UGG Classic Mini Platform Boot Black</h3>
            <p>Brand de Winter Star, UGG devuelve con su silueta clásica en la versión elevada en una versión oscura</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;