import React from 'react';

export default function MySlide() {
  return (
    <div id="carouselExampleControls" className="carousel slide m-3 mt-3 rounded" data-bs-ride="carousel" style={{ backgroundImage: 'url("https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg")' }}>
      <div className="carousel-inner d-flex">
        <div className="carousel-item active">
          <div className="d-flex pt-2 pb-2" style={{ justifyContent: 'space-evenly' }}>
            <div>
              <a href="https://www.litres.ru/edit-eva-eger/vybor/"><img src="https://cv7.litres.ru/pub/c/cover_max1500/48508375.jpg" className="d-block w-40 h-60 mx-auto rounded" style={{ width: '400px', height: '600px' }} alt="..." /></a>
            </div>
            <div>
              <a href="https://www.litres.ru/book/dar-12-kluchey-k-vnutrennemu-osvobozhdeniu-i-obreteniu-sebya-64499616/"><img src="https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/64499616-edit-eva-eger-dar-12-kluchey-k-vnutrennemu-osvobozhdeniu-i-obreteniu-sebya.jpg" className="d-block w-40 h-60 mx-auto rounded" style={{ width: '400px', height: '600px' }} alt="..." /></a>
            </div>
          </div>
        </div>
        <div className="carousel-item pt-2 pb-2">
          <div className="d-flex" style={{ justifyContent: 'space-evenly' }}>
            <div>
              <a href="https://www.litres.ru/book/sapiens-kratkaya-istoriya-chelovechestva-22150614/"><img src="https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/22150614-book-sapiens-kratkaya-istoriya-chelovechestva-22150614.jpg" className="d-block w-40 h-60 mx-auto rounded" style={{ width: '400px', height: '600px' }} alt="..." /></a>
            </div>
            <div>
              <a href="https://www.litres.ru/uval-noy-harari/homo-deus-kratkaya-istoriya-buduschego/"><img src="https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/36300631-uval-noy-harari-homo-deus-kratkaya-istoriya-buduschego.jpg" className="d-block w-40 h-60 mx-auto rounded" style={{ width: '400px', height: '600px' }} alt="..." /></a>
            </div>
          </div>
        </div>
        <div className="carousel-item pt-2 pb-2">
          <div className="d-flex" style={{ justifyContent: 'space-evenly' }}>
            <div>
              <a href="https://www.litres.ru/book/ne-navredi-istorii-o-zhizni-smerti-i-neyrohirurgii-18506362/"><img src="https://cv6.litres.ru/pub/c/cover_max1500/18506362.jpg" className="d-block w-40 h-60 mx-auto rounded" style={{ width: '400px', height: '600px' }} alt="..." /></a>
            </div>
            <div>
              <a href="https://www.litres.ru/book/vtoraya-zhizn-uve-20690188/"><img src="https://cv8.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/20690188-book-vtoraya-zhizn-uve-20690188.jpg" className="d-block w-40 h-60 mx-auto rounded" style={{ width: '400px', height: '600px' }} alt="..." /></a>
            </div>
          </div>
        </div>
        <div className="carousel-item pt-2 pb-2">
          <div className="d-flex" style={{ justifyContent: 'space-evenly' }}>
            <div>
              <a href="https://www.litres.ru/irvin-yalom/lzhec-na-kushetke/"><img src="https://cv8.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/6719381-irvin-yalom-lzhec-na-kushetke.jpg" className="d-block w-40 h-60 mx-auto rounded" style={{ width: '400px', height: '600px' }} alt="..." /></a>
            </div>
            <div>
              <a href="https://www.litres.ru/irvin-yalom/kak-ya-stal-soboy-vospominaniya-36080145/"><img src="https://cv5.litres.ru/pub/c/cover_max1500/33165951.jpg" className="d-block w-40 h-60 mx-auto rounded" style={{ width: '400px', height: '600px' }} alt="..." /></a>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev warning" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon warning" aria-hidden="true" />
        <span className="visually-hidden text-warning">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden text-warning">Next</span>
      </button>
    </div>
  );
}
