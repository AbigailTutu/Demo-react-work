/* eslint-disable no-unused-vars */
import React from "react";

const Hostels = () => {
  return (
    <div>
      <div
        id="carousel-example-generic"
        className="carousel slide caro"
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
              src="https://img.freepik.com/premium-photo/friends-casual-students-indoors-using-their-phones_573497-557.jpg?w=740"
              alt="..."
              className="img-responsive"
              width="100%"
            />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img
              src="https://img.freepik.com/premium-photo/young-people-dormitory-spending-free-time-brazilian-girl-with-curly-hair-sitting-bunk-bed-talking-boy_573497-429.jpg?w=740"
              alt="..."
              className="img-responsive"
              width="100%"
            />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img
              src="https://img.freepik.com/premium-photo/modern-dorm-room-grey-walls-yellow-bookcase-twin-bed-with-photo-frame-interior-concept-3d-rendering_626958-315.jpg?w=900"
              alt="..."
              className="img-responsive"
              width="100%"
            />
            <div className="carousel-caption">...</div>
          </div>
          <div className="item">
            <img
              src="https://img.freepik.com/premium-photo/3d-rendering-modern-kitchen-design-with-flush-cabinet-by-sedat-seven_626958-396.jpg"
              alt="..."
              className="img-responsive"
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

      <div className="container pics-of-hostels">
        <h1>Pictures of some of our hostels</h1>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <a href="/Images/pics-of-hostels1.jpg" className="thumbnail">
              <img
                src="/Images/pics-of-hostels1.jpg"
                className="img-responsive"
                alt="..."
              />
            </a>
          </div>

          <div className="col-xs-6 col-md-3">
            <a href="/Images/pics-of-hostels2.jpg" className="thumbnail">
              <img
                src="/Images/pics-of-hostels2.jpg"
                className="img-responsive"
                alt="..."
              />
            </a>
          </div>

          <div className="col-xs-6 col-md-3">
            <a href="/Images/pics-of-hostels3.jpg" className="thumbnail">
              <img
                src="/Images/pics-of-hostels3.jpg"
                className="img-responsive"
                alt="..."
              />
            </a>
          </div>

          <div className="col-xs-6 col-md-3">
            <a href="/public/Images/pics-of-hostels4.jpg" className="thumbnail">
              <img
                src="/public/Images/pics-of-hostels4.jpg"
                className="img-responsive"
                alt="..."
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-md-3">
            <a href="/Images/pics-of-hostels5.jpg" className="thumbnail">
              <img
                src="/Images/pics-of-hostels5.jpg"
                className="img-responsive"
                alt="..."
              />
            </a>
          </div>

          <div className="col-xs-6 col-md-3">
            <a href="/Images/pics-of-hostels6.jpg" className="thumbnail">
              <img
                src="/Images/pics-of-hostels6.jpg"
                className="img-responsive"
                alt="..."
              />
            </a>
          </div>

          <div className="col-xs-6 col-md-3">
            <a href="/Images/pics-of-hostels7.jpg" className="thumbnail">
              <img
                src="/Images/pics-of-hostels7.jpg"
                className="img-responsive"
                alt="..."
              />
            </a>
          </div>

          <div className="col-xs-6 col-md-3">
            <a href="/Images/pics-of-hostels8.jpg" className="thumbnail">
              <img
                src="/Images/pics-of-hostels8.jpg"
                className="img-responsive"
                alt="..."
              />
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>We also have gym for our students in order to be fit</h1>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <a href="/Images/pic-of-gym1.jpg">
                <img src="/Images/pic-of-gym1.jpg" alt="..." />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <a href="/Images/pic-of-gym2.jpg">
                <img src="/Images/pic-of-gym2.jpg" alt="..." />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <a href="/Images/pic-of-gym3.jpg">
                <img src="/Images/pic-of-gym3.jpg" alt="..." />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <a href="/Images/pic-of-gym4.jpg">
                <img src="/Images/pic-of-gym4.jpg" alt="..." />
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <a href="/Images/pic-of-gym5.jpg">
                <img src="/Images/pic-of-gym5.jpg" alt="..." />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <a href="/Images/pic-of-gym6.jpg">
                <img src="/Images/pic-of-gym6.jpg" alt="..." />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <a href="/Images/pic-of-gym7.jpg">
                <img src="/Images/pic-of-gym7.jpg" alt="..." />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
              <a href="/Images/pic-of-gym8.jpg">
                <img src="/Images/pic-of-gym8.jpg" alt="..." />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>Pools are avaliable as well for students</h1>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="thumbnail">
              <a href="/Images/pic-of-pool1.jpg">
                <img src="/Images/pic-of-pool1.jpg" alt="..." />
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="thumbnail">
              <a href="/Images/pic-of-pool2.jpg">
                <img src="/Images/pic-of-pool2.jpg" alt="..." />
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="thumbnail">
              <a href="/Images/pic-of-pool3.jpg">
                <img src="/Images/pic-of-pool3.jpg" alt="..." />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostels;
