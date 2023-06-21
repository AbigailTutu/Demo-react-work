/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <div className="jumbotron jumbo">
        <div className="container jumbo-inner">
          <h1>Courses</h1>
          <p>
            So many courses are available to our students so they should make
            their right choice
          </p>
          <p>
            <Link
              className="btn btn-primary btn-lg"
              to="/learnMore"
              role="button"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>

      <div className="container courses">
        <div className="row">
          <div className="col-md-6">
            <h1>Kindergarten Courses</h1>
            <img
              src="https://static.wixstatic.com/media/c1c98a_def3b490d6cd4ffaadc38f80170d69c2~mv2_d_5488_3658_s_4_2.jpg/v1/fill/w_640,h_524,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c1c98a_def3b490d6cd4ffaadc38f80170d69c2~mv2_d_5488_3658_s_4_2.jpg"
              className="img-responsive"
            />
            <ul>
              <li>Reading</li>
              <li>Writing</li>
              <li>Mathematics</li>
              <li>Speaking the English Language</li>
              <li>
                Any other language of their choice(French, Spanish, Chinese)
              </li>
              <li>Health</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h1>Primary Coruse</h1>
            <img
              src="https://www.riverviewprimary.co.uk/img/community/parents-courses/header-large.jpg?5db97de4"
              className="img-responsive"
              width="900px"
            />
            <ul>
              <li>Social studies</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>English language</li>
              <li>Any Language of your choice(French, Spanish, Chinese)</li>
              <li>Religious and moral</li>
              <li>Art Education</li>
              <li>Citizenship</li>
              <li>Music</li>
              <li>Study of the Bible</li>
              <li>Prayer</li>
              <li>Health</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Middle School Courses</h1>
            <img
              src="https://insightaz.k12.com/content/mps/isaz/en/stride-career-prep/middle-school-explorations/_jcr_content/root/main-section/section_1457238630_c/section-elements/responsivegrid/column0/image_378255295.adaptimg.940.jpg/1618954648945.jpg"
              className="img-responsive"
            />
            <ul>
              <li>Science</li>
              <li>Mathematics</li>
              <li>English</li>
              <li>Music</li>
              <li>Study of the Bible</li>
              <li>Prayer</li>
              <li>Physical Education</li>
              <li>Art Education</li>
              <li>Social Studies</li>
              <li>Health</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h1>High School Courses</h1>
            <img
              src="https://s.marketwatch.com/public/resources/images/MW-HK108_nwstud_ZG_20190522132152.jpg"
              className="img-responsive"
            />
            <ul>
              <li>Core Science</li>
              <li>Core Mathematic</li>
              <li>English</li>
              <li>Social Studies</li>
              <li>Science Students</li>
              <li>General Arts Students</li>
              <li>Business Students</li>
              <li>Visual Arts Students</li>
              <li>Home Economic Students</li>
              <li>Clothing Students</li>
              <li>Bible Studies</li>
              <li>Prayer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1>Collage Courses</h1>
          <img
            src="https://www.affordablecollegesonline.org/app/uploads/2021/03/GettyImages-143071442.jpg"
            className="img-responsive"
          />
          <ul>
            <li>Information Technology</li>
            <li>Computer Science</li>
            <li>Business</li>
            <li>Nursing</li>
            <li>Engineer</li>
            <li>Law</li>
            <li>Fashion</li>
            <li>Media</li>
            <li>Sociology</li>
            <li>Accounting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
