import React from "react";

const Overview = ({ course }) => {
  return (
    <div className="wpo-course-content">
      <div className="wpo-course-text-top">
        <h2>{course?.title}</h2>
        <div className="course-b-text">
          <p>{course?.desc}</p>
          {/* <p>These courses are perfectly simple and easy to distinguish.
                        In a free hour, when our power of choice is untrammelled
                        and when nothing prevents our being able to do what we
                        like best, every pleasure is to be welcomed and every
                        pain avoided.</p>
                    <p>But in certain circumstances and owing to the claims of
                        duty or the obligations of business it will frequently
                        occur that pleasures have to be repudiated and
                        annoyances accepted. The wise man therefore always holds
                        in these matters to this principle of sEduko: he
                        rejects pleasures.</p> */}
        </div>
        {/* <div className="course-bb-text">
                    <h3>Why Choose This Course</h3>
                    <p>These courses are perfectly simple and easy to distinguish.
                        In a free hour, when our power of choice is untrammelled
                        and when nothing prevents our being able to do what we
                        like best, every pleasure.</p>
                    <ul>
                        <li>The wise man therefore always holds in these
                            matters.</li>
                        <li>In a free hour, when our power of choice and when
                            nothing.</li>
                        <li>Else he endures pains to avoid worse pains.</li>
                        <li>We denounce with righteous indignation and dislike
                            men. </li>
                        <li>Which is the same as saying through.</li>
                    </ul>
                </div> */}
      </div>
    </div>
  );
};

export default Overview;
