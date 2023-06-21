/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
  return (
    <div>
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img
              src="https://img.freepik.com/premium-photo/high-school-lobby-with-blue-color-lockers-perspective-view-fitness-gym-sports-club-hallway-3d-illustration_738920-955.jpg?w=996"
              alt="Image of the school"
              width="100%"
            />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img
              src="https://img.freepik.com/premium-photo/kuleli-military-high-school-istanbul-turkey_646314-2456.jpg?w=996"
              alt="..."
              width="100%"
            />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img
              src="https://img.freepik.com/premium-photo/interior-traditional-japanese-school-classroom-made-wood-3d-render_103577-6998.jpg?w=900"
              alt="..."
              width="100%"
            />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img
              src="https://img.freepik.com/premium-photo/abstract-bright-office-interior-with-work-places-blue-key-extreme-closeup-3d-rendering_476612-944.jpg?w=740"
              alt="..."
              width="100%"
            />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img
              src="https://img.freepik.com/premium-photo/corridor-modern-industrial-building_155027-1467.jpg?w=740"
              alt="..."
              width="100%"
            />
            <div className="carousel-caption">...</div>
          </div>
          ...
        </div>

        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="text-center">About Us</h1>
        </div>
        <div className="row about-us">
          <div className="col-md-6">
            <img
              src="https://media.istockphoto.com/id/1367329442/photo/portrait-of-kids-in-the-corridor-at-school.jpg?s=612x612&w=0&k=20&c=6gIAZy9oAosKMlUrzJpkvnqUhkFd4dZGtPv9BFaBrzU="
              className="img-responsive"
            />
          </div>
          <div className="col-md-6">
            <p className="para">
              A school that will help you achive your dreams and also help your
              relationship with God
            </p>
            <p className="para">
              God Inspired School was a revelation given to me by Almighty God
              to help people all around the world to achieve their dreams and to
              also have a great relationship with God. This school will be a
              free school to help those who can not afford to pay for their
              eduction. It is for children from the age of 2years to any age
              they will use to complete. It is from kindergarten to the
              university. There will be a free accomodation for students who are
              from very far places and there will be jobs opportunities for the
              students after completion of the school.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid locate">
        <div className="row">
          <h1 className="text-center">Location Of The Schools</h1>
        </div>
        <div className="row Location">
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img
                src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/5/2020_5$largeimg_1030326418.jpg"
                alt="..."
              />
              <div className="caption">
                <h3>Asia</h3>
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img
                src="https://geology.com/world/cia/map-of-north-america.gif"
                alt="..."
              />
              <div className="caption">
                <h3>North America</h3>
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img
                src="https://www.pbs.org/wnet/wideangle/files/2008/08/wa_img_cocaleros_map_intro.jpg"
                alt="..."
              />
              <div className="caption">
                <h3>South America</h3>
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <img
                src="https://www.freeworldmaps.net/africa/southafrica/southafrica-map-physical.jpg"
                alt="..."
              />
              <div className="caption">
                <h3>South Africa</h3>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row Location2">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img
                src="https://www.infoplease.com/sites/infoplease.com/files/inline-images/Europemap-2010.gif"
                alt="..."
              />
              <div className="caption">
                <h3>Europe</h3>
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img
                src="https://cdn.britannica.com/37/5737-050-CEFEC0C3/Map-Antarctica-regions-ice-sheets-research-stations-continent.jpg"
                alt="..."
              />
              <div className="caption">
                <h3>Antarctica</h3>
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img
                src="https://t4.ftcdn.net/jpg/04/85/82/99/360_F_485829903_V9Ab3Oq1JVxjrLlWm5b8JKLPYqrMOtPI.jpg"
                alt="..."
              />
              <div className="caption">
                <h3>Oceania</h3>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="text-center">About Founder</h1>
          <div className="col-md-6 about-founder">
            <img src="/public/Images/Abi.JPG" className="img-responsive" />
          </div>

          <div className="col-md-6">
            <p className="para">
              My name is Abigail Tutu. I am from Ghana. The primary and junior
              high school I attended was,{" "}
              <strong>Freshers Complex School</strong> in Accra and I completed
              it in the year 2016. The Senior high school I attended was,{" "}
              <strong>Anfoega Senior High School</strong> in the Volta Region
              and completed in the year 2019. I also attended my university in{" "}
              <strong>Ghana Comunication Technology University</strong> in Accra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
